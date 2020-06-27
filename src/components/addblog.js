import React, { Component } from 'react';

class addBlog extends Component {
    state = { 
        textData : ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        var response = await fetch('http://localhost:9000/setContent',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({textData : this.state.textData, userId : localStorage.getItem('userID')})
        })
        var result = await response.json()
        if(result.msg === "Submission added successfully")
        {
            this.props.history.push('/secret')
        }
        else{
            alert("Some error occured")
            this.props.history.push('/secret')
        }
    }
    render() { 
        return ( 
            <div className="form-div" style={{margin:'auto',textAlign:"center"}}>
            <h1>Add blog here</h1>
            <br />
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    cols="50" 
                    rows="15" 
                    className="form-group"
                    placeholder="Start content here..."
                    id="textData"
                    style={{width:'100%'}}
                    onChange={this.handleChange} required>
                </textarea>
                <br />
                <button className='btn btn-success'>Submit</button>
            </form>
            </div>
        );
    }
}
 
export default addBlog;