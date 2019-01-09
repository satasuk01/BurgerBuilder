import React, { Component } from 'react';

import Button from './../../UI/Button/Button';

class OrderSummary extends Component {  
    //TODO This could be a functional component
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>: {this.props.ingredients[igKey]}
                </li>);
            });

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button> {/*Like clicking on the backdrop*/}
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        );
    }
}

export default OrderSummary;