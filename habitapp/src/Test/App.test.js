import React from 'react';
import App from '../App';
import Navigation from '../Components/Navigation';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('App', () => {
  let wrapper;
  let wrap;

  beforeEach(() => {
    wrapper = shallow(<App />);
     wrap = mount(<App />);    
  });

  test('renders main App div', () => {
    expect(wrapper.exists('.App')).toEqual(true);
  });

  test('renders main App div', () => {
    expect(wrapper.containsMatchingElement(<Navigation/>)).toEqual(true);
  });

  test('contains 3 Routes', () => {
    expect((wrapper.find(('Route')).length)).toEqual(3);
  });

  test('contains Routes', () => {
    expect(wrapper.containsMatchingElement(<Route />)).toEqual(true);
  });

  it('Route to LoginPage is exact', () => {                                  
    let route = wrap.find(<Route path='/' exact/>);
    expect(route).toBeTruthy();
   });

   it('Route to RegisterPage is exact', () => {                                  
    let route = wrap.find(<Route path='/register' exact/>);
    expect(route).toBeTruthy();
   });

   it('Route to Dashboard is exact', () => {                                  
    let route = wrap.find(<Route path='/dashboard' exact/>);
    expect(route).toBeTruthy();
   });
   
   


 

});