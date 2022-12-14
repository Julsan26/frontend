import { useStateContext } from "../lib/context"
import { CartWrapper , CartStyle, Card, CardInfo , EmptyStyle , Checkout } from "../styles/CartStyles"

import{FaShoppingCart} from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { Quantity } from "../styles/ProductDetails"
import getStripe from "../lib/getStripe"




export default function Cart(){
    const {cartItems, setShowCart,onAdd , onRemove , totalPrice} = useStateContext()



//handle Payment

const handleCheckout= async()=>{
    const  stripe  = await getStripe()
    const response = await fetch("/api/stripe",{
        method: "POST",
        headers: {'Content-Type': 'applicaiton/json'},
        body: JSON.stringify(cartItems)

    })
    const data = await response.json()
    await stripe.redirectToCheckout({sessionId: data.id})
}
    return(
        <CartWrapper onClick={()=>setShowCart(false)}>
            <CartStyle onClick={(e)=>e.stopPropagation()}>
               {cartItems.length < 1 &&(
                 <EmptyStyle>
                    <h1>You  more shoppings to do </h1>
                    <FaShoppingCart/>
                </EmptyStyle>
               )}
          {cartItems.length >=1 && (
              cartItems.map((item)=>{
                  return(
                    <Card key={item.slug}>
                    <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                    />
                    <CardInfo>
                        <h3>{item.title}</h3>
                         <h3>${item.price}</h3>
                         <Quantity>
                             <span> Quantity </span>
                             <button >
                                 <AiFillMinusCircle onClick={()=>onRemove(item)}/>
                                 </button>
                             <p>{item.quantity}</p>
                             <button onClick={()=>onAdd(item,1)}>
                                 <AiFillPlusCircle/>
                             </button>
                         </Quantity>
                    </CardInfo>
                </Card>
                  )
              })

          )}

          {cartItems.length >=1&&(
              <Checkout>
                  <h3>SubTotal: ${totalPrice}</h3>
                  <button onClick={handleCheckout}>Purchase</button>
              </Checkout>
          )}
            </CartStyle>
        </CartWrapper>
    )

}