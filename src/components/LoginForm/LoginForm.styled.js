import styled from "styled-components";

export const RegisterFormContainer = styled.div`
/* width: 400px; */
display: flex;
position: relative;
/* background-image: url('https://static.displate.com/1200x857/displate/2023-04-08/904827c689f4a12ebcee81867868f6c8_08a1aa477355156f0f6b2b37affa6aa0.jpg'); */

`
export const FormContainer = styled.form`
position: absolute;
top: 110px;
left: 63%;
z-index: 1000;
width: 400px;
display: flex;
flex-direction: column;
padding: 12px;
margin-bottom: 12px;
gap: 10px;
/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;; */
`

export const FormLabel = styled.label`
max-width: 360px;
display: flex;
padding: 20px;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-weight: 600;
gap: 8px;
color: ${({ theme }) => theme.colors.acent};
`;

export const FormField = styled.input`
margin-top: 4px;
width: 280px;
padding: 5px;
font-size: 16px;
color:${({ theme }) => theme.colors.inputColor};
outline: none;
border-radius: 15px;
border-color: ${({ theme }) => theme.colors.border};

&:hover{
    border-color: #25aae1;
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

}

`

export const FormBtn = styled.button`
    margin: 0 auto;
    width: 150px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.acent};
    cursor: pointer;
   
    height: 40px;
    text-align:center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-size: 300% 100%;
    background: transparent;
    border-radius: 50px;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

&:hover{
    border: none;
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out; 
    box-shadow: inset 0 -3.25em 0 0 ${({ theme }) => theme.colors.border};
}
&:focus {
    outline: none;
}
`;




// export const ErrMsg = styled(ErrorMessage)`
// color: ${({ theme }) => theme.colors.error};
// font-size: 16px;
// margin-top: 4px;
// width: auto;
// `;




