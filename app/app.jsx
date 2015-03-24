class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-body">
          {this.props.children}
        </div>
        <div className="comment-author">
          {this.props.author}
        </div>
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
}

class CommentForm extends React.Component {
  render() {
    return (
      <div className="comment-form">
        CommentForm
      </div>
    );
  }
}

comments = [
  {
    author: 'Chris Mather',
    text: 'My very first comment!'
  }
];

other = [
  {
    author: 'Chris Mather',
    text: 'My very first comment!'
  },
  {
    author: 'Another Person',
    text: 'Another row!'
  }
];

class CommentBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div className="comment-box">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm />
      </div>
    );
  }
}

myComponent = React.render(
  <CommentBox comments={comments}/>,
  document.getElementById('content')
);
