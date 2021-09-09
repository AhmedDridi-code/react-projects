import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  return (
  <>
    <div className='container'>
      <h3>question and answers about login</h3>
      <section className='info'>
         {data.map((question)=>{
          return<SingleQuestion key={question.id} question={question}/>
        })}
      </section>
    </div>
  
  </>
  );
}

export default App;
