import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from "../../lib/query"
import { useRouter } from 'next/router'
import { DetailStyle } from '../../styles/ProductDetails'
import { ProductInfo } from '../../styles/ProductDetails'
import { Quantity } from '../../styles/ProductDetails'
import { Buy } from '../../styles/ProductDetails'
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import Link from 'next/link'
import { useStateContext } from '../../lib/context'

export default function ProductDetails() {


const{qty, increaseQty, decreaseQty,onAdd}= useStateContext()


//Fetch the slug




const {query}  = useRouter()
    const [results]=useQuery({query: GET_PRODUCT_QUERY,
    variables:{slug:query.slug}})
    console.log(results)
    const {data, fetching, error}= results
  if (fetching)return <p>Loading..</p>
  if (error)return <p>Oh No.....{error.data}</p>

console.log(results)


const {title, description, image }= data.products.data[0].attributes

    return (
      <DetailStyle>  <img src={image.data.attributes.formats.medium.url} alt={title}/>
  <ProductInfo>
      <h3>{title}</h3>
      <p>{description}</p>
  <Quantity>
      <span>Quantity</span>
      <button><AiFillMinusCircle onClick={decreaseQty}/></button>
      <p>{qty}</p>
      <button><AiFillPlusCircle onClick={increaseQty}/></button>
  </Quantity>
  <Buy onClick={()=>onAdd(data.products.data[0].attributes,qty)}>Add to Cart</Buy>

  </ProductInfo>
      </DetailStyle>
    )
  }