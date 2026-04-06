import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "product/:productId", Component: Product },
            { path: "listed-books", Component: ListedBooks },
            { path: "pages-to-read", Component: PagesToRead },
            { path: "*", Component: NotFoundPage }
        ]
    }
])