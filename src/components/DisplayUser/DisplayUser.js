import React,{useEffect,useState} from 'react'
import './DisplayUser.css'
import axios from 'axios'
import UserCard from './UserCard/UserCard'

function DisplayUser(){
    const [userCardContent,setUserCardContent] = useState([])
    const fetchData = function(){
        axios.get('/user/info',{
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            let data = res.data
            delete Object.assign(data,{["First Name"]: data["firstname"]})["firstname"]
            delete Object.assign(data,{["Last Name"]: data["lastname"]})["lastname"]
            delete Object.assign(data,{["Phone"]: data["phone"]})["phone"]
            delete Object.assign(data,{["Email"]: data["email"]})["email"]
            delete Object.assign(data,{["Address"]: data["address"]})["address"]
            setUserCardContent(data)
        })
        .catch((err)=>{
            if(err.response.status===401) {localStorage.removeItem('token')}
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <div className='displayuser-container'>
                {userCardContent.length!==0?<UserCard userCardContent={userCardContent}></UserCard>:
                <div className='displayuser-loader-container'>
                    <div className='displayuser-loader-div'>
                        <p>Fetching user data...</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}
export default DisplayUser