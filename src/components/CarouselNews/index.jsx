import { useState , useEffect } from 'react';
import { CartContextApp } from '../../CartContext';


export const CarouselNews = () => {
    const {allProducts} = CartContextApp();
    console.log(allProducts);

    // const [prodCarousel,setProdCarousel] = useState([]);

    const arrayId = [12,15,21, 24,45,25, 38,33,20];

    const arrayCarouselList = arrayId.map(index => allProducts[index]);
console.log(arrayCarouselList);



}