import React from "react";
import "./../styles/App.css";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [display, setDisplay] = React.useState([]);

  let keyCount = 1;

  function handleChange(event) {
    let text = event.target.value;
    setInputText(text);
  }

  function addItem() {
    if (inputText.length === 0) return;

    setItems((prevItems) => {
      return [...prevItems, inputText];
    });

    // setDisplay((prevDisplay) => {
    //   return [...prevDisplay, false];
    // });

    let arr = [...display];

    arr.push(false);
    setDisplay(arr);

    setInputText("");
    //console.log("check add");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((el, index) => {
        return index !== id;
      });
    });

    let arr = [...display];
    arr.splice(id, 1);
    setDisplay(arr);

    // setDisplay((prevDisplay) => {
    //   return prevDisplay.filter((el, index) => {
    //     return index !== id;
    //   });
    // });

    //console.log("check");
  }
  const [editableText, setEditableText] = React.useState("");

  function handleEdit(id) {
    //setDisplay((prevDisplay, index) => {
    //   return (prevDisplay = index === id);
    // });

    let arr = [...display];
    arr[id] = true;
    setDisplay(arr);
    //console.log(display);
    //setEditableText(items[id]);
  }

  function onEditText(event) {
    // editableText = event.target.value;
    setEditableText(event.target.value);
  }

  function onEditSave(id) {
    let arr = [...display];
    arr[id] = false;
    setDisplay(arr);

    let textArr = [...items];
    textArr[id] = editableText;

    setItems(textArr);
  }
  return (
    <div id="main">
      {/* <div id="task"> */}
      <input id="task" type="text" onChange={handleChange} value={inputText} />
      <button id="btn" onClick={addItem}>
        Add
      </button>
      {/* </div> */}

      <div>
        <ul>
          {items.map((el, index) => (
            <ToDoItem
              onDelete={deleteItem}
              key={keyCount++}
              id={index}
              item={el}
              onEdit={handleEdit}
              onShow={display[index]}
              onEditText={onEditText}
              onEditSave={onEditSave}
              checkSaveButton={editableText}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
