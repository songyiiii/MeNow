import Portfolio from '../Portfolio';
import items from '../../mock/portfolio.json';
import style from './Main.module.css';

const Main = () => {
  return (
    <div className={style.main_wrap}>
      {items.map((item) => (
        <Portfolio key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Main;
