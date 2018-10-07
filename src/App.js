import React, { Component } from 'react';
import axios from 'axios';
//import Post from './components/Post/Post';
import ToRead from './components/ToRead/ToRead';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    };

    // this.updatePost = this.updatePost.bind( this );
    // this.deletePost = this.deletePost.bind( this );
    // this.createPost = this.createPost.bind( this );
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=64531e01e997478aab9721db939f6574`).then( results => {
      console.log(results.data.articles)
      this.setState({ posts: results.data.articles });
      
    });
    
  }

  // updatePost(id, text) {
  //   axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`,{text}).then( results => {
  //     console.log(results.data)
  //     this.setState({ posts: results.data });
  //   });
  // }

  // deletePost(id) {
  //   axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then( results => {
  //     console.log(results)
  //     this.setState({ posts: results.data });
  //   });
  // }

  createPost(text) {
    axios.post(`https://newsapi.org/v2/top-headlines?country=us&apiKey=64531e01e997478aab9721db939f6574`,{ text }).then( results => {
      console.log(results)
      this.setState({ posts: results.data.articles.title });
    });
  }

  handleChange(val){
    axios.get(`https://newsapi.org/v2/top-headlines?country=${val}&apiKey=64531e01e997478aab9721db939f6574`).then(results => {
    this.setState({posts: results.data.articles})
    })
  }

  handleComment(val) {
    this.setState({comment: val})
  }


  render() {
    console.log('State Check', this.state.posts)
    let id = 0;
    const { posts } = this.state;
    return (
      <div className="App">
        <div className="left-col">
        <input type="text" onChange={e => this.handleChange(e.target.value)}/>
          {
            posts.map(post => (
              <div key={post.title}>
                    <h1>{post.title}</h1>
                    <img src={post.urlToImage} alt="photo"/>
                    {post.description}
                    {post.url}
                    
                </div>
               ))
          }
        
        </div>
        <div className="right-col">
          {/*<ToRead />*/}
        </div>
      </div>
    );
  }
}

export default App;

// <Post key={post.title} 
//                     title={post.title}
//                     pic={post.urlToImage} 
//                     des={post.description}
//                     url={post.url}
//               />