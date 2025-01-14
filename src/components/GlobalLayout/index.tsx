import { ReactNode, useEffect, useState } from 'react';
import style from './GlobalLayout.module.css';
import Header from '../Header';
import { useRouter } from 'next/router';

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const router = useRouter();
  const hiddenPaths = ['/login', '/register'];
  const isHidden = hiddenPaths.includes(router.pathname);
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
    <div className={style.container}>
      {!isHidden && <Header />}
      <main className={`${style.main} ${isScroll ? style.scrolled : ''} ${isHidden ? style.hidden_header:''}`}>
        {children}
      </main>
      {!isHidden && <footer className={style.footer}>제작 @songyiiii</footer>}
    </div>
  );
};

export default GlobalLayout;
