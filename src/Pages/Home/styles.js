import styled from "styled-components";



export const Box = styled.div`
background-color:#DAB51B;
height: 100vh;
width:100vw;

display: flex;
flex-direction: column;
align-items:center;
`
export const Image = styled.img`

height: 250px;
`

export const Box2 = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin-top: 1%;
gap:2px;



`
export const H1 = styled.h1`
 text-align: center;
 font-size:80px;
 font-family: 'Margarine', cursive;
 letter-spacing: 1px;
 font-weight:bold;
 text-shadow: 0.1em 0.1em #333;
`
export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius:14px;
font-size: 24px;
font-weight: 400;
line-height: 28px;

width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border:none;
outline:none;
margin-bottom:34px;

`;
export const H2 = styled.h2`
 text-align: center;
 font-family: 'Margarine', cursive;
 font-size: 40px;
`
export const Inputlabel = styled.label`
display: flex;
flex-direction: column;

`
export const Select = styled.select`
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius:14px;
font-size: 24px;
font-weight: 400;
line-height: 28px;

width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border:none;
outline:none;
margin-bottom:34px;

`
export const Option = styled.option`


`
export const B = styled.b`
margin-left:10px;


`
export const Button = styled.button`
font-size: 17px;
font-weight: 700;
line-height: 28px;
background: #FFFFFF40;
width: 342px;
height: 74px;
border-radius: 14px;
cursor: pointer;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
&:hover{
opacity: 80%;
}
&:active{
    color:#a607ff;

}

`