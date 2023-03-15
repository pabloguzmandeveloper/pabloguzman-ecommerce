import './CarouselNews.css';
import { useState , useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Item } from '../Item';

export const CarouselNews = ({props}) => {
    {console.log("props carousel"+props)}
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <Carousel className="w-90" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <CardGroup className="w-90" responsive="sm">
                
                    {console.log("props de carousel"+props)}
                    {props.slice(0, 3).map((prod)=>{
                        return (
                            <Card key={prod.id}>
                                <Item product={prod} />
                            </Card>
                        )
                    })}
                
            </CardGroup>
        
        <Carousel.Caption>
            <h3>TU GUSTO PUEDE ESTAR AQUI</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup className="w-90">
                
                    {console.log("props de carousel"+props)}
                    {props.slice(23, 26).map((prod)=>{
                        return (
                            <Card key={prod.id}>
                                <Item product={prod} />
                            </Card>
                        )
                    })}
                
            </CardGroup>

        <Carousel.Caption>
            <h3>PASIÓN EN SABORES TROPICALES</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CardGroup className="w-90">
                
                    {console.log("props de carousel"+props)}
                    {props.slice(36, 39).map((prod)=>{
                        return (
                            <Card key={prod.id}>
                                <Item product={prod} />
                            </Card>
                        )
                    })}
                
            </CardGroup>

        <Carousel.Caption>
            <h3>LAS MEJORES OFERTAS</h3>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};