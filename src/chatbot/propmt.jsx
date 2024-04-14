import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.css';
import CardGrid from './CardGrid';

const cardsData = [
    {
      bankName: 'HALYK BANK',
      cardNumber: '**** 4211',
      expiryDate: '12/25',
      bonus: '7200 тг',
      interestRate: '6%',
      logo: 'path/to/halykbank-logo.png', // Assume you have images in your project
      backgroundColor: '#35A700', // Green color for the card
    },
    {
      bankName: 'KASPI GOLD',
      cardNumber: '**** 4211',
      expiryDate: '12/25',
      bonus: '6600 тг',
      interestRate: '5.5%',
      logo: 'path/to/kaspigold-logo.png',
      backgroundColor: '#DAA520', // Gold color for the card
    },
    {
      bankName: 'FORTE BANK',
      cardNumber: '**** 4211',
      expiryDate: '12/26',
      bonus: '6000 тг',
      interestRate: '5%',
      logo: 'path/to/fortebank-logo.png',
      backgroundColor: '#000000', // Black color for the card
    },
    // Add more cards as needed
  ];
  

function Prompt() {
    const [sliderValue, setSliderValue] = useState(50);
 
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const onPrompt = () => {
        console.log("prompted");
    }

    return (
    <div style={{margin: "40px"}}>
        <Form className='ml-5' style={{borderColor: '#35A700', margin: 'auto 48px'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{border:'1px solid #35A700', padding:'14px', borderRadius:'32px'}}>
          <Form.Label className="ml-3" style={{ margin: '10px', fontSize: "20px"}}>Привет! Давайте определимся, что вы хотите купить?</Form.Label>
          <Form.Control as="textarea" rows={3} style={{border:'1px solid #35A700', borderRadius:'26px'}}/>
          <button className="btn btn-success rounded-pill ml-2" style={{margin: "9px", padding:"10px 30px"}} onClick={onPrompt}>Найти</button>
        </Form.Group>
      </Form>
         <div style={{margin: 'auto 58px'}} >
                <Form.Label className='chat-title'>
                    Сумма вашей покупки
                </Form.Label>
                <Form.Range
                    value={sliderValue}
                    name='hello'
                    onChange={handleSliderChange}
                    className="custom-slider"
                    variant='success'
                    min={1000}
                    max={100000}/>
                <p className='selected-value'>{sliderValue} тг</p>
            </div>
            {/* <CardGrid /> */}
    </div>

    );
  }
  
  export default Prompt;