import { shallow } from 'enzyme';
import React from 'react';
import PaginaPage from "./PaginaPage";

describe('<PaginaPage />', () => {
  it('definizione base', () => {
    const wrapper = shallow(<PaginaPage />);
    expect(wrapper).toBeDefined();
  });
  it('titolo pagina', () => {
    window.appname = "BLR";
    const wrapper = shallow(<PaginaPage />);
    expect(document.title).toEqual('BLR - Pagina');
  });
});
