import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {id, title, info} = props.question
  const [clicked,setClicked]= useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setClicked(!clicked)}>
          {clicked? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {clicked && <p>{info}</p>}
    </article>
      
    
  
    );
};

export default Question;
