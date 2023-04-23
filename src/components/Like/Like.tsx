import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

interface LikeProp{
    onClick: ()=>void
}

const Like = ({ onClick}:LikeProp) => {
    const [likeStatus, setLikeStatus] = useState(false)

    const toggle = ()=>{
        setLikeStatus(!likeStatus)
        onClick()
    }
   
    if (likeStatus) return <AiFillHeart onClick={toggle} color='red' size={25}/> 
    
    return<AiOutlineHeart onClick={toggle} size={25}/>;
     


}

export default Like