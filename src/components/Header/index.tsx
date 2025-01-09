import Link from 'next/link';
import style from './Header.module.css';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
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
      <div className={style.header_middle}>
        <div>
          <Link href={'/'}>포트폴리오</Link>
          <Link href={'/'}>등록하기</Link>
          <Link href={'/'}>협업요청</Link>
        </div>
        <div className={style.header_middle_right}>
          <Link href={'/'}>로그인</Link>
        </div>
      </div>
      <ul className={style.header_bottom}>
        <li>예술･창작</li>
        <li>기술･개발</li>
        <li>비즈니스･관리</li>
        <li>엔턴테인먼트･미디어</li>
        <li>교육･연구</li>
        <li>건강･웰니스</li>
        <li>기타</li>
      </ul>
    </header>
  );
};
export default Header;
