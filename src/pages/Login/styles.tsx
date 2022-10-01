import styled from 'styled-components';

export const ContainerBody = styled.div`
background-image: linear-gradient(rgb(25, 25, 105), rgba(0, 150, 229, 0.5));
display: flex;
align-items: center;
justify-content: center;
height:620px;
`;

export const ContainerAll = styled.div`
background-color:   rgb(255, 255, 255);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 45%;
height: 50%;
border-radius: 20px;
border: 1px solid #000;
box-shadow: 7px 10px 7px rgb(0 0 0 / 35%);
padding: 5%;
`;
export const TitleLogin = styled.header`
font-size: 28px;
font-weight: 700;
`;
export const ContainerForm = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
`;
export const Form = styled.form`
width: 50%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
`;
export const Label = styled.label`
font-weight: 400;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;
/* color: #466486; */
text-transform:uppercase;

`;
export const InputForm = styled.input`
 display: block;
    width: 81%;
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



