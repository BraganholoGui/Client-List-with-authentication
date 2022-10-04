import styled from 'styled-components';

export const ContainerHome = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
color: #000;
`;
export const Header = styled.header`
background-color: #b3ccff;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height:50px;
border-bottom: 1px solid #000;
`;
export const HeaderTitle = styled.div`
width:100%;
color: #000;
font-weight: 700;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
.iconTitle{
  margin-right: 3%;
}
`;
export const ContainerContent = styled.div`
width: 100%;
margin-top: 5%;
margin-bottom: 5%;
display: flex;
align-items: center;
justify-content: center; 
`;
export const Form = styled.div`
width: 90%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
export const ContainerFull = styled.div`
margin-top: 5%;
width: 100%;
height: 70%;
display: flex;
align-items: start;
justify-content: center;
`;
export const ContainerHalf = styled.div`
width: 50%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Label = styled.label`
font-weight: 400;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;
color: #466486;

`;
export const InputForm = styled.input.attrs({ type: 'text' })`
 width:89%;
 padding: 0.375rem 0.75rem;
 font-size: 18px;
 line-height: 1.5;
 color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 5px;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const InputNumberForm = styled.input.attrs({ type: 'number' })`
 width:89%;
 padding: 0.375rem 0.75rem;
 font-size: 18px;
 line-height: 1.5;
 color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 5px;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const ButtonForm = styled.button`
width: 40%;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #fff;
background: #000;
border-radius: 5px;
font-size:16px;
font-weight: 600;
cursor: pointer;
&&:hover{
    font-style: italic;
}
`;
