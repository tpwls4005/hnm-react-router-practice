import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        try {
            let searchQuery=query.get('q') || "";
            console.log("쿼리값은?", searchQuery);
            let url = `https://my-json-server.typicode.com/tpwls4005/hnm-react-router-practice/products?q=${searchQuery}`;
            let response = await fetch(url);
            let data = await response.json();
            setProductList(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map(menu =>
                        <Col key={menu.id} lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
