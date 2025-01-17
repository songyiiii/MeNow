import Link from 'next/link';
import style from './Header.module.css';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${style.header} ${isScroll ? style.scrolled : ''}`}>
      <div className={style.header_top}>
        <Link href={'/'} className={style.logo}>
          MeNow
        </Link>
        <div className={style.mobile_icon}>
          <FaBars />
        </div>
      </div>
      <div className={style.header_bottom}>
        <div>
          <Link href={'/'}>등록하기</Link>
          <Link href={'/'}>협업요청</Link>
          <Link href={'/'}>카테고리</Link>
        </div>
        <div className={style.header_bottom_right}>
          {user ? (
            <Link href={'/mypage'}>마이페이지</Link>
          ) : (
            <Link href={'/login'}>로그인</Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
