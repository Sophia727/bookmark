import React, { Component } from 'react';
import Bookmark from '../addBookmark/addBookmark';
import BookmarksList from '../bookmarks/bookmarkslist';
import ButtonAdd from '../button/buttonAdd';
import "./addBookmarkPage.css";

export default class AddBookmarkPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      ws_url : "",
      bookmarks: [],
    }
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    let {ws_url, bookmarks } = this.state;
    bookmarks.push(ws_url);
    this.setState({bookmarks:bookmarks, ws_url:""});
    sessionStorage.setItem('bookmarks list',JSON.stringify(bookmarks));
  }
  componentDidMount(prevState){
    let bms = sessionStorage.getItem("bookmarks list")
      ? sessionStorage.getItem("bookmarks list")
      : [];
    this.setState({ todos: JSON.parse(bms) });
  }
  componentDidUpdate(prevState){
    let bms = sessionStorage.getItem('bookmarks list') ? sessionStorage.getItem('bookmarks list') 
    : [];
    if(prevState.bookmarks !== JSON.parse(bms)){
    console.log(prevState);
    }
  }

  render() {
    let {bookmarks, ws_url} = this.state;
    return (
      <>
      <BookmarksList bookmarks={bookmarks}/>
      <div className='bm_container'>
        <ButtonAdd/>
        <div className='addBookmarkCard'>
            <h2>Add Bookmark</h2>
            <form onSubmit={this.handleSubmit}>
            <legend for="addBm">Enter Website URL</legend>
            <input type='text' className='input' name='addBm'
            onChange={(e)=>{
            // try {
              this.setState({ws_url: e.target.value});
              // console.log(e.target.value);
            // } catch (error) {
            //   console.log(error);
            // } 
            }}
            value={ws_url}
            />
            <button type='submit'>Add</button>
            </form>
        </div>
        {/* <Bookmark handleSubmit={handleSubmit} ws_url={ws_url}/> */}
      </div>
      </>
      
    )
  }
}
