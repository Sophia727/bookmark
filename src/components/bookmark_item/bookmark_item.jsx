import React, { Component } from 'react';
import './bookmark_item.css';

export default class Bookmark_item extends Component {
  render() {
    let {children} = this.props;
    return (     
        <li className='bmItem_li' >
        {/* onClick redirect?  is it needed? */}
        <h2><a href={children}>{children}</a></h2>
        </li>
    )
  }
}
