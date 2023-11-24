import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";
import { FormContainer, FormField, FormLabel, FormBtn } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password} = e.currentTarget;
        dispatch(logIn({
            email: email.value,
            password: password.value,
        }));
        // form.reset();
    }
    return (
        <FormContainer onSubmit={handleSubmit} >
            <FormLabel>
                Email
                <FormField type="email" name="email" autoComplete="email"/>
            </FormLabel>
            <FormLabel>
                Password
                <FormField type="password" name="password" autoComplete="current-password" />
            </FormLabel>
            <FormBtn type="submit">Log In</FormBtn>
        </FormContainer>
    );
};

