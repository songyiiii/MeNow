import Link from 'next/link';
import style from './Login.module.css';
import { useForm } from 'react-hook-form';
import { loginUser } from '@/pages/api/userApi';
import { LoginData, ServerError } from '@/types';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '@/redux/redux';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>();

  const handleLogin = async (data: LoginData) => {
    try {
      const response = await loginUser(data);
      dispatch(setUserInfo(response.userInfo));
      router.push('/');
    } catch (err) {
      const error = err as ServerError;
      switch (error.response?.status) {
        case 400:
          setError('email', {
            type: 'manual',
            message: error.response.data.message || '존재하지 않는 회원입니다.',
          });
          break;
        case 401:
          setError('password', {
            type: 'manual',
            message:
              error.response.data.message || '비밀번호가 일치하지 않습니다.',
          });
          break;
        default:
          console.error('로그인 실패', error);
          break;
      }
    }
  };
  return (
    <div className={style.login_wrap}>
      <Link href={'/'} className={style.logo}>
        MeNow
      </Link>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          placeholder="이메일을 입력하세요."
          {...register('email', { required: '이메일을 입력해주세요' })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          placeholder="비밀번호를 입력하세요."
          type="password"
          {...register('password', { required: '비밀번호를 입력해주세요' })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">로그인</button>
        <button type="button">
          <Link href={'/register'}>회원가입</Link>
        </button>
      </form>
    </div>
  );
};
export default Login;
