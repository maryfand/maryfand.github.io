import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';


class Post extends Component {
  constructor(){
    super();
    this.state={
      rawContent: ''
    }
  }
  componentDidMount(){
   // use math random to avoid browser cache
   let address = `https://raw.githubusercontent.com/maryfand/tbig-demo/master/posts/${this.props.params.title}.md?v=${Math.random()}`
   axios.get(address).then((res) => {
     console.log(res);
     console.log(address);
     this.setState({
       rawContent: res.data
     });
   });
 }

  render(){
    marked.setOptions({
       highlight: function (code) {
         return hljs.highlightAuto(code).value;
       }
     });
   let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
    return(
      <div>

        <div className="post-content">
            <span div dangerouslySetInnerHTML={{__html: content }}></span>
        </div>
      </div>
    )
  }
}

export default Post;
