import { useRouteError } from "react-router-dom";

const ErrorComponent = () =>{
const err = useRouteError();
console.log("error",err)

return <div>
    <h1>Oops !!!... Something went wrong ,{err.data}</h1>
</div>
}

export default ErrorComponent;