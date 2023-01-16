import Link from "next/link";
import {FiShoppingBag} from "react-icons/fi"
import { NavStyle, NavItems } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client";
import { userAgent } from "next/server";
export default function Nav(){


    const{showCart, setShowCart, totalQuantities} = useStateContext()
    const {user, error, isLoading } = useUser()
    console.log(user)

    return(
    <NavStyle>
        <Link href={'/'}>Pashmina</Link>
    <NavItems>
        <User />
        <div onClick={()=>setShowCart(true)}>
            {totalQuantities>0 &&<span>{totalQuantities}</span>}
        <FiShoppingBag/>
        <h3>Cart</h3>
        </div>
    </NavItems>
    {showCart&& <Cart/>}
</NavStyle>
    )


}