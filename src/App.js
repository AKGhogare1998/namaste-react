import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";
import MenuComponent from "./components/Menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import MenuComponent from "./components/Menu";
import GroceryComponent from "./components/Grocery";

const AppComponent = () =>{
    console.log("app component")
    return <div className="app">
        <HeaderComponent />
        <Outlet />
    </div>
}

//Lazy loading concept is implemented for grocery component
//It is also known as onDemand loading , code splitting, chucking

const Grocery = lazy(() =>{
  import("./components/Grocery")
});

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
            },
            {
                path: "/grocery",
                //element: (<Suspense fallback={<h1>Grocery component not loading , suspence work</h1>}><Grocery /></Suspense>)
                element: <GroceryComponent />
            },
            {
                path: "/menu/:resId",
                element: <MenuComponent />
            }
        ],
        errorElement: <ErrorComponent />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
