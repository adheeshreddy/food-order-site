import React from "react";
import User from "./User";
class UserClass extends React.Component{

    constructor(props){
        super(props);

    this.state = {
        count : 0,
        count2 : 1
    };

    }

    render(){
        const {name, location}=this.props;
        return(
            <div className="user-card">
                <h2>name : {name}</h2>
                <h2>location :{location}</h2>
                <h2>Count :{this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1 ,
                    })
                }} >increment class count</button>

            </div>
        )
    }
}
export default UserClass;