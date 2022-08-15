import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
  onUpdateFilter = (e) => {
    const filter = e.target.getAttribute("data-filter");
    this.props.onUpdateFilter(filter);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          onClick={this.onUpdateFilter}
          data-filter=""
        >
          Всі працівнки
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={this.onUpdateFilter}
          data-filter="rise"
        >
          На підвищення
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={this.onUpdateFilter}
          data-filter="1000"
        >
          З*п більше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
