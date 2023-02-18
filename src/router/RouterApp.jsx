import { Routes , Route } from "react-router-dom";
import { AboutUs} from "../components/views/AboutUs";
import { ProductsList } from "../components/views/ProductList";
import { Stores } from "../components/views/Stores";
import { ToBuy } from "../components/views/ToBuy";
import { Error404 } from "../components/views/Error404";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";

export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/aboutus"              element={<AboutUs />}></Route>
                <Route path="/"                     element={<ItemListContainer />}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/item/:productId"      element={<ItemDetailContainer />}></Route>
                <Route path="/productslist"         element={<ProductsList/>}></Route>
                <Route path="/stores"               element={<Stores />}></Route>
                <Route path="/tobuy"                element={<ToBuy />}></Route>
                <Route path="*"                     element={<Error404 />}></Route>
            </Routes>
        </>
    )
};