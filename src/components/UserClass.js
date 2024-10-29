import React from "react";
import User from "./User";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("child constructor");
    this.state = {
        userdata:{
            
        },
    };

    }
   async componentDidMount(){
        console.log("child componentDidMount");
        // making an api call
        const data=await fetch("https://api.github.com/users/adheeshreddy");
        const json=await data.json();

        // console.log(json);
        // debugger;
        this.setState({
            userdata:json,
        })

        
    }

//understanding the use of unmounting / cleanup / clearing 
// componentDidMount(){
//   this.timer=setInterval(()=>{console.log("namaste")},1000);
// }
    componentDidUpdate(){
        console.log("component got updated with the fetched data");
    }

    componentWillUnmount(){
        console.log("component unmounted / changed page /clean up is done");
        // clearInterval(this.timer);
    }

    render(){
        console.log("child render");
        // console.log(userdata);
        // const {name, location}=this.props;
        return(
            <div className="user-card">
                <h2>name : {this.state.userdata.name}</h2>
                <h2>location :{this.state.userdata.location}</h2>
                

            </div>
        )
    }
}
export default UserClass;