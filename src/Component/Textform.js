import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const convertUppercase = () => {
      if(text === "" || text== null){
        props.showAlert("Please enter some text", "danger")
      }
      else{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
      }
    
  };
  const convertLowercase = () => {
    if(text === "" || text== null){
        props.showAlert("Please enter some text", "danger")
      }
      else{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")

      }
   
  };
  const toCopy = () => {
      if(text === "" || text== null){
        props.showAlert("Please enter some text", "danger")
      }
      else{
    let copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied", "success")
      }
  };

  const toRepeat = () => {
    if(text === "" || text== null){
        props.showAlert("Please enter some text", "danger")
      } else {
      let rt = prompt("Enter how many times you want to repeat the word");
      console.log(rt);
      let rtx = text.repeat(rt);
      setText(rtx);
      props.showAlert("Text Repeated", "success")

    }
  };


  const removeExtraSpaces = () => {
    if(text === "" || text== null){
        props.showAlert("Please enter some text", "danger")
      }else{
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText)
        props.showAlert("Extra spaces removed", "success")

      }
  
  };

  const clearText = () => {
    setText("");
  };

  return (
    <>
     <div className="container my-2"> 
      <h2
        className={`text-${
          props.mode === "light" ||
          props.mode === "success" ||
          props.mode === "info" ||
          props.mode === "warning"
            ? "black"
            : "white"
        }`}
      >
        Enter your text here
      </h2>
      <div className="mb-3 my-3">
        <textarea
          className={`form-control mb-2 bg-${props.mode} text-${
            props.mode === "light" ? "black" : "white"
          }`}
          id="myInput"
          rows="7"
          value={text}
          onChange={handleChange}
        ></textarea>

        <button
          type="button"
          className={`btn btn-outline-${props.mode} m-1 text-${
            props.mode === "dark" ||
            props.mode === "secondary" ||
            props.mode === "danger"
              ? "white"
              : "black"
          }`}
          onClick={convertUppercase}
        >
          Uppercase
        </button>
        <button
          type="button"
          className={`btn btn-outline-${props.mode} m-1  text-${
            props.mode === "dark" ||
            props.mode === "secondary" ||
            props.mode === "danger"
              ? "white"
              : "black"
          }`}
          onClick={convertLowercase}
        >
          Lowercase
        </button>
        <button
          type="button"
          className={`btn btn-outline-${props.mode} m-1 text-${
            props.mode === "dark" ||
            props.mode === "secondary" ||
            props.mode === "danger"
              ? "white"
              : "black"
          }`}
          onClick={toCopy}
        >
          Copy to Clipboard
        </button>
        <button
          type="button"
          className={`btn btn-outline-${props.mode} mx-1 text-${
            props.mode === "dark" ||
            props.mode === "secondary" ||
            props.mode === "danger"
              ? "white"
              : "black"
          }`}
          onClick={toRepeat}
        >
          Repeat
        </button>
        <button
          type="button"
          className={`btn btn-outline-${props.mode} m-1 text-${
            props.mode === "dark" ||
            props.mode === "secondary" ||
            props.mode === "danger"
              ? "white"
              : "black"
          }`} onClick={removeExtraSpaces}
        >
       Remove Extra Spaces
        </button>
        <button
          type="button"
          className={`btn btn-outline-${props.mode} m-1 text-${
            props.mode === "dark" ||
            props.mode === "secondary" ||
            props.mode === "danger"
              ? "white"
              : "black"
          }`}
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>

      <p className={`text-${
          props.mode === "light" ||
          props.mode === "success" ||
          props.mode === "info" ||
          props.mode === "warning"
            ? "black"
            : "white"
        }`}>Words : <b>{text.split(" ").filter((element)=>{ return element.length!==0}).length}</b></p>
      <p className={`text-${
          props.mode === "light" ||
          props.mode === "success" ||
          props.mode === "info" ||
          props.mode === "warning"
            ? "black"
            : "white"
        }`}>number of letters : <b>{text.length}</b></p>
      <p className={`text-${
          props.mode === "light" ||
          props.mode === "success" ||
          props.mode === "info" ||
          props.mode === "warning"
            ? "black"
            : "white"
        }`}>
        Average Time Required to Read Above Text : <b>{0.00333333333 * text.split(" ").length}</b>
      </p>
      <p className={`text-${
          props.mode === "light" ||
          props.mode === "success" ||
          props.mode === "info" ||
          props.mode === "warning"
            ? "black"
            : "white"
        }`}>
            Preview
            </p>
      <div className={`container shadow-sm p-3 mb-5 bg-body rounded text-${
          props.mode
            ? "black"
            : "white"
        }`}>
        {text}
      </div>
    </div>
    </>

  );
}
