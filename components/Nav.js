import Link from "next/link";
import {FiShoppingBag} from "react-icons/fi"
import { NavStyle, NavItems } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
export default function Nav(){


    const{showCart, setShowCart, totalQuantities} = useStateContext()

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