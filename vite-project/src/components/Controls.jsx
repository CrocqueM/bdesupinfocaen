import React from 'react'

export default function Controls({ rowsToShow, setRowsToShow, search, setSearch }) {
  return (
    <div className="controls">
      <label>
        Afficher
        <input
          type="number"
          min={0}
          value={rowsToShow}
          onChange={e => setRowsToShow(Number(e.target.value) || 0)}
          style={{ width: 80, marginLeft: 8 }}
        />
        entrées
      </label>

      <div className="spacer" />

      <label>
        <input
          type="search"
          placeholder="Rechercher un produit"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.25rem 0.5rem' }}
        />
      </label>
    </div>
  )
}
