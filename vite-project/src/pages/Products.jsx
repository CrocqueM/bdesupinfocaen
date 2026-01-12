import data from '../data/data.json'
import Card from '../components/Card'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

function Products() {
  const handleDeleteProduct = (id, name) => {
    console.log('Delete product:', { id, name })
  }

  return (
    <Card title="Produits" subtitle="Catalogue des produits disponibles">
      <DataTable>
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
                <ActionButton onClick={() => handleDeleteProduct(product.id, product.nom)}>Delete</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </Card>
  )
}

export default Products