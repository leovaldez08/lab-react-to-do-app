import React from "react";
import "../App.css";

export default function Task(props) {
  const listOfItems = props.listOfItems;
  const newList = listOfItems.map((currItem) => {
    return (
      <div key={currItem.key}>
        <input
          type="text"
          id={currItem.key}
          value={currItem.itemDescription}
          onChange={(event) => {
            props.handleUpdate(event.target.value, currItem.key);
          }}
        />

        <button
          onClick={() => {
            props.handleDelete(currItem.key);
          }}
        >
          Delete Item
        </button>
      </div>
    );
  });
  return <div>{newList}</div>;
}
