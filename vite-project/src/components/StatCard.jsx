import React from 'react'

export default function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <h3>{value}</h3>
      <div className="muted">{label}</div>
    </div>
  )
}
