import React,{Component} from 'react';

class FullBlog extends Component {
    state = { 
        content : ""
    }
    async componentDidMount() {
        var response = await fetch('http://localhost:9000/getContent',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({userId: localStorage.getItem('userID')})
        })
        var result = await response.json();
        this.setState({content : result.textlist[this.props.match.params.id]})
    }
    render() { 
        return ( 
            <p>{this.state.content}</p>
        );
    }
}
 
export default FullBlog;