import React, { Component } from 'react';


class Habit extends Component {

    constructor(props) {
        super(props);
        this.state = {
          completed:['15-04-2020','17-05-2020','19-05-2020', '20-05-2020'],
          streak:3,
          consecutives: '',
          monthDays:[]
        };
      }
    componentDidMount () {
        const date = new Date()
        let newMonth;
        let newDate;

        let day = date.getDate()
        let month = date.getMonth()+1
        if(day.toString().length ===1) {
            newDate = "" + 0 + day
        }else {
            newDate = day
        }
        if(month.toString().length === 1 ){
            newMonth = "" + 0 + month
        } else {
            newMonth = month
        }
        
        const today = '21-05';
        let arraytoday = today.split('-');
        let lastdate =  this.state.completed[this.state.completed.length - 1].split('-')
        if(parseInt(arraytoday[0]) - parseInt(lastdate[0]) === 1  ){
            this.state.streak = this.state.streak + 1

        }else {
            this.state.streak = 0
        }
        this.state.completed.map(item => {
            if(item.split('-')[1] === '05'){
                this.state.monthDays.push({day:item.split('-')[0]})}
        })
        
        console.log(this.state.monthDays)
    }

    render() {
      
     const   { monthDays } = this.state;
     console.log(monthDays)
        return (
            <div>
                {/* {monthDays ? monthDays.map(item => <div>{item.day}</div>) : <h3>loading....</h3>} */}
                {}
                <h1>May</h1>
                <p>your month ticks:</p>
       
               <h1>hey</h1> 
            </div>
        )
    }
}

export default Habit
