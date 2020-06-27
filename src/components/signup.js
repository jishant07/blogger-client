import React,{Component} from 'react'
import md5 from 'md5'

class Home extends Component {
    
    state = {
        email: "",
        password: "",
        username: ""
    }
    componentDidMount() {
        this.baseState = this.state
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        if(this.state.password !== '' && this.state.email !== '' && this.state.username !== '')
        {
            var response = await fetch('http://localhost:9000/signup',{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({email:this.state.email,password:md5(this.state.password),username:this.state.username})
            })
            var result = await response.json()
            if(result.msg === "The user was added successfully")
            {
                this.props.history.push('/login')
            }
            else{
                alert(result.msg)
                this.setState(this.baseState)
            }
        }
        else{
            alert("Fill all the details first");
        }
    }
    render() { 
        return ( 
            <div style={{padding:'2em',width:'70%',backgroundColor:'lightblue',marginTop:'7em'}} className='mx-auto'>
                <h3 className="mx-auto" style={{textAlign:"center"}}>SignUp</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id='password' placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id='username' placeholder="UserName" 
                        value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Home;