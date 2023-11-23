import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "components/hooks"

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
