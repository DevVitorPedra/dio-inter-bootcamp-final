import styled from 'styled-components'
import logoBG from './dio-logo.jpg'

export const NewHeader = styled.header`
    width:100vw;
    height:150px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:baseline;
    padding:15px;
    
`
export const NewLogo = styled.div`
    width:140px;
    height:130px;
    background-position:center;
    background-size:cover;
    background-image:url(${logoBG});
`
export const NewStoreName = styled.h1`
    font-size:26;
    font-size: 72px;
  background: -webkit-linear-gradient(red, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const NewMenuButton = styled.div`
width:70px;
height:30px;
display:flex;
justify-content:center;
align-items:center;
background-color:transparent;
color:black;
font-size:18px;
transition:all .3s ease-in;
&:hover{
    font-weight:bold;
    transform:scale(1.1);
    border-bottom:1px solid black;
    }
`

export const NewMainArea = styled.main`
    width:100%;     
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    gap:10px;

`
export const NewCard = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:5px;
width:200px;
padding:10px;
border-radius:12px;
border:1px solid gray;
&:hover{
    box-shadow:0px 0px 10px 2px;
}
    
`