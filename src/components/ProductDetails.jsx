import { useParams,Link } from "react-router-dom"


const products = [
    {
        id: 'product-1',
        name: 'Product 1'
    },
    {
        id: 'product-2',
        name: 'Product 2'
    },
    {
        id: 'product-3',
        name: 'Product 3'
    }
]


export const ProductDetails = () => {

    const {productId} = useParams()


  return (
    <>
    {
        // eslint-disable-next-line array-callback-return
        products.map((product) => {
            if(product.id === productId){
                return <h1 key={product.id}>{product.name}</h1>
            }
        }
        )
    }
    {/* path ramene à la route anterieure, route a la premiere  */}
    <Link to= '..' relative='path'>Back to home</Link>
    
    </>
  )
}