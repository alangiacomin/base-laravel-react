import { lazyImport } from '../../../publishable/resources/js/apis/node_modules/@alangiacomin/ui-components/utils';

const DummyPage = lazyImport(() => import('./DummyPage'));

export default DummyPage;
