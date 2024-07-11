import React from 'react'

const Note = ({id, text, editHandler, deleteHandler}) => {
  return (
    <div className='note'>
        <div className='note-body'>{text}</div>
        <div className='note_footer' style={{justifyContent : "space-between"}}>
          {/* now lets create delete and edit button which will show after save note and for these, function are present in Notes.js  */}
        <button className='note_save'id='deletebutton' onClick={() => deleteHandler(id)}>Delete</button> &nbsp;
        <button className='note_save' id='editbutton' onClick={() => editHandler(id, text)}>Edit</button>
        </div>
    </div>
  )
}

export default Note