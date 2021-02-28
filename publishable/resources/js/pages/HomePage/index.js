import { lazyImport } from '@alangiacomin/ui-components/utils';

const HomePage = lazyImport(() => import('./HomePage'));

export default HomePage;
