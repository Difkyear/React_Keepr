import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notesa from "../notes";
function App() {
  let [notes, setNotes] = useState(notesa);
  function addContent(valueObject) {
    setNotes((previous) => {
      return [...previous, valueObject];
      console.log(notes);
    });
  }

  function deleteNote(id) {
    setNotes((previous) => {
      return previous.filter((item, index) => {
        return index != id;
      });
    });
  }

  function flipIsClicked() {
    setClicked((previous) => !previous);
    console.log(Clicked);
  }
  return (
    <div>
      <Header />
      <CreateArea addContent={addContent} />
      {notes.map((item, index) => {
        console.log(item);
        return (
          <Note
            key={index}
            id={index}
            deleteNote={deleteNote}
            content={item.content}
            title={item.title}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
