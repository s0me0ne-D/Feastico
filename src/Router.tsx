import { createHashRouter } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";

export const router = createHashRouter([{ path: "/", element: <Layout /> }]);
