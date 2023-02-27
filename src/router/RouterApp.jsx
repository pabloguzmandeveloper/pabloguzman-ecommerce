import { Routes , Route } from "react-router-dom";
import { AboutUs} from "../components/views/AboutUs";
import { ProductsList } from "../components/views/ProductList";
import { Stores } from "../components/views/Stores";
import { ToBuy } from "../components/views/ToBuy";
import { Error404 } from "../components/views/Error404";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { CartView } from "../components/Cart";

export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/aboutus"              element={<AboutUs />}/>
                <Route path="/"                     element={<ItemListContainer />}/>
                <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                <Route path="/item/:productId"      element={<ItemDetailContainer />}/>
                <Route path="/productslist"         element={<ProductsList/>}/>
                <Route path="/cartview"             element={<CartView />}/>
                <Route path="/stores"               element={<Stores />}/>
                <Route path="/tobuy"                element={<ToBuy />}/>
                <Route path="*"                     element={<Error404 />}/>
            </Routes>
        </>
    )
};