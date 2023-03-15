import { useState , useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import { CartContextApp } from '../../CartContext';
import { Item } from '../Item';

const ControlledCarousel = ({props}) => {
    {console.log("props carousel"+props)}
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <CardGroup className="d-block w-100" responsive="sm">
                
                    {console.log("props de carousel"+props)}
                    {props?props.slice(0, 3).map((prod)=>{
                        return (
                            <div key={prod.id}>
                                <Item product={prod} />
                            </div>
                        )
                    }):""}
                
            </CardGroup>
        
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup className="d-block w-100">
                
                    {console.log("props de carousel"+props)}
                    {props?props.slice(3, 6).map((prod)=>{
                        return (
                            <div key={prod.id}>
                                <Item product={prod} />
                            </div>
                        )
                    }):""}
                
            </CardGroup>

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup className="d-block w-100">
                
                    {console.log("props de carousel"+props)}
                    {props?props.slice(6, 9).map((prod)=>{
                        return (
                            <div key={prod.id}>
                                <Item product={prod} />
                            </div>
                        )
                    }):""}
                
            </CardGroup>

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export const CarouselNews = () => {
    const {allProducts} = CartContextApp();
    console.log(allProducts);

    // const [prodCarousel,setProdCarousel] = useState([]);

    const arrayId = [12,15,21, 24,45,25, 38,33,20];

    const arrayCarouselList = arrayId.map(index => allProducts[index]);
console.log(arrayCarouselList);
    return (
        <ControlledCarousel props={arrayCarouselList} />
    )
};