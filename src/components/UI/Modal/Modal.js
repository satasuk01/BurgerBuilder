import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
        //ถ้า modal ไม่อัพ child ก็ไม่อัพ ไม่ต้องไล่ทำหมด(OrderSummary Included)
    }

    componentWillUpdate(){
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (<>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
            >
                {this.props.children}
            </div>
        </>);
    }
}

export default Modal;