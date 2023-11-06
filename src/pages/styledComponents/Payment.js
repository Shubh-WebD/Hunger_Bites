import styled from "styled-components";

const PaymentWrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
`
const Wrapper = styled.div`
margin-top: 2vh;
width: 50%;
height: 50vh;
display: flex;
border-radius: 5px;
flex-direction:column;
align-items: center;
background-color: #e8e8e8;
justify-content: space-evenly;
`

const CardMethod = styled.div`
height: 55vh;
width: 30%;
border-radius: 8px;
display: ${props => props.closeCard === true ? "none" : "flex"};
position: absolute;
flex-direction:column;
justify-content: center;
align-items: center;
border: 2px solid #D3D3D3;
background-color: white;
`
const CashOnDelivery = styled.div`
display: ${props => props.close === true ? "none" : "flex"};
height:75vh;
padding: 4vh;
position: absolute;
flex-direction:column;
align-items: center;
background-color:white;
border-radius: 8px;
border: 2px solid #D3D3D3;
`
const Input = styled.input`
width:30vw;
height:5vh;
border:none;
padding: 10px;
border-radius: 5px;
border:1px solid #D3D3D3;
`

const InputRow = styled.input`
width:14vw;
height:5vh;
border:none;
padding: 10px;
border-radius: 5px;
border:1px solid #D3D3D3;
`

const RowInput = styled.div`
display: flex;
justify-content: space-between;
`

const CodHead = styled.h4`
text-align: left;
font-weight: 600;
font-size: 18px;
color: black;
`
const SubmitDetails = styled.button`
border:none;
border-radius: 5px;
height: 6vh;
width: 21vw;
background-color: ${props => props.theme.colors.accent};
font-weight: 500;
color: white;
`

const Button = styled.button`
cursor: pointer;
padding: 15px;
width: 90%;
border-radius: 8px;
border: none;
background-color:white;
height: 10vh;
color: white;
`

const ButtonClose = styled.button`
cursor: pointer;
border: none;
background-color:transparent;
font-size: 14px;
position: absolute;
right: 0px;
top: 0px;
`

const OrderDetails = styled.div`
width: 50%;
margin-top: 6vh;
display:flex;
flex-direction: column;
`

const PaymentOp = styled.h4`
font-size: 18px
`
const PaymentInfo = styled.p`
font-size: 14px;
`

export { PaymentWrapper, Wrapper, CashOnDelivery, SubmitDetails, CodHead, Input, RowInput, InputRow, CardMethod, Button, OrderDetails, ButtonClose, PaymentInfo, PaymentOp }