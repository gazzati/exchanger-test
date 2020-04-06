import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Tab, Table, Tabs} from "react-bootstrap";


function MainTable({currency}) {
    const [rates, setRates] = useState({rates:{}})
    const [preRates, setPreRates] = useState({rates:{}})
    const [prePreRates, setPrePreRates] = useState({rates:{}})
    const [requestTime, setRequestTime] = useState(null)


    useEffect(() => {
        const getRates = async (setRates, date = 'latest') => {
            try {
                let response = await fetch(`https://api.exchangeratesapi.io/${date}?base=${currency}`)
                let answer = await response.json();
                setRates({...answer});
                return answer.date

            } catch (error) {
                console.log(error)
            }
        }

        const changeDate = (date) => {
                const newDate = new Date(date)
            newDate.setDate(newDate.getDate()-1)
                return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
        }

        getRates(setRates)
            .then(response => getRates(setPreRates, changeDate(response))
                .then(response => getRates(setPrePreRates, changeDate(response))))
        setRequestTime(new Date())



    }, [currency])
    console.log(rates)
    console.log(preRates)
    console.log(prePreRates)
    console.log(requestTime)


    return (
        <div className="MainTable">
            <Table striped bordered>
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate today</th>
                    <th>Rate yesterday</th>
                </tr>
                </thead>
                <tbody>
                <th>11</th>
                </tbody>
            </Table>
        </div>
    );
}

export default MainTable;
