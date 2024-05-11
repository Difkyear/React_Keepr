import React, { useState } from "react";

function CreateArea(props) {
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
      <form onSubmit={add}>
        <input
          onChange={updateInputContent}
          value={inputContent.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={updateInputContent}
          value={inputContent.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
