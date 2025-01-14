import Portfolio from '../Portfolio';
import items from '../../mock/portfolio.json';
import style from './Main.module.css';

const Main = () => {
  console.log(items);
  return (
    <div className={style.main_wrap}>
      {items.map((item) => (
        <Portfolio key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Main;
