import Stripe from "stripe"

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)


export default async function handler(req,res){
    if(req.method=="POST"){
        console.log(req)
        try {
        


          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {allowed_countries: ['US', 'CA']},
        
            // line_items: req.body.map(item=>{
            //     return{

            //       price_data:{
            //           currency: 'usd',
            //           product_data:{
            //               name:item.title,
            //               images: [item.image.data.attributes.formats.thumbnail.url],
            //           },
            //           unit_amount:item.price * 100
            //       },
            //       quantity:item.quantity,
            //     }
            // }),
            mode: 'payment',
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
          });


            res.status(200).json(session)
        } catch (error) { 
            res.status(error.statusCode || 500).json(error.message) }
       
    }
}