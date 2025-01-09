import { PortfolioData } from '@/types';
import style from './Portfolio.module.css';
const Portfolio = ({ title, img }: PortfolioData) => {
  return (
    <div className={style.portfolio_wrap}>
      <img src={img}></img>
      <div className={style.portfolio_title}>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default Portfolio;
