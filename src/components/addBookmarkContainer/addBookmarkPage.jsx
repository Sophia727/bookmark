import React, { Component } from 'react';
import Bookmark from '../addBookmark/addBookmark';
import BookmarksList from '../bookmarks/bookmarkslist';
import ButtonAdd from '../button/buttonAdd';
import "./addBookmarkPage.css";
import isUrl from 'is-url';

export default class AddBookmarkPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      ws_url : "",
      bookmarks: [],
      label: "",
    }
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    let {ws_url, bookmarks, label } = this.state;
    // let isUrl(ws_url) = true;
    isUrl(ws_url) ? bookmarks.push({label, ws_url}) : alert('Please enter a valid URL');
    this.setState({bookmarks:bookmarks, ws_url:"", label:""});
    localStorage.setItem('bookmarks_list', JSON.stringify(bookmarks, label));
}
  componentDidMount(){
    let bms = localStorage.getItem("bookmarks_list")
      ? JSON.parse(localStorage.getItem("bookmarks_list"))
      : [];
      this.setState({bookmarks: bms });
  }

  // 
  componentDidUpdate(prevState){
    let bms = localStorage.getItem('bookmarks_list') 
    ? JSON.parse(localStorage.getItem("bookmarks_list"))
    : [];
    if(prevState.bookmarks !== bms){
    console.log(prevState);
    }
  }

  render() {
    let {bookmarks, ws_url, label} = this.state;
    return (
      <>
      <BookmarksList bookmarks={bookmarks} label={label}/>
      <div className='bm_container'>
        {/* <ButtonAdd/> */}
        <div className='addBookmarkCard'>
            <h2>Add Bookmark</h2>
            <form onSubmit={this.handleSubmit}>
            <div className='input_group'>
              <legend htmlFor="addBm">Enter Website URL</legend>
              <input type='text' className='input' name='addBm'
              onChange={(e)=>{
              this.setState({ws_url: e.target.value});
              }}
              value={ws_url}
              />
            </div>
            <div className='input_group'>
              <legend htmlFor="label">Add Label</legend>
              <input type='text' className='input' name='label'
              onChange={(e)=>{
              this.setState({label: e.target.value});
              }}
              value={label}
              />
            </div>
            
            <button className='submit_btn' type='submit'>Add</button>
            </form>
        </div>
      </div>
      </>
      
    )
  }
}
