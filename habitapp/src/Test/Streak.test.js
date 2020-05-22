import React from 'react';
import Streak from '../Components/Streak';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Link, Switch } from 'react-router-dom';


describe('Streak', () => {
  
  
  const streakprops = {
        habit: 3,
        date:"19-05-2020",
        complete: ["13-04-2020", "06-05-2020", "07-05-2020"],
        current_streak: "3",
        highest_streak: "8",
        frequency:'daily'
  }

  const changeprops = {
    habit: 5,
    date:"20-05-2020",
    complete: ["13-04-2020", "06-05-2020", "19-05-2020"],
    current_streak: "1",
    highest_streak: "7",
    frequency:'daily'
}

const exerciseprops = {
  habit: 2,
  date:"20-05-2020",
  complete: ["13-04-2020", "06-05-2020", "19-05-2020"],
  current_streak: "7",
  highest_streak: "7",
  frequency:'daily'
}


const sunprops = {
  habit: 3,
  date:"20-06-2020",
  complete: ["13-04-2020", "06-05-2020", "05-05-2020"],
  current_streak: "3",
  highest_streak: "7",
  frequency:'monthly'
}


    it('renders main streak div', () => {
      let wrapper = mount(<Streak {...streakprops}/>);
      expect(wrapper.exists('.Streak')).toEqual(true)
  
    });

    it(' it should include two h3 tags', () => {  
     let  wrapper = mount(<Streak {...streakprops}/>);                                     
        expect(wrapper.exists('h3')).toEqual(true)
       });

    it(' should update streak state to 0 if days not consecutive and highest stays the same', () => { 
      let wrapper = mount(<Streak {...streakprops}/>); 
        expect(wrapper.state().currentStreak).toEqual(0);
        expect(wrapper.state().highestStreak).toEqual(8)
  
       });


    it(' should update current and highest streak ', () => {    
     let  wrap = mount(<Streak {...changeprops}/>);                                    
        expect(wrap.state().currentStreak).toEqual(2);
   
       });
       

    it(' should update current streak when highest streak higher ', () => {    
      let  wrap = mount(<Streak {...exerciseprops}/>);                                    
         expect(wrap.state().currentStreak).toEqual(8);
         expect(wrap.state().highestStreak).toEqual(8)
    
        });
 
        it(' should reset current streak after more than 30 days ', () => {    
          let  wrap = mount(<Streak {...sunprops}/>);                                    
             expect(wrap.state().currentStreak).toEqual(0);
             expect(wrap.state().highestStreak).toEqual(7)
        
            });

        




});