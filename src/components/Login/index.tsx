import Link from 'next/link';
import style from './Login.module.css';

const Login = () => {
  return (
    <div className={style.login_wrap}>
      <Link href={'/'} className={style.logo}>
        MeNow
      </Link>
      <form>
        <input placeholder="이메일을 입력하세요." />
        <input placeholder="비밀번호를 입력하세요." />
        <button>로그인</button>
        <button>
          <Link href={'/register'}>회원가입</Link>
        </button>
      </form>
    </div>
  );
};
export default Login;
