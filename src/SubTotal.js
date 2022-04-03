import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import "./subtotal.css";

function SubTotal() {
    const [{basket}] = useStateValue();

  return (
    <div className="subtotal">
        {/* Price */}

        <CurrencyFormat 
        renderText={(value) => (
            <>
            <p>
                SubTotal ({basket.length} items): <strong>({value})</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>Proceed To Checkout</button>
    </div>
  );
}

export default SubTotal;