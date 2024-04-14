import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './card.css';

import Card from "./Card";
import CardStack from "./CardStack";
import { CardLogo } from './CardLogo';
import { kaspi_style, jusan_style, forte_style, bcc_style, halyk_style, simply_style, eurasian_style} from './styles';

const banks = [
    { "name": 'bcc', "cards": ['IronCard', 'TravelCard', 'картакарта', 'juniorcard'] },
    { "name": 'forte', "cards": ['Travel', 'Blue', 'Black', 'Solo'] },
    { "name": 'halyk', "cards": ['Halyk Bonus', 'Sinooil'] },
];

const bank_keys = ['kaspi', 'bcc', 'forte', 'halyk', 'jusan', 'simply', 'eurasian'];

const AddCard = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
        bank: bank_keys[0],
        card_type: '',
    });
    const [myCards, setMyCards] = useState([]);

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const onAddCard = () => {
        setMyCards((prev) => [...prev, state]);
        console.log(state.cvc, state.expiry, state.name, state.number, state.bank, state.card_type);
        console.log(myCards.length > 0);
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return (
        <div className='user-cards'>
            <div>
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
                <form class="form-container" onSubmit={e => e.preventDefault()} >
                    <input
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="expiry"
                        name="expiry"
                        placeholder="Card Expiry"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="name"
                        name="name"
                        placeholder="Cardholder Name"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <select
                        name="bank"
                        value={state.bank}
                        onChange={handleInputChange}
                        className="bank-select"
                    >
                        {bank_keys.map((bank) => (
                            <option value={bank}>{bank}</option>
                        ))}
                    </select>

                    {
                        state.bank !== '' && banks.map((bank) => {
                            if (bank.name === state.bank) {
                                return (
                                    <select
                                        name="card_type"
                                        value={state.card_type}
                                        onChange={handleInputChange}
                                        className="bank-select"
                                    >
                                        {bank.cards.map((card) => (
                                            <option value={card}>{card}</option>
                                        ))}
                                    </select>
                                )
                            }
                        })
                    }

                    <button type="submit" class="add-card-button" onClick={onAddCard}>Add Card</button>
                </form>
            </div>
            <div>
            <CardStack
                height={248}
                width={423}
                background='#f8f8f8'
                hoverOffset={25}
                borderRadius={12}
            >
                <Card >
                    <CardLogo style={kaspi_style} cardNumber={"4400 4566 3450 0900"} expiryDate={"12/27"}/>
                </Card>
                <Card >
                    <CardLogo style={jusan_style} cardNumber={"4400 4566 3450 0900"} expiryDate={"12/27"}/>
                </Card>
                <Card >
                    <CardLogo style={bcc_style} cardNumber={"4400 4566 3450 0900"} expiryDate={"12/27"}/>
                </Card>
                <Card >
                    <CardLogo style={simply_style} cardNumber={"4400 4566 3450 0900"} expiryDate={"12/27"}/>
                </Card>
                <Card >
                    <CardLogo style={halyk_style} cardNumber={"4400 4566 3450 0900"} expiryDate={"12/27"}/>
                </Card>
                <Card >
                    <CardLogo style={eurasian_style} cardNumber={"4400 4566 3450 0900"} expiryDate={"12/27"}/>
                </Card>
                {/* {myCards.length > 0 && myCards.map((card, i) => (
                    <div>
                    <Card key={i}>
                        <CardLogo style={card.bank === 'bcc' ? bcc_style : card.bank === 'forte' ? forte_style : card.bank === 'halyk' ? halyk_style : card.bank === 'simply' ? simply_style : card.bank === 'eurasian' ? eurasian_style : null} cardNumber={card.number} expiryDate={card.expiry}/>
                    </Card>
                    </div>
                ))} */}
            </CardStack>
            </div>
        </div>
    );
}

export default AddCard;