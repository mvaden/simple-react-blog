var React = require("react");
var ReactDOM = require("react-dom");

var post = {
  title: "Baby's First Post",
  author: "The Baby",
  body: "Look at me, I'm posting!",
  comments: [
    "First!",
    "Second!",
    "Wait, babies can't blog..."
  ]
}

var Post = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.author}</p>
        <p>{this.props.body}</p>

        <h2>Comments</h2>
        <p>{this.props.comment}</p>
      </div>
    )
  }
});

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comment={post.comments[0]}/>,
  document.getElementById("app")
);
