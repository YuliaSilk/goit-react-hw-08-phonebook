// import { NavLink } from 'react-router-dom';
import { HeaderAppStyle, MainLink } from './AuthNav.styled'

export const AuthNav = () => {
    return (
        <HeaderAppStyle>
            <MainLink to='/'>
                Home
            </MainLink>
            <MainLink to="/register">
                Register
            </MainLink>
            <MainLink to="/login">
                Log In
            </MainLink>
        </HeaderAppStyle>
    );
};
