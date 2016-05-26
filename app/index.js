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

var Comment = React.createClass({
  render: function(){
    return(
      <p>Comments: {this.props.commentBody}</p>
    )
  }
});

// props = properties
var Post = React.createClass({
  render: function(){
    var commentsList = this.props.comments.map(function(comment, index){ // Gets properties from comments and maps them. Passes each comment, and
      return < Comment key = {index} commentBody = {comment} />
  });

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.author}</p>
        <h3>Comments</h3>
        {commentList}
      </div>
    )
  }
});

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments} />,
  document.getElementById("app")
)
