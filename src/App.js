import React, { Component } from "react";
import "../src/App.css";

//Components
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLocaleLowerCase()),
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Users"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
