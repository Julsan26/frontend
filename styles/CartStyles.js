import styled from "styled-components";


export const CartWrapper = styled.div`
position: fixed;
top: 0;
left:0;
height: 100vh;
width: 100%;
background: rgba(0,0,0,0.4);
z-index: 100;
display: flex;
justify-content:flex-end ;
`;
export const CartStyle= styled.div`
width: 40%;
background: #f1f1f1;
padding: 2rem 5rem;
overflow-y: scroll;
position: relative;
`;

export const Card = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 1rem;
overflow: hidden;
background:white;
padding: 2rem;
margin: 2rem 0rem;
img{
width: 4rem;
}`


export const CardInfo = styled.div`
width:50%;
div{
    display: flex;
    flex-direction: space-between;
}
`

export const EmptyStyle = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, 0%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
h1{
    font-size: 2rem;
    padding: 2rem;
}
svg{
    font-size: 10rem;
    color: var(--secondary);
}

`



export const Checkout = styled.div`
button{
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;

}

`