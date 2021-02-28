import { lazyImport } from '@alangiacomin/ui-components/utils';

const DummyPage = lazyImport(() => import('./DummyPage'));

export default DummyPage;
