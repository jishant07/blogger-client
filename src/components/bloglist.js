import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogLists extends Component {
    state = { 
        textlist : []
    }

    async componentDidMount() {
        var response = await fetch('http://localhost:9000/getContent',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({userId : localStorage.getItem('userID')})
        })
        var result = await response.json();
        if(result.msg === undefined)
        {
            this.setState({
                textlist : result.textlist
            })
        }
        else{
            this.setState({
                textlist : ["No blogs found"]
            })
        }
    }
    render() { 
        var count = -1;
        var blogList = this.state.textlist.map(listItem =>{
            count++
            if(listItem === "No blogs found")
            {   
                return(
                    <h1 className="mx-auto">Nothing found</h1>
                )
            }
            else{
                return (   
                <div className="card w-100 mx-auto" style={{margin:'1em'}} id={count} key={count}>
                    <div className="card-body">
                        <h5 className="card-title">Written by : {this.props.username}</h5>
                        <p  className="class-text" style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap' }}>{listItem}</p>
                    </div>
                    <Link to={"/blog/"+(count)} style={{textAlign:'right',fontSize:'20px'}}>Read More.</Link>
                </div>
                )
            }
        })
        return ( 
            <h1>{blogList}</h1> 
        );
    }
}
 
export default BlogLists;