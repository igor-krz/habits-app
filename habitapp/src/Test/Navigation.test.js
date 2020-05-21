import React from 'react';
import Navigation from '../components/Navigation';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe('Navigation', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Navigation />);
    });
  
    test('renders main Navigation div', () => {
      expect(wrapper.exists('.navigation')).toEqual(true);
    });

});