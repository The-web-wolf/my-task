import React, { Component } from 'react';
import "progressbar.css";

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress : []
        };
    }

    updateProgress(progress){
        // check if step is in progress
        if (!this.state.progress.includes(this.props.step)) {
            this.setState({
                progress: [...this.state.progress, this.props.step]
            });
        }
    }
    componentDidMount() {
        this.updateProgress(this.props.step);
    }

    componentDidUpdate(prevProps) {
        if (this.props.step !== prevProps.step) {
            this.updateProgress(this.props.step);
        }
        
    }

    render(){
        const isShipping = this.state.progress.includes("SHIPPING_STEP");
        const isBilling  = this.state.progress.includes("BILLING_STEP");
        const isDetails  = this.state.progress.includes("DETAILS_STEP");
        const shippingComplete = isShipping && this.state.progress.length > this.state.progress.indexOf("SHIPPING_STEP") + 1;
        const billingComplete = isBilling && this.state.progress.length > this.state.progress.indexOf("BILLING_STEP") + 1;
        const detailsComplete = isDetails && this.state.progress.length > this.state.progress.indexOf("DETAILS_STEP") + 1;


        return(
            <div className="progressbar-container">   
                <ul className="progressbar">
                    <li className={`progressbar-step ${ isShipping && "active" } ${ shippingComplete && "complete" } `} >
                        <span className="progressbar-step-tag">Shipping</span>
                    </li>
                    <li className={`progressbar-step ${ isBilling? "active" : "" } ${ billingComplete && "complete" } `} >
                        <span className="progressbar-step-tag">Review & Payments</span>
                    </li>
                    <li className={`progressbar-step ${ isDetails ? "active" : "" } ${ detailsComplete && "complete" } `} ></li>
                </ul>
            </div>
        )
    }
}

export default ProgressBar;