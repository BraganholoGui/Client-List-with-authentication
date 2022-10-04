import styled from 'styled-components';

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
color: #000;
font-weight: 700;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
`;
export const ContainerHome = styled.div`
background-image: radial-gradient(rgba(0, 150, 229, 0.5), rgb(25, 25, 105));
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
height:620px;
`;

export const ContainerTable = styled.div`
background-color:   rgb(255, 255, 255);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 60%;
height: 50%;
border-radius: 20px;
border: 1px solid #000;
box-shadow: 7px 10px 7px rgb(0 0 0 / 35%);
padding: 5%;
margin-top: 5%;
`;

export const ButtonEdit = styled.div`
cursor: pointer;
`;
