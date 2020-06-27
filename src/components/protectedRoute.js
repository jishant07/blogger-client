import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import Auth from '../services/auth'

export const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render = {props => {
                if(Auth.isauthenticated())
                {
                    return <Component {...props} />;
                }
                else{
                    localStorage.setItem('attempted','true');
                    return <Redirect to={{
                        pathname: "/login",
                        state:{
                            from: props.location
                        }
                    }} 
                    />
                }
            }}
        />
    )
}