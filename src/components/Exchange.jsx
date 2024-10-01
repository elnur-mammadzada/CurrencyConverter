import { FaArrowCircleRight } from 'react-icons/fa';
import '../css/exchange.css'
import axios from 'axios';
import React, { useState } from 'react'


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_s9jvzEbPmfiLyqYdNwyl2iBu3kOpy8ylRJHs0etl"


const Exchange = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [result, setResult] = useState(0);

    const exchanges = async () => {
        if (fromCurrency !== "") {
            const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
            setResult(((response.data.data[toCurrency]) * amount).toFixed(2))

        } else {
            alert("Select")
        }


    }
    return (

        <div className='currency'>
            <div className='currency__head'>
                <h1 className='currency__head-title'>Exchange</h1>
            </div>
            <div className='currency__main'>
                <input
                    type="number"
                    placeholder='Enter amount'
                    className='currency__main-amount'
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />

                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='currency__main-option'>
                    <option value=""></option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>

                <FaArrowCircleRight color='white' size={30} />


                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='currency__main-option'>
                    <option value=""></option>
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>

                <input
                    type="number"
                    className='currency__main-result'
                    onChange={(e) => setResult(e.target.value)}
                    value={result}
                />

                <button
                    onClick={exchanges}
                    className='currency__main-btn'>Click here</button>
            </div>
        </div>
    )
}

export default Exchange



