import Carousel from '../components/Carousel';
import Menu from '../components/Menu';
import ItemBody from '../components/ItemBody';

const Home = () => {
  return (
    <>
      <div className='bg-gray-200'>
        <Menu />
        <Carousel />
        <ItemBody />
      </div>
    </>
  );
}

export default Home
