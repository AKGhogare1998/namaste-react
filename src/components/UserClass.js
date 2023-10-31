import React from "react"

class UserClass extends React.Component {
constructor(props){
    super(props);
  this.state = {
    count: 0,
    userInfo: {
        name: "default name",
        location: "default location"
    }
  }
  console.log("child constructor")
}
async componentDidMount(){
    const data = await fetch("https://api.github.com/users/AKGhogare1998");
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo : json,
    })
    console.log("componentDiD Mount called")
}
componentDidUpdate(){
    console.log("componentDiD update called")
}
componentWillUnmount(){
    console.log("component will unmount called")
}
   //below render method return JSX which will be shown in UI
    render() {
        console.log("child render")
        return <div className="user-card">
            <h1>count : { this.state.count }</h1>
            <button onClick={ 
                () => { 
                    //never update state variable directly 
                    this.setState({count: this.state.count + 1})
                }}>inc count</button>
        <h1 className="user-name">Name : { this.state.userInfo?.login }</h1>
        <h1 className="user-location">location :{ this.state.userInfo?.url }</h1>
        <h1 className="user-email">Email : akshayghogare98@gmail.com</h1>
         </div>
    }
}

export default UserClass;