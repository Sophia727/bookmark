import React, { Component } from 'react';
import './bookmark_item.css';

export default class Bookmark_item extends Component {
  render() {
    let {children} = this.props;

    return (  

        <li className='bmItem_li' >
          <i class="fa-solid fa-bookmark"></i>
          <h2 className='page_name'>{children[1][0]}<br/></h2>
          <a className='bm_link' 
        href={children[1][1]}
        target="_blank">
          {children[1][1]}
          </a>
        </li>
    )
  }
}
