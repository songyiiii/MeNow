import { ReactNode, useEffect, useState } from 'react';
import style from './GlobalLayout.module.css';
import Header from '../Header';

const GlobalLayout = ({ children }: { children: ReactNode }) => {
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
    <div className={style.container}>
      <Header />
      <main className={`${style.main} ${isScroll ? style.scrolled : ''}`}>
        {children}
      </main>
      <footer className={style.footer}>제작 @songyiiii</footer>
    </div>
  );
};

export default GlobalLayout;
