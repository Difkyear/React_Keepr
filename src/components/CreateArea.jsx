import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  let [Clicked, setClicked] = useState(false);
  let [inputContent, setInputContent] = useState({
    title: "",
    content: "",
  });
  function updateInputContent(event) {
    let { name, value } = event.target;
    setInputContent((previous) => {
      return { ...previous, [name]: value };
    });
    console.log(inputContent);
  }

  function add(event) {
    props.addContent(inputContent);
    setInputContent({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={add} className="create-note">
        {Clicked ? (
          <input
            onChange={updateInputContent}
            value={inputContent.title}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          onChange={updateInputContent}
          value={inputContent.content}
          name="content"
          onClick={() => {
            setClicked(true);
          }}
          placeholder="Take a note..."
          rows={Clicked ? 3 : 1}
        />
        <Zoom in={Clicked}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
