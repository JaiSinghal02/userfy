import React from 'react'
import './Dashboard.css'
import {withRouter,Redirect} from 'react-router-dom'
import DisplayUser from '../../components/DisplayUser/DisplayUser'

function Dashboard(props){
    if(!localStorage.getItem('token')){
        return <Redirect to="/"/>
    }
    const logout = function(){
        localStorage.removeItem('token')
        props.history.push('/')
    }
    return(
        <div className='dashboard-div'>
            <div className='dashboard-logout-div'>
                <div className='dashboard-logout-container'>
                    <div onClick={logout} className='dashboard-logout-button'>Logout</div>
                </div>
            </div>
            <div className='dashboard-content-div'>
                <DisplayUser></DisplayUser>
            </div>
        </div>
    )
}

export default withRouter(Dashboard)