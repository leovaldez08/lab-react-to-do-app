import React, { Component } from "react";
import Task from "./components/Task";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfItems: [],
      item: {
        key: "",
        itemDescription: "",
      },
    };
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      item: {
        key: Date.now(),
        itemDescription: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.state.item;
    if (newItem.itemDescription.trim() !== "") {
      this.setState((prevState) => ({
        listOfItems: [...prevState.listOfItems, newItem],
        item: {
          key: "",
          itemDescription: "",
        },
      }));
    }
  };

  handleDelete = (key) => {
    const filteredItems = this.state.listOfItems.filter(
      (item) => item.key !== key
    );
    this.setState({
      listOfItems: filteredItems,
    });
  };

  handleUpdate = (newDescription, key) => {
    const updatedItems = this.state.listOfItems.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          itemDescription: newDescription,
        };
      }
      return item;
    });

    this.setState({
      listOfItems: updatedItems,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              value={this.state.item.itemDescription}
              onChange={this.handleInput}
            />
            <button type="submit">Add Item</button>
          </form>
          <Task
            listOfItems={this.state.listOfItems}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </header>
      </div>
    );
  }
}

export default App;
