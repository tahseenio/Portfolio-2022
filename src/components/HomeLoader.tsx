import { Loader } from '@mantine/core';
import { usePortfolioContext } from '../context/PortfolioContext';

const HomeLoader = () => {
  const { isDark } = usePortfolioContext();
  return (
    <div
      className='app--loader'
      style={{ backgroundColor: isDark ? '#1f1f1f' : 'white' }}
    >
      <Loader />
    </div>
  );
};

export default HomeLoader;
