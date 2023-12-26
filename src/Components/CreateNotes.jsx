import React from 'react'
import "./notes.css"
const CreateNotes = ({inputText, setInputText, eventHandler}) => {
  
  const char = 100;
  const charLimit = char - inputText.length;
  
  return (
    <div className='Note'>
        <textarea 
        rows={5} 
        cols={10} 
        maxLength={100}
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Type here...'>


        </textarea>

        <div className="noteFooter">
            <span className="label">{charLimit} Left</span>
            <button className="noteSave" onClick={eventHandler}>Save</button>
        </div>
    </div>
  )
}


export default CreateNotes