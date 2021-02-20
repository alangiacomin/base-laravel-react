import { lazyImport } from '../../common/utils';

const HomePage = lazyImport(() => import('./HomePage'));

export default HomePage;
