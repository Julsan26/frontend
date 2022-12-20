import Styled from "styled-components"

export const DetailStyle = Styled.div`
display:flex;
justify-content: space-between;
margin-top: 5rem;
img{
    width: 40%%;
}
 `

export const ProductInfo = Styled.div`
width: 40%;
button{
    font-size:1rem;
    font-weight: medium;
    padding: ; 0.5rem 1rem;
    cursor: pointer;

}
 `

export const Quantity = Styled.div`
display: flex;
align: center;
margin:  1rem 0rem ;

button{
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
}
p{
    width: 1.5rem;
    text-align:center;

}
span{
    color: var(--secondary);
}
svg{
    color: #494949;
}
 `



export const Buy = Styled.button`
width: 100%;
background: var(--primary);
color: white;
font-weight:500;
 `