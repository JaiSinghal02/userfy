import React,{useState,useEffect} from 'react'
import './UserCard.css'

function UserCard(props){
    return(
        <div className='usercard-div'>
            <div className='usercard-head-div'>User Info</div>
            <div className='usercard-container'>
                {Object.keys(props.userCardContent).map((keys,index)=>{
                    return(
                        <div key={index} className='usercard-field-container'>
                            <div className='usercard-field-div usercard-field-key'><div className='usercard-field-block'><p>{keys}</p></div></div>
                            <div className='usercard-field-div usercard-field-value'><p>{props.userCardContent[keys]}</p></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserCard;