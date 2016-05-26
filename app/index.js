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
    var commentsList = this.props.comments.map(function(comment, index) {
      return <Comment key={index} commentBody={comment} />
    });

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.author}</p>
        <p>{this.props.body}</p>

        <h2>Comments</h2>
        {commentsList}
      </div>
    )
  }
});

var Comment = React.createClass({
  render: function(){
    return (
      <p>{this.props.commentBody}</p>
    )
  }
})

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments}/>,
  document.getElementById("app")
);
