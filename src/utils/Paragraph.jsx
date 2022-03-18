import React from 'react'

function Words({Text,Input}) {
  const text = Text.split('')
  const userInput =Input
  return (
    <div className='word'>
        {
          text.map((s,i)=>{
            let color ;
            if(i<userInput.length){
              color= s===userInput[i]?"#06FF00":"red";
            }
            return <span key={i} style={{color:color}}>{s}</span>
          })
        }
    </div>
  )
}

export default Words