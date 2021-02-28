import { lazyImport } from '@alangiacomin/ui-components/utils';

const LoginPage = lazyImport(() => import('./LoginPage'));

export default LoginPage;
