import data from '../data/data.json'

function Users() {
  const handleDeleteUser = (id, name) => {
    console.log('Delete user:', { id, name })
  }

  return (
    <div className="card">
      <h2 className="title">Utilisateurs</h2>
      <p className="muted">Liste des utilisateurs inscrits</p>

      <div style={{ marginTop: 12 }}>
        <table className="data-table">
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
                  <button type="button" onClick={() => handleDeleteUser(user.id, user.nomComplet)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
