import React,{useState} from 'react'
import Words from '../utils/Paragraph'
import getText from '../utils/getText'


const initialState={
    Text:getText,
    Input :'',
}

function Playground() {
    const [userInput,setUserInput]=useState(initialState.Input)
    const [userText,setUserText]=useState(initialState.Text)
    const onRestart =()=>{
        setUserInput(initialState.Input)
        setUserText(initialState.Text)
       
    }
  return (
    <div className='container flex'>
        <Words Text={userText} Input={userInput}/>
        <textarea name="inputText"
                  id="textarea" 
                  cols="30" 
                  rows="10"
                  value={userInput}
                  onChange={(e)=>setUserInput(e.target.value)}
                  ></textarea>
        <div className='bw flex'>
        <button className='bt' onClick={onRestart}>Restart</button>
        </div>
        
    </div>
  )
}

export default Playground