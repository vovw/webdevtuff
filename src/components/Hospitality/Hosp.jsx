import React from 'react';
import './Hosp.css';
import Fotter from '../fotter/fotter';

class Hosp extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
  isOpen: Array(6).fill(false),
 };
 this.toggleAccordion = this.toggleAccordion.bind(this);
 }

 toggleAccordion(index) {
    this.setState((prevState) => {
      const newIsOpen = [...prevState.isOpen];
      if (newIsOpen[index]) {
        newIsOpen[index] = false;
      } else {
        newIsOpen.fill(false);
        newIsOpen[index] = true;
      }
      return { isOpen: newIsOpen };
    });
  }

 render() {
 return (
 <div className="container">
   <h1>Accommodation</h1>
   <h3 className="steps">Steps to register</h3>
   <div className="registration-steps-container">
     <div className="registration-step">
       <div className="step-icon" style={{fontSize: '2rem'}}>Step 1</div>
       <p className="step-description" style={{fontSize: '1.2rem'}}>Go to the AVAIL Button URL and fill in the registration form</p>
     </div>
     <div className="registration-step">
       <div className="step-icon" style={{fontSize: '2rem'}}>Step 2</div>
       <p className="step-description" style={{fontSize: '1.2rem'}}>Complete the payment procedure</p>
     </div>
     <div className="registration-step">
       <div className="step-icon" style={{fontSize: '2rem'}}>Step 3</div>
       <p className="step-description" style={{fontSize: '1.2rem'}}>Confirmation will be sent to you</p>
     </div>
     <div className="registration-step">
       <div className="step-icon" style={{fontSize: '2rem'}}>Step 4</div>
       <p className="step-description" style={{fontSize: '1.2rem'}}>Report at the accommodation desk</p>
     </div>
   </div>
   <div className="buttons">
     <button className="avail-button">Avail Now</button>
     <button className="info-button">More info</button>
   </div>
   <div className="container">
     <h2 style={{fontSize: '2rem'}}>Frequently Asked Questions</h2>
     <div className="accordion">
       <div className="accordion-item">
       <button id="accordion-button-1" aria-expanded={this.state.isOpen[0]} onClick={() => this.toggleAccordion(0)}>

          <span className="accordion-title" style={{fontSize: '1.2rem'}}>What is the payment procedure?</span>
           <span className="icon" aria-hidden="true"></span>
         </button>
         <div className="accordion-content" style={{ maxHeight: this.state.isOpen[0] ? '1000px' : '0px' }}>
           <p>
             i. Payment procedure will be online only.<br />
             ii. Accommodation charge is provided below.<br />
             iii. While reporting, it is required to carry email print and the mandatory documents.<br />
             Failing to bring any of the documents may lead to the cancellation of your accommodation.
           </p>
         </div>
       </div>
       <div className="accordion-item">
       <button id="accordion-button-2" aria-expanded={this.state.isOpen[1]} onClick={() => this.toggleAccordion(1)}>

          <span className="accordion-title" style={{fontSize: '1.2rem'}}>What are the Accommodation Charges?</span>
           <span className="icon" aria-hidden="true"></span>
         </button>
         <div className="accordion-content" style={{ maxHeight: this.state.isOpen[1] ? '1000px' : '0px' }}>
           <p>
             Accommodation Charges: Rs. 500 /- per night.
           </p>
         </div>
       </div>
       <div className="accordion-item">
       <button id="accordion-button-3" aria-expanded={this.state.isOpen[2]} onClick={() => this.toggleAccordion(2)}>

          <span className="accordion-title" style={{fontSize: '1.2rem'}}>Documents to carry?</span>
           <span className="icon" aria-hidden="true"></span>
         </button>
         <div className="accordion-content" style={{ maxHeight: this.state.isOpen[2] ? '1000px' : '0px' }}>
           <p>
             i. Any valid Govt Photo ID.<br />
             ii. Print the email confirmation.<br />
             iii. Valid College ID for participants.<br />
             iv. Fee receipt of payment.
           </p>
         </div>
       </div>
       <div className="accordion-item">
       <button id="accordion-button-4" aria-expanded={this.state.isOpen[3]} onClick={() => this.toggleAccordion(3)}>

           <span className="accordion-title" style={{fontSize: '1.2rem'}}>What kind of accommodation is provided?</span>
           <span className="icon" aria-hidden="true"></span>
         </button>
         <div className="accordion-content" style={{ maxHeight: this.state.isOpen[3] ? '1000px' : '0px' }}>
           <p>
             Accommodation includes - <br />
             ● 1 Mattress <br />
             ● 1 Pillow <br />
             ● 1 blanket
           </p>
         </div>
       </div>
      

        <div className="accordion-item">
        <button id="accordion-button-5" aria-expanded={this.state.isOpen[4]} onClick={() => this.toggleAccordion(4)}>
           <span className="accordion-title" style={{fontSize: '1.2rem'}}>Do the accommodation charges include food facilities too?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content" style={{ maxHeight: this.state.isOpen[4] ? '1000px' : '0px' }}>
          <p>
                No, the accommodation charges do not include food facilities. Guests can purchase their own meals from the food court, VJTI canteen, or hostel mess (using coupons). You can also purchase your meals from nearby restaurants.
            </p>
          </div>
        </div>
        <div className="accordion-item">
        <button id="accordion-button-6" aria-expanded={this.state.isOpen[5]} onClick={() => this.toggleAccordion(5)}>

           <span className="accordion-title" style={{fontSize: '1.2rem'}}>What is Cancellation Policy?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content" style={{ maxHeight: this.state.isOpen[5] ? '1000px' : '0px' }}>
          <p>
                Confirmed accommodation CANNOT be canceled in any case. There shall be no refunds after you have availed the accommodation. The deadline for availing of the accommodation will be the 20th of February, 11:59 pm.
            </p>
          </div>
        </div>
        <div className="buttons">
          <a href="/Contacts">
     <button className="Contacts">Contact Us</button></a>
   </div>        
      </div>
    </div>
    <Fotter position="static" />
  </div>

  
 );
 
  
 }
}

export default Hosp;
