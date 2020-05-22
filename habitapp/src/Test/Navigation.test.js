import React from 'react';
import Navigation from '../Components/Navigation';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe('Navigation', () => {
    let wrapper;
    let wrap;
  
    beforeEach(() => {
      wrapper = shallow(<Navigation />);
       wrap  = mount(<BrowserRouter><Navigation /></BrowserRouter>);
    });
  
    test('renders main Navigation div', () => {
      expect(wrapper.exists('.navigation')).toEqual(true)
  
    });

    test('includes button', () => {                                       
        expect(wrapper.exists('button')).toEqual(true)
       });

    test('includes link to LoginPage', () => {                                       
        expect(wrap.find(Link).props().to).toBe('/');
    });



});