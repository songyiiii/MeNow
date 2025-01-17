import Link from 'next/link';
import { FaUserEdit } from 'react-icons/fa';
import style from './Signup.module.css';
import { useForm } from 'react-hook-form';
import { registerUser } from '@/pages/api/userApi';
import { ServerError, UserData } from '@/types';
import { sendSms } from '@/pages/api/smsApi';
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<UserData>();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const password = watch('password');

  const onSubmit = async (data: UserData) => {
    try {
      const userData = { ...data, role: 'user' };
      const response = await registerUser(userData);
      console.log(response);
    } catch (err) {
      const error = err as ServerError;
      switch (error.response?.status) {
        case 400:
          setError('email', {
            type: 'manual',
            message: error.response.data.message || '이미 존재하는 회원입니다',
          });
          break;
        case 401:
          setError('nickname', {
            type: 'manual',
            message: error.response.data.message || '중복된 닉네임입니다',
          });
          break;
        default:
          console.error('회원가입 실패', errors);
          break;
      }
    }
  };

  const handleSendSms = async () => {
    const phone = watch('phone');
    const message = 'MeNow 인증번호 : ';
    try {
      const response = await sendSms(phone, message);
      console.log('sms전송 성공', response.data);
    } catch (error) {
      console.error('sms전송 실패', error);
    }
  };

  return (
    <div className={style.signup_wrap}>
      <Link href={'/'} className={style.logo}>
        MeNow
      </Link>
      <FaUserEdit className={style.profile} />

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="이메일"
          {...register('email', {
            required: true,
            pattern: {
              value: emailRegex,
              message: '이메일 형식에 맞게 입력해주세요',
            },
          })}
        />
        {errors?.email && <p className="error">{errors.email.message}</p>}
        <input
          placeholder="소문자, 숫자, 특수문자 포함 8자리 이상"
          type="password"
          {...register('password', {
            required: true,
            pattern: {
              value: passwordRegex,
              message: '소문자, 숫자, 특수문자 포함 8자리 이상이여야 합니다',
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          placeholder="비밀번호 확인"
          type="password"
          {...register('confirm', {
            required: '비밀번호 확인을 입력하세요',
            validate: (value) =>
              value === password || '비밀번호가 일치하지 않습니다',
          })}
        />
        {errors.confirm && <p className="error">{errors.confirm.message}</p>}
        <input placeholder="이름" {...register('name', { required: true })} />
        <div className={style.sms}>
          <input
            placeholder="전화번호 입력"
            {...register('phone', { required: true })}
          />
          <button type="button" onClick={handleSendSms}>
            인증하기
          </button>
        </div>
        <input
          placeholder="닉네임 입력"
          {...register('nickname', { required: true })}
        />
        {errors.nickname && <p className="error">{errors.nickname.message}</p>}

        <div className={style.gender}>
          남
          <input
            type="radio"
            value={'male'}
            {...register('gender', { required: true })}
          />
          여
          <input
            type="radio"
            value={'female'}
            {...register('gender', { required: true })}
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};
export default Register;
