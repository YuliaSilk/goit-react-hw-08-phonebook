import { Suspense } from "react"
import { AppBar } from "./AppBar/AppBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

export const Layout = () => {
    return (
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
            <AppBar />
            <Suspense fallback={'Loading page...'}>
                <Outlet />
            </Suspense>
            <Toaster position="top-left" />
        </div>
    );
};

