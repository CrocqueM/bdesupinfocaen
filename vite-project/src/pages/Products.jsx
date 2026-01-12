import data from '../data/data.json'

function Products() {
  const handleDeleteProduct = (id, name) => {
    console.log('Delete product:', { id, name })
  }

  return (
    <div className="card">
      <h2 className="title">Produits</h2>
      <p className="muted">Catalogue des produits disponibles</p>

      <div style={{ marginTop: 12 }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du produit</th>
              <th>Catégorie</th>
              <th style={{ textAlign: 'right' }}>Prix (€)</th>
              <th style={{ textAlign: 'right' }}>Stock</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.produits.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nom}</td>
                <td>{product.categorie}</td>
                <td style={{ textAlign: 'right' }}>{product.prix.toFixed(2)}</td>
                <td style={{ textAlign: 'right' }}>{product.stock}</td>
                <td style={{ textAlign: 'center' }}>
                  <button type="button" onClick={() => handleDeleteProduct(product.id, product.nom)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products