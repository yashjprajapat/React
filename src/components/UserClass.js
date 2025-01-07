import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name: 'Name',
                location: 'Default',
                avatar_url: 'www.dummy-img.com'
            },
        }
        
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/yashjprajapat");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    };
    
    render(){
        const {name, location, avatar_url} = this.state.userInfo;        
        return(
            <div className="user-card">               
                <img src={avatar_url} alt="Dummy image"  />
                <h1 className="font-bold">Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: @yashjprajapat</h3>
            </div>
        )
    }
}

export default UserClass;