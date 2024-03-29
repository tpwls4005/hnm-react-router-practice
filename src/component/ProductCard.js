import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';

const ProductCard =({item})=>{

    return(
    <div>
        <img src={item?.img} width={211} height={316}/>
        <div>{item?.new === true?"Conscious choice":" "}</div>
        <div>{item?.title}</div>
        <div>{item?.prize}</div>
        <div>{item?.new === true?"신제품":" "}</div>
    </div>
    );
};

export default ProductCard;