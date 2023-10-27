import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";

const AppComponent = () =>{
    console.log("app component")
    return <div className="app">
        <HeaderComponent />
        <Outlet />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactComponent />
            }
        ],
        errorElement: <ErrorComponent />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
