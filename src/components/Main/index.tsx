import Portfolio from '../Portfolio';
import items from '../../mock/portfolio.json';

const Main = () => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <Portfolio key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Main;
