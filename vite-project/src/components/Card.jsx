import React from 'react'

export default function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      {title && <h2 className="title">{title}</h2>}
      {subtitle && <p className="muted">{subtitle}</p>}
      <div style={{ marginTop: 12 }}>{children}</div>
    </div>
  )
}
