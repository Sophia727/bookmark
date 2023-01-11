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
    }
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    let {ws_url, bookmarks } = this.state;
    // let isUrl(ws_url) = true;
    isUrl(ws_url) ? bookmarks.push(ws_url) : console.log('enter a valid URL');;
    this.setState({bookmarks:bookmarks, ws_url:""});
    localStorage.setItem('bookmarks list', JSON.stringify(bookmarks));
}
  componentDidMount(){
    let bms = localStorage.getItem("bookmarks list")
      ? localStorage.getItem("bookmarks list")
      : [];
      this.setState({bookmarks: JSON.parse(bms) });
  }

  // 
  componentDidUpdate(prevState){
    let bms = localStorage.getItem('bookmarks list') ? localStorage.getItem('bookmarks list') 
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

              // if (e.target.value = URL()) {
                this.setState({ws_url: e.target.value});
              // } else{
              //   alert('please enter a valid link');
              // };
              
              // console.log(e.target.value);
            // } catch (error) {
            //   console.log(error);
            // } 
            }}
            value={ws_url}
            />
            <button className='submit_btn' type='submit'>Add</button>
            </form>
        </div>
        {/* <Bookmark handleSubmit={handleSubmit} ws_url={ws_url}/> */}
      </div>
      </>
      
    )
  }
}
