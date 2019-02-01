import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

    // componentWillMount() { //ถ้าใส่เป็น DidMount มันจะทำทีหลัง ทำให้มีบางส่วนเอา ingredients ที่เป็น null ไปใช้
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         // ['salad','1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1]; //add + to convert to number
    //         }

    //     }
    //     this.setState({ ingredients: ingredients, totalPrice: price });
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();//go back to last place
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to='/' /> //กรฯี ไม่มีของ ละก็กัน ingredient null

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'}
                        component={ContactData}
                    // render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props} />)} 
                    />
                    {/* props ที่ใส่ไปคือเพิ่อให้ ContactData ใช้พวก history ของ routerได้*/}
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};



export default connect(mapStateToProps)(Checkout);