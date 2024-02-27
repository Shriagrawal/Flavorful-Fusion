import React from "react"

class Userclass extends React.Component
{  
    constructor(props)
    {
        super(props);
        console.log(props);

        this.state = {
          count:0,
        };
    }

 render()
   {
    return (
        <div>
        <h1>HI I AM A USER</h1>
        <p>Name:{this.props.name}</p>
        <p>count:{this.state.count}</p>
        <button onClick={() => {
              this.setState({
                count : this.state.count + 1,
              })
          }
        }>+1</button>
        </div>
      )
   }
}

export default Userclass;