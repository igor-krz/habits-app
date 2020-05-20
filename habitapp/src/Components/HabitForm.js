class HabitForm extends Component {
    ​
        constructor(props) {
            super(props);
            this.state = {
            toComplete: [{habitID:2,name:'water', isChecked:false}, {habitId:3,name:'sleep', isChecked:false}],
            completed:[],
            newArray:[],
           checked:'false'
            };
          }
    ​
    ​
          handleChange = (i) => {
            this.setState((state, props) => {
                state.toComplete[i].isChecked = !state.toComplete[i].isChecked;
                return {
                  toComplete: state.toComplete
                }
              },()=>console.log(this.state.toComplete)
              )
    ​
          }
    ​
      
    ​
        render() {
           
            return (
                <div>
                    {this.state.toComplete.map((item,i) => 
                    <div>
                    <label for={item.name}>{item.name}</label><br></br>
                    <input type="checkbox" id={item.habitID}  name={item.name} value={item.name}  checked={item.isChecked} onChange={(e) => this.handleChange(i)}/>
                        </div>
                        )}
                    
                </div>
            )
        }
    }
    ​
    export default HabitForm