import React,{useState} from 'react'
import './Info.css'

function Info(props){
    const [style,setStyle] = useState('translateY(-60px)')
    setTimeout(()=>{
        setStyle('translateY(60px)')
    },props.time)
    return(
        <div className='info-div' style={{transform:style,background: props.color}}>
            <div  className='info-container'>
                <p className='info-msg'>{props.message}</p>
            </div>
        </div>
    )
}

export default Info