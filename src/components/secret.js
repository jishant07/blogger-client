import React, { Component } from 'react';
import BlogLists from './bloglist';

class secretPage extends Component {

    state = {
        username : "loading..."
    }
    async componentDidMount() {
        var response = await fetch('http://localhost:9000/getName',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({userId: localStorage.getItem('userID')})
        })
        var result = await response.json()
        if(result.msg)
        {
            this.setState({username : result.userId})
        }
        else{
            this.setState({username : "NA"});
        }
    }
    async componentDidUpdate() {
        var response = await fetch('http://localhost:9000/getName',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({userId: localStorage.getItem('userID')})
        })
        var result = await response.json()
        if(result.msg)
        {
            this.setState({username : result.userId})
        }
        else{
            this.setState({username : "NA"});
        }
    }
    render() { 
        return ( 
            <div>
                <BlogLists username={this.state.username}/>
            </div>
         );
    }
}
 
export default secretPage;