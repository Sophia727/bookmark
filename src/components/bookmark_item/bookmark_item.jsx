import React, { Component } from "react";
import "./bookmark_item.css";

export default class Bookmark_item extends Component {
  render() {
    let { children } = this.props;

    return (
      <li className="bmItem_li">
        <i className="fa-solid fa-bookmark"></i>
        <br />
        <h2 className="page_name">
          <a className="bm_link" href={children.ws_url} target="_blank">
            {children.label}
          </a>
        </h2>
      </li>
    );
  }
}
