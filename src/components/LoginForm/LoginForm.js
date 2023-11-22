import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";
import { FormContainer, FormField, FormLabel, FormBtn } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    }
    return (
        <FormContainer onSubmit={handleSubmit} >
            <FormLabel>
                Email
                <FormField type="email" name="email" autocomplete="off"/>
            </FormLabel>
            <FormLabel>
                Password
                <FormField type="password" name="password" autocomplete="off" />
            </FormLabel>
            <FormBtn type="submit">Log In</FormBtn>
        </FormContainer>
    );
};

