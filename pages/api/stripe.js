import Stripe from "stripe"

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)


export default async function handler(req,res){
    if(req.method=="POST"){
        console.log(req.body)
        try {


          const body = JSON.parse(req.body)

    
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {allowed_countries: ['US', 'CA']},
        
            line_items: body.map(item=>{
                return{

                  price_data:{
                      currency: 'usd',
                      product_data:{
                          name:item.title,
                          images: [item.image.data.attributes.formats.thumbnail.url],
                      },
                      unit_amount:item.price * 100
                  },
                  quantity:item.quantity,
                }
            }),
            mode: 'payment',
            success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://example.com/cancel',
          });


            res.status(200).json(session)
        } catch (error) { 
            res.status(error.statusCode || 500).json(error.message) }
       
    }
}