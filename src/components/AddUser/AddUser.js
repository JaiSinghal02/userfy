import React from 'react'
import './AddUser.css'

function AddUser(props){
    return(
        <div className='adduser-div'>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>First name</p></div>
                    <div className='adduser-field-input'><input value={props.userData.firstname} onChange={(e)=>props.setUserData((prev)=>{return {...prev,firstname: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Last name</p></div>
                    <div className='adduser-field-input'><input value={props.userData.lastname} onChange={(e)=>props.setUserData((prev)=>{return {...prev,lastname: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Email</p></div>
                    <div className='adduser-field-input'><input value={props.userData.email} onChange={(e)=>props.setUserData((prev)=>{return {...prev,email: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Phone</p></div>
                    <div className='adduser-field-input'><input value={props.userData.phone} onChange={(e)=>props.setUserData((prev)=>{return {...prev,phone: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Address</p></div>
                    <div className='adduser-field-input'><input value={props.userData.address} onChange={(e)=>props.setUserData((prev)=>{return {...prev,address: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Password</p></div>
                    <div className='adduser-field-input'><input value={props.userData.password} onChange={(e)=>props.setUserData((prev)=>{return {...prev,password: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-button-div'>
                <div className='adduser-button-container'>
                    <div className='adduser-button' onClick={props.submitForm}>
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddUser