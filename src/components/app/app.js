import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Антоній Пілат",
          salary: 900,
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: "Руслан Чорноморець",
          salary: 1400,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Андрій Змійовик",
          salary: 1200,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    if (name.length > 3 && salary > 0) {
      const newItem = {
        name: name,
        salary: salary,
        increase: false,
        rise: false,
        id: this.maxId++,
      };
      this.setState(({ data }) => {
        return {
          data: [...data, newItem],
        };
      });
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    if (filter === "") {
      return items;
    }
    if (filter === "rise") {
      return items.filter((item) => item.rise);
    }
    if (filter === "1000") {
      return items.filter((item) => item.salary > filter);
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increase = data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increase={increase} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
