import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import './notes.css'
import {v4 as uuid} from 'uuid'
import Note from './Note'

const Notes = () => {
    // using usestate snippet
    const [inputText, setInputText] = useState("")
    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null)
    // editHandler function called by clicking on edit and it will new setinputtext 
    const editHandler = (id,text) => {
        setEditToggle(id)
        setInputText(text)
    }
    // this is saveHandler function which called by save button from CreateNote.js
    const saveHandler = () => {
        if(editToggle) {
            setNotes(notes.map((note) => (
                note.id === editToggle ?
                {...note, text: inputText}
                : note
            )))
        } else {
            setNotes((prevNotes) => [
                ...prevNotes, {
                    // uuid id basically used for unique ids
                    id: uuid(),
                    text: inputText
                }
            ])
        }
        
        setInputText("")
        // again setEditToggle to back null
        setEditToggle(null)
    }
    // deletehandler call when delete button clicks and it will call setnote to new note
    const deleteHandler = (id) => {
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }
    // using useeffect snippet
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
          setNotes(data);
        }
      }, []);

  useEffect(() => {
    // save in local storage by Notes
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className='notes'>
        {
            notes.map((note) => (
                editToggle === note.id ?
                <CreateNote 
                        inputText={inputText}
                        setInputText = {setInputText} 
                        saveHandler = {saveHandler}
                        />
                :
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler = {editHandler}
                    deleteHandler= {deleteHandler}
                >
                </Note>
            ))
        }
        {
            editToggle === null ? 
            <CreateNote 
            inputText={inputText}
            setInputText = {setInputText} 
            saveHandler = {saveHandler}
        /> : <></>
        }
        
    </div>
  )
}

export default Notes