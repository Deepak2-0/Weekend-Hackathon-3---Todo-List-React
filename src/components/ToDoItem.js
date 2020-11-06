import React from "react";

export default function ToDoItem(props) {
  const {
    onDelete,
    id,
    item,
    onEdit,
    onShow,
    onEditText,
    onEditSave,
    checkSaveButton
  } = props;
  return (
    <>
      <li className="list">{item}</li>
      <div>
        <button onClick={() => onEdit(id)} className="edit">
          {" "}
          edit
        </button>
        <button onClick={() => onDelete(id)} className="delete">
          delete
        </button>
      </div>
      {onShow && (
        <div>
          <input
            type="text"
            className="editTask"
            defaultValue={item}
            onChange={onEditText}
          />
          <button
            className="saveTask"
            onClick={() => onEditSave(id)}
            disabled={!checkSaveButton}
          >
            Save
          </button>
        </div>
      )}
    </>
  );
}
