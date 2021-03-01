import { lazyImport } from '@alangiacomin/ui-components/utils';

const Home = lazyImport(() => import('./Home'));

export default Home;
