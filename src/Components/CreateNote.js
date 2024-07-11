import React from 'react'

// value passes in CreateNote are for inputtext for set value of text area to inputText and onchange to setInputText and at last we will call
// savehandler to save textarea text
const CreateNote = ({inputText, setInputText, saveHandler}) => {
    
  return (
    <div className='note'>
      {/* putting the text area  */}
        <textarea
        cols={10}
        rows={5}
        placeholder='Start Note'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        >
        </textarea>
        <div className='note_footer'>
          {/* here we have made save button which calls savehandler by clicking save handler is in notes.js */}
            <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
    </div>
  )
}

export default CreateNote