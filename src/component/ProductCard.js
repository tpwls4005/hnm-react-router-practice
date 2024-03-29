import React from 'react';

const ProductCard =({item})=>{

    return(
    <div className="product-card">
        <img src={item?.img} width={211} height={316} className="product-image"/>
        <div>{item?.new === true?"Conscious choice":" "}</div>
        <div>{item?.title}</div>
        <div>{item?.prize}</div>
        <div>{item?.new === true?"신제품":" "}</div>
    </div>
    );
};

export default ProductCard;