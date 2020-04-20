import React from 'react'
import Comment from './comment'

export default ({ blogId }) => {
  const [comments, setComments] = React.useState([])
  const [comment, setComment] = React.useState('')
  const url = `http://localhost:8080/blogs/${blogId}/comments`

  React.useEffect(() => {
    fetch(url).then(resp => {
      return resp.json()
    }).then(comments => {
      setComments(comments)
    })
  }, [url])

  const handleComment = () => {
    if (comment === '') {
      alert('请输入评论内容')
      return
    }
    setComment('')
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: comment
      })
    }).then(resp => {
      return resp.json()
    }).then(comments => {
      setComments(comments)
    })
  }

  return (
    <div>
      <h2>评论专区</h2>
      <textarea
        style={{
          display: 'inline-block',
          width: '100%'
        }}
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button style={{marginTop: '1em'}} onClick={handleComment}>提交评论</button>
      {
        comments.map(({ text, id, create_at }) => {
          return <Comment text={text} key={id} createAt={create_at}/>
        })
      }
    </div>
  )
}
