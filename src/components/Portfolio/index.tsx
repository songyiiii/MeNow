import { PortfolioData } from '@/types';
import { IoMdHeart } from 'react-icons/io';
import { MdRemoveRedEye } from 'react-icons/md';

import style from './Portfolio.module.css';
const Portfolio = ({ title, img }: PortfolioData) => {
  return (
    <div className={style.portfolio_wrap}>
      <img src={img}></img>
      <div className={style.portfolio_title}>
        <p>{title}</p>
        <div className={style.icon}>
          <IoMdHeart style={{ marginRight: '10px' }} />
          <MdRemoveRedEye />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
