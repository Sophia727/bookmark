import React, { Component } from 'react';
import Bookmark_item from '../bookmark_item/bookmark_item';
import './bookmarkslist.css';

export default class BookmarksList extends Component {
  render() {
    let {bookmarks} = this.props; 
    // let elementName = window.location.hostname;
    // elementName = elementName.split('?').pop();
    // console.log(elementName);
    return (
      <div className='bookmark_list'>
        <ul>
        {bookmarks.map((element ,index)=> {
            return (
              <Bookmark_item key={index} id={index} className="bm_item">
              <i class="fa-solid fa-bookmark"></i>

              {element}
            </Bookmark_item>
            )
        })}
        </ul>
      </div>
    )
    
  }
}
