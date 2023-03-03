import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../components/views/AboutUs";
import { ProductsList } from "../components/views/ProductList";
import { Stores } from "../components/views/Stores";
import { Error404 } from "../components/views/Error404";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { CartCheck } from "../components/CartCheck";
import { CartOrders } from "../components/CartOrders";
import CartWidget from "../components/CartWidget";

// Las rutas parametrizadas aqui llevan doble punto y nombre, y en los componentes requieren usar el mismo nombre cuando son llamadas con el hook useParams!
export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/aboutus"                element={<AboutUs />} />
                <Route path="/"                       element={<ItemListContainer />} />
                <Route path="/category/:categoryId"   element={<ItemListContainer />} />
                <Route path="/item/:productId"        element={<ItemDetailContainer />} />
                <Route path="/productslist"           element={<ProductsList />} />
                <Route path="/cartcheck/:check"       element={<CartCheck />} />
                <Route path="/stores"                 element={<Stores />} />
                <Route path="/cartorders/:order"      element={<CartOrders />} />
                <Route path="*"                       element={<Error404 />} />
            </Routes>
        </>
    )
};