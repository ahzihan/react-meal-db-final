import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const { orders } = props;
    let count = 0;
    for ( const meal of orders ) {
        count = count + meal.quantity;
    }
    
    return (
        <div className='order-list'>
            <h2>Order List</h2>
            <h4>Items Ordered: { count }</h4>
        </div>
    );
};

export default OrderList;