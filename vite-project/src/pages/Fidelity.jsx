import data from '../data/data.json'
import Card from '../components/Card'
import DataTable from '../components/DataTable'

function Fidelity() {
  return (
    <Card title="Programme de Fidélité" subtitle="Liste des adhérents et leurs points">
      <DataTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom complet</th>
            <th>Code</th>
            <th style={{ textAlign: 'right' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.utilisateurs.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nomComplet}</td>
              <td>{user.codeAdherent}</td>
              <td style={{ textAlign: 'right' }}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </Card>
  )
}

export default Fidelity
