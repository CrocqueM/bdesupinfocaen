import { useState } from 'react'
import database from '../data/data.json'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

function Dashboard() {

  const [rowsToShow, setRowsToShow] = useState(10)
  const [search, setSearch] = useState("")

  const products = database.produits.map(p => ({ ...p, quantiteVendue: p.quantiteVendue || 0 }))

  const filtered = products
    .filter(p => p.nom.toLowerCase().includes(search.trim().toLowerCase()))
    .sort((a, b) => b.quantiteVendue - a.quantiteVendue)

  const displayed = rowsToShow > 0 ? filtered.slice(0, rowsToShow) : filtered

  const paymentLabels = (database.repartitionPaiements || []).map(p => p.type)
  const paymentValues = (database.repartitionPaiements || []).map(p => p.pourcentage)
  const paymentColors = ['#4caf50', '#2196f3', '#ff9800']
  const paymentChartData = {
    labels: paymentLabels,
    datasets: [
      {
        data: paymentValues,
        backgroundColor: paymentColors,
        hoverOffset: 6
      }
    ]
  }

  return (
    <>
      <div className="card">
        <h2 className="title">Statistiques clés</h2>
        <p className="muted">Vue d'ensemble rapide des indicateurs</p>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{database.statistiques.totalVentes}€</h3>
            <div className="muted">Total des ventes</div>
          </div>
          <div className="stat-card">
            <h3>{database.statistiques.totalDepense}€</h3>
            <div className="muted">Total dépensé</div>
          </div>
          <div className="stat-card">
            <h3>{database.statistiques.totalVentes - database.statistiques.totalDepense}€</h3>
            <div className="muted">Bénéfice</div>
          </div>
          <div className="stat-card">
            <h3>{database.statistiques.nombreClients}</h3>
            <div className="muted">Nombre de clients</div>
          </div>
          <div className="stat-card">
            <h3>{database.statistiques.nombreCommandes}</h3>
            <div className="muted">Commandes</div>
          </div>
          <div className="stat-card">
            <h3>{database.statistiques.nombreProduits}</h3>
            <div className="muted">Produits</div>
          </div>
        </div>
      </div>

      <div className="card">
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

        <table className="data-table">
          <thead>
            <tr>
              <th>Produit</th>
              <th style={{ textAlign: 'right' }}>Quantité vendue</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map(p => (
              <tr key={p.id}>
                <td>{p.nom}</td>
                <td style={{ textAlign: 'right' }}>{p.quantiteVendue}</td>
              </tr>
            ))}
            {displayed.length === 0 && (
              <tr>
                <td colSpan={2}>Aucun produit trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="chart-row">
          <div>
            <h3>Répartition des paiements</h3>
            <div style={{ maxWidth: 420 }}>
              <Doughnut data={paymentChartData} />
            </div>
          </div>
          <div>
            <h4>Détails</h4>
            <ul>
              {database.repartitionPaiements.map(p => (
                <li key={p.type}>{p.type}: {p.pourcentage}%</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
