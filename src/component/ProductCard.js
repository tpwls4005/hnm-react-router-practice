import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard =({item})=>{
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }

    return(
    <div className="product-card" onClick={showDetail}>
        <img src={item?.img} width={211} height={316} className="product-image" alt="" />
        <div>{item?.new === true?"Conscious choice":" "}</div>
        <div>{item?.title}</div>
        <div>{item?.prize}</div>
        <div>{item?.new === true?"신제품":" "}</div>
    </div>
    );
};

export default ProductCard;

//새로운 화면으로 넘어가고 싶을 때 navigate