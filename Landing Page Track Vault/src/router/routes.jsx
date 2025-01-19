import { createBrowserRouter } from "react-router-dom"
import Pagina_inicial from "../pages/Pagina_inicial";

const router = createBrowserRouter([
    
    { path: "/", element: <Pagina_inicial /> },   
])

export default router;