import UserComponenet from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return <div>
        <h1>About US</h1>
        <h1>Namaste react web series</h1>
        <UserComponenet name={"akshay ghogare function()"}/>
        <div>Below is Class based component</div>
        <UserClass name={"akshay ghogare class()"}/>
        </div>
}

export default About;