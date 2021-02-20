import { lazyImport } from '../../common/utils';

const MainHeader = lazyImport(() => import('./MainHeader'));

export default MainHeader;
