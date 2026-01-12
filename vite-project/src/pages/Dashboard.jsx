import { useState } from 'react'
import database from '../data/data.json'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import Card from '../components/Card'
import DataTable from '../components/DataTable'
import StatCard from '../components/StatCard'
import Controls from '../components/Controls'

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
      <Card title="Statistiques clés" subtitle="Vue d'ensemble rapide des indicateurs">
        <div className="stats-grid">
          <StatCard value={`${database.statistiques.totalVentes}€`} label="Total des ventes" />
          <StatCard value={`${database.statistiques.totalDepense}€`} label="Total dépensé" />
          <StatCard value={`${database.statistiques.totalVentes - database.statistiques.totalDepense}€`} label="Bénéfice" />
          <StatCard value={database.statistiques.nombreClients} label="Nombre de clients" />
          <StatCard value={database.statistiques.nombreCommandes} label="Commandes" />
          <StatCard value={database.statistiques.nombreProduits} label="Produits" />
        </div>
      </Card>

      <Card>
        <Controls rowsToShow={rowsToShow} setRowsToShow={setRowsToShow} search={search} setSearch={setSearch} />

        <DataTable>
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
        </DataTable>
      </Card>

      <Card>
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
      </Card>
    </>
  )
}

export default Dashboard
