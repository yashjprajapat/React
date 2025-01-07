import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

constructor(props){
    super(props);
    
};
componentDidMount(){
 
}
 render(){
    
    return(
        <div className="about flex-col">
            <h1 className="font-bold">About us Page!</h1>
            <div>
                Logged-in User :
                <UserContext.Consumer>
                    {({currentUser}) => (
                        <h1 className="text-xl font-bold">{currentUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <UserClass name={"Yash Prajapat"} location={"Indore, M.P"}/>
        </div>
    )
}
};
export default About;