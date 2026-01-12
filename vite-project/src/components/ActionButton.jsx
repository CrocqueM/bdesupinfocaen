import React from 'react'

export default function ActionButton({ onClick, children, title }) {
  return (
    <button type="button" onClick={onClick} title={title}>
      {children}
    </button>
  )
}
