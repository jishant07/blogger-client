import React,{Component} from 'react'
import md5 from 'md5'
import Auth from '../services/auth'

class Home extends Component {
    state = {
        email : "",
        password : ""
    }
    componentDidMount() {
        if(localStorage.getItem('attempted') === 'true')
        {
            alert("Login to continue")
            localStorage.setItem('attempted','false')
        }
        this.baseState = this.state
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        if(this.state.email !== "" && this.state.password !== "")
        {
            var data = {email : this.state.email, password: md5(this.state.password)};
            var status = await Auth.login(data)
            if(status)
            {
                this.props.history.push('/secret')
            }
            else{
                this.props.history.push('/login')
                this.setState(this.baseState);
                document.getElementById('email').focus()
                alert("Wrong Pair")
            }
        }
        else{
            alert("Fill in all the details first")
        }
    }
    render() { 
        return ( 
            <div style={{padding:'3em',width:'70%',backgroundColor:'lightblue',marginTop:'7em'}} className='mx-auto'>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Home;