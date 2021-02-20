import { lazyImport } from '../../common/utils';

const Home = lazyImport(() => import('./Home'));

export default Home;
