import React from 'react'
import noteContext from './NoteContext'

const NoteState = (props) => {
    const detail={
        name:'sameer',
        title:props.title,
        age:20
    }
    
  return (
   <noteContext.Provider value={props.cartItem}>
    {props.children}
   </noteContext.Provider> 
  )
}

export default NoteState
