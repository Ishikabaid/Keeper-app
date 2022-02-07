import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import InputArea from "./InputArea";


function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addNote(newNote){
    setAllNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function  deleteNote(id){
    setAllNotes((prevNotes) => {
      return prevNotes.filter((item,index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
        <InputArea onAdd={addNote} />
        {allNotes.map((item, index) => {
          return (<Note key={index} id={index} onDelete={deleteNote} title={item.title} content={item.content} />);
        })}
      <Footer />
    </div>
    
  );
}

export default App;
