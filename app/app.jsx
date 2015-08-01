class Comment extends React.Component{
  render () {
    return (
      <div>
        <div classnName='comment-body'>
          {this.props.children}
        </div>
        <div className='comment-author'>
          {this.props.author}
        </div>
      </div>
    )
  }
}

class CommentList extends React.Component{
  render() {
    return (
      <div className='comment-list'>
       <Comment author='Phil'>
        This is the first comment.
       </Comment>
       <Comment author='Nicole'>
        Test
       </Comment>
      </div>
    );
  }
}

class CommentForm extends React.Component{
  render(){
    return (
      <div className='comment-form'>
        CommentForm
      </div>
    )
  }
}

class CommentBox extends React.Component{
  render() {
    return (
      <div className='comment-box'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
React.render(
  <CommentBox />,
  document.getElementById('content')
);
