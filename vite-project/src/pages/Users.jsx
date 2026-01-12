import data from '../data/data.json'
import Card from '../components/Card'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

function Users() {
  const handleDeleteUser = (id, name) => {
    console.log('Delete user:', { id, name })
  }

  return (
    <Card title="Utilisateurs" subtitle="Liste des utilisateurs inscrits">
      <DataTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom complet</th>
            <th>Email</th>
            <th>Promo</th>
            <th>Code</th>
            <th style={{ textAlign: 'right' }}>Points</th>
            <th style={{ textAlign: 'center' }}>Admin</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.utilisateurs.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nomComplet}</td>
              <td>{user.email}</td>
              <td>{user.promo}</td>
              <td>{user.codeAdherent}</td>
              <td style={{ textAlign: 'right' }}>{user.points}</td>
              <td style={{ textAlign: 'center' }}>{user.estAdmin ? '✓' : '✗'}</td>
              <td style={{ textAlign: 'center' }}>
                <ActionButton onClick={() => handleDeleteUser(user.id, user.nomComplet)}>Delete</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </Card>
  )
}

export default Users
