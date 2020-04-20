import React from 'react'

export default ({ text, createAt }) => {
  return <div
    style={{
      border: '1px solid #ccc',
      margin: '1em 0',
      padding: '1em'
    }}
  >
    <div
      style={{ color: '#aaa', fontSize: '10px' }}
    >
      {createAt}
    </div>
    <div>
      {text}
    </div>
  </div>
}
