class Auth
{
    constructor(){
        localStorage.setItem('authenticated',localStorage.getItem('authenticated'))
        localStorage.setItem('userID',localStorage.getItem('userID'))
    }

    async login(data)
    {
        var response = await fetch('http://localhost:9000/login',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        var result = await response.json()
        if(result.msg)
        {
            localStorage.setItem('authenticated','true');
            localStorage.setItem('userID', result.id)
        }
        return result.msg
    }
    logout()
    {
        localStorage.setItem('authenticated','false');
        localStorage.setItem('userID', "")
    }
    isauthenticated()
    {
        if(localStorage.getItem('authenticated') === 'true')
        {
            return true;
        }
        return false;
    }
}

export default new Auth();