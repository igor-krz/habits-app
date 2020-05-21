import React, { Component } from 'react'

class Streak extends Component {
    constructor(props) {
        super(props);
        this.state = {

      streak:'0'
        };
      }


componentDidMount () {
    // const latestDate = this.props.complete[this.props.complete.length - 1]
    // const lastDate = new Date(latestDate.split("-").reverse().join("/"));
    // const  now = new Date(this.props.split("-").reverse().join("/"));
    //  const one_day = 1000*60*60*24;
    //  const  diff = Math.ceil((lastDate.getTime() - now.getTime() ) / one_day); 
    //  if (diff === 1 || diff === this.props.frequency){
    //     this.setState({
    //         streak: this.props.current_streak =+1 
    //     },() => {if(this.state.streak > this.props.highest_streak){
    //                 this.props.highest_streak = this.state.streak
    //     }else{
    //         console.log('not highest')
    //     }}
    //     ) 
        
    //  } else {
    //      this.setState({
    //          streak:0
    //      })
    //  }
}



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Streak
