var React = require("react");
var ReactDOM = require("react-dom");

// console.log("Hello World")


var post = {
  title: "A blog post in React",
  author: "Matthew Vaden",
  body: "Welcome to my blog! This is a sample blog designed to show how make an app with ReactJS. I hope that you find it interesting!",
  comments: [
    "Gnarly!!!",
    "No, thanks.",
    "I appreciate your feedback.",
    "I'm just here to troll."
  ]
}

var Comment = [];
// attempting to create an empty array that will list comments
Comment = React.createClass({
  render: function(){
    return(
      <p>Comments: {this.props.body}</p>
    )
  }
})
// props = properties
var Post = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.author}</p>
        <p>{this.props.body}</p>
        <h3>Comments</h3>
        <Comment body={post.comments} />
      </div>
    )
  }
});

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comment={post.comments[0]} />,
  document.getElementById("app")
)
