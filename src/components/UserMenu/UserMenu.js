import { useAuth } from "components/hooks";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import { LogOutBtn, LogoutContainer, WelcomeText } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
       
        <LogoutContainer>
            <WelcomeText>Welcome, {user.name}</WelcomeText>
            <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
                Logout
            </LogOutBtn>
        </LogoutContainer>
   
    );
};


