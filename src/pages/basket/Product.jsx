import React from 'react';
import { useCart } from './CartContext.jsx';

const Product = ({ product }) => {
    // Получаем функцию добавления в корзину из контекста
    const { addToCart } = useCart();

    return (
        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
            <div className='block' style={{ width: '300px', height: '550px', borderColor: '#fff', border: '1px solid red' }}>
                <h3 style={{fontSize:'37px'}}>{product.name}</h3>
                <img src="https://1.bp.blogspot.com/-vlEyF0T5VhQ/XEgvPXCFQcI/AAAAAAAAAJQ/tHVf87n6HCsBLlqDffziVuapswhppktBACLcBGAs/s1600/6.jpg" alt="" />
                <p style={{fontSize:'20px'}}>Цена: {product.price}сом</p>
                <button style={{border:'3px', width:'200px', height:'30px', fontSize:'20px', backgroundColor:'green'}} onClick={() => addToCart(product)}>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default Product;
