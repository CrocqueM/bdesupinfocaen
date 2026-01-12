import React from 'react'

export default function DataTable({ children }) {
  return (
    <div style={{ marginTop: 12 }}>
      <table className="data-table">{children}</table>
    </div>
  )
}
