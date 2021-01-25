import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { setMockJsonSpecFileContent } from './apiTest';

// import '../../../../../../test/i18nextConf';
import './i18nextConf';

configure({ adapter: new Adapter() });

// Helper function returns a promise that resolves after all other promise mocks,
// even if they are chained like Promise.resolve().then(...)
// Technically: this is designed to resolve on the next macrotask
// eslint-disable-next-line import/prefer-default-export
export const tick = () => new Promise((resolve) => {
  setTimeout(resolve, 0);
});

// imposto il contenuto del file con le specifiche openApi
// const jsonSpecFile = require('../App/mock/spec.json');
// setMockJsonSpecFileContent(jsonSpecFile);
