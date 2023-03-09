import React from "react";

export default function ItemList(props) {
  const listOfItems = props.listOfItems;
  const newList = listOfItems.map((currItem) => {
    return (
      <div key={currItem.key}>
        <p>{currItem.itemDescription}</p>
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
