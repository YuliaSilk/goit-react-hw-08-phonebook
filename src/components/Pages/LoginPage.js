import { LoginForm } from "components/LoginForm/LoginForm";
import { Helmet } from "react-helmet";

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
      backgroundImage:`url('https://static.displate.com/1200x857/displate/2023-04-08/904827c689f4a12ebcee81867868f6c8_08a1aa477355156f0f6b2b37affa6aa0.jpg')`,
    }}

export default function Login() {
    return (
        <div style={styles.container}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm position='top-right'/>
        </div>
    );
}
