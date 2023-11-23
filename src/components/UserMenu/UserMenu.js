// import { MainLink } from "components/AuthNav/AuthNav.styled";
import { useAuth } from "components/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import { logOut } from "redux/auth/operations";
import { fetchContacts } from "redux/operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
        <NavLink to={"/contacts"}>
            Contacts
        </NavLink>
        </div>
    );
};


