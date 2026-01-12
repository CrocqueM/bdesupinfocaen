import data from '../data/data.json'

function Fidelity() {
  return (
    <div className="card">
      <h2 className="title">Programme de Fidélité</h2>
      <p className="muted">Liste des adhérents et leurs points</p>

      <div style={{ marginTop: 12 }}>
        <table className="data-table">
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
        </table>
      </div>
    </div>
  )
}

export default Fidelity
