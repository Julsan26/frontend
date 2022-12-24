import { useRouter } from "next/router"

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)


export async function getServerSideProps(params){

    console.log(params.query)
const order = await stripe.checkout.sessions.retrive(
    params.query.session_id,
)
    {
        expand : ["line-items"]
    }
return {props:{order}}
}


export default function Success({order}){




    const route = useRouter()
    console.log(order)
    return(
        <div>
        <div>
            <h1>Thank You for your order!</h1>
            <h2>A confirmation email has been sent to you.</h2>
            <h2>{order.customer_details.email}</h2>
            <div>
                <h3>Address</h3>
                <h2>Address Info</h2>
            </div>
            <div>
                <h3>Product</h3>
                <h2>All the Products</h2>
            </div>
            <button onClick={()=> route.push('/')}>Continue Shopping</button>
        </div>
    </div>
    )
  
}