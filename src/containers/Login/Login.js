import React,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import {withRouter,Redirect} from 'react-router-dom'
import Tab from '../../components/Tab/Tab'
import AddUser from '../../components/AddUser/AddUser'
import LoginForm from '../../components/LoginForm/LoginForm'
import Info from '../../components/UI/Modal/Info/Info'

function Login(props){
    const [tab,setTab] = useState(1)    
    const [userData,setUserData] = useState({firstname:"",lastname:"",phone:"",email:"",address:"",password:""})
    const [loginInfo,setLoginInfo] = useState({email:"",password:""})
    const [showInfo,setShowInfo] = useState(0)
    const [infoData,setInfoData] = useState({message:'',color:''})
    const tabClick = function (tabValue){
        setTab(tabValue)
    }
    const submitForm = function(){
        axios.post('/user/new',userData)
        .then((res)=>{
            setUserData({firstname:"",lastname:"",phone:"",email:"",address:"",password:""})
            setShowInfo(0)
            setShowInfo(1)
            setInfoData({message:'Sign up successful',color:'green'})
        })
        .catch((err)=>{
            setShowInfo(0)
            setShowInfo(1)
            setInfoData({message:`Please check your entry`,color:'brown'})
            console.log(err.response.data)
        })
    }
    const login = function(){
        axios.post('/login',{
            email:loginInfo.email,
            password: loginInfo.password
        })
        .then((res)=>{
            const token = res.data.token
            localStorage.setItem("token",token)
            setShowInfo(1)
            setInfoData({message:'Login Successfull',color:'green'})
            setTimeout(()=>{
                props.history.push('/dashboard')
            },2200)
            
        })
        .catch((err)=>{
            setShowInfo(0)
            setShowInfo(1)
            setInfoData({message:'Invalid Credentials',color:'brown'})
            console.log(err.response.data)
        })
    }
    return(
        <div className='login-div'>
            <div>
                <div className='login-tab-container'>
                    <div className="login-tab login-tab-1">
                        <Tab tabName="Signup" tabClick={()=>tabClick(1)}/>
                    </div>
                    <div className="login-tab login-tab-2">
                        <Tab tabName="Login" tabClick={()=>tabClick(2)}/>
                    </div>
                </div>
            </div>
            <div className={tab===2?'login-container':'signup-container'}>
            {tab===1?<AddUser setUserData={setUserData} submitForm={submitForm} userData={userData}></AddUser>:
                <LoginForm setLoginInfo={setLoginInfo} login={login} ></LoginForm>}
            </div>
            {showInfo!==0?<Info color={infoData.color} message={infoData.message} time={2000}/>:null}
        </div>
    )
}

export default withRouter(Login)