import ContentWrapper from 'Component/ContentWrapper'
import ProgressBar from 'ProgressBar'

import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

export class Checkout extends SourceCheckout {
    // TODO implement logic
    constructor(props) {
        super(props);
    }

    progressBar(){
        return(
            <ProgressBar
            step={ this.props.checkoutStep }
            />
        )
    }
    
    render() {
        return(
            <main block="Checkout">
                { this.progressBar() }                
                <ContentWrapper
                wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )
    }
};

export default Checkout;
