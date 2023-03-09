import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Type here"
        value={props.item.itemDescription}
        onChange={props.handleInput}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
