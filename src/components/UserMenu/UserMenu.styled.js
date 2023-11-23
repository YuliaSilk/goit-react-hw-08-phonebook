import styled from "styled-components";

export const LogoutContainer = styled.div`
width: 500px;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.backgraund};
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`;

export const LogOutBtn = styled.button`
cursor: pointer;
background: transparent;
border-radius: 15px;
border: 1px solid ${({ theme }) => theme.colors.border};
color: ${({ theme }) => theme.colors.text};
display: flex;
align-items: center;
justify-content: center;
margin: 0.5rem 1rem;
padding: 0.5rem 0;
transition: all 200ms ease-in-out;
width: 100px;
height: 30px;

&:hover {
  color: #fff;
  background: ${({ theme }) => theme.colors.error};
}
`;

export const WelcomeText = styled.p`
 
  font-size: 36px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.header};

`;
