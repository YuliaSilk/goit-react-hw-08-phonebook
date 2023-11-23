import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { FormLabel, RegisterBtn, FormContainer, RegisterFormField, RegisterFormContainer } from "./RegisterForm.styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const { name, email, password } = e.currentTarget.elements;
        dispatch(register({
            name: name.value,
            email: email.value,
            password: password.value,
        }));
        // form.reset();
    };
    return (
        <RegisterFormContainer>
        <FormContainer onSubmit={handleSubmit}>
            <FormLabel>
                Username
                <RegisterFormField type="text" name="name" autoСomplete="given-name"/>
            </FormLabel>
            <FormLabel>
                Email
                <RegisterFormField type="email" name="email" autoСomplete="off" />
            </FormLabel>
            <FormLabel>
                Password
                <RegisterFormField type="password" name="password" autoСomplete="off" />
            </FormLabel>
            <RegisterBtn type="submit">
                Register
                </RegisterBtn>
        </FormContainer>
        </RegisterFormContainer>
     
    );
};
