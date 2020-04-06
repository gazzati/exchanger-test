import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Tab, Table, Tabs} from "react-bootstrap";
import UnitOfTable from "./UnitOfTable";


function MainTable({currency}) {
    const [rates, setRates] = useState({rates: {}, date: null})
    const [preRates, setPreRates] = useState({rates: {}})
    const [prePreRates, setPrePreRates] = useState({rates: {}})
    const [pastMode, setPastMode] = useState(false)

    const pastModeChanger = () => {
        setPastMode(!pastMode)
    }

    const changeFormatTime = (value) => {
        if (value < 10) {
            return `0${value}`
        } else return value
    }

    const changeDate = (date) => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() - 1)
        return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    }

    const changeDateToTable = (date) => {
        const newDate = new Date(date)
        return `${changeFormatTime(newDate.getDate())}-${changeFormatTime(newDate.getMonth() + 1)}-${newDate.getFullYear()}`
    }

    useEffect(() => {
        const getRates = async (setRates, date = 'latest') => {
            try {
                let response = await fetch(`https://api.exchangeratesapi.io/${date}?base=${currency}`)
                let answer = await response.json();
                setRates({
                    ...answer,
                    date: changeDateToTable(answer.date)
                });
                console.log(answer.date)
                return answer.date
            } catch (error) {
                console.log(error)
            }
        }

        getRates(setRates)
            .then(response => getRates(setPreRates, changeDate(response))
                .then(response => getRates(setPrePreRates, changeDate(response))))

    }, [currency])
    return (
        <Tabs defaultActiveKey="rates" id="uncontrolled-tab-example">
            <Tab eventKey="rates" title="Exchange rates">
                <div className="WrapperContent">
                    <div className="Description">
                        <span>Base currency: <b>{currency}</b></span>
                        <span className="margin-left">Request date: <b>{`${changeDateToTable(new Date())}`}</b></span>
                        <span className="margin-left">Request time: <b>{`${changeFormatTime(
                            (new Date().getHours()))}:${changeFormatTime(new Date().getMinutes())}`}</b></span>
                        {!pastMode
                            ? <Button variant="primary"
                                      className="margin-left"
                                      onClick={pastModeChanger}>{preRates.date} rates</Button>
                            : <Button className="margin-left"
                                      variant="primary"
                                      onClick={pastModeChanger}>{rates.date} rates</Button>}
                    </div>
                    <Table className="MainTable" striped bordered>
                        <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rates on {!pastMode ? rates.date : preRates.date}</th>
                            <th>In comparison with {!pastMode ? preRates.date : prePreRates.date}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rates && Object.keys(rates.rates)
                            .map(el => (el != currency) && <UnitOfTable values={el}
                                                                        rates={pastMode ? preRates.rates[el] : rates.rates[el]}
                                                                        preRates={pastMode ? prePreRates.rates[el] : preRates.rates[el]}/>)
                        }
                        </tbody>
                    </Table>
                </div>
            </Tab>
            {/* <Tab eventKey="topFive" title="Top 5 biggest changes">
        </Tab>*/}
        </Tabs>
    );
}

export default MainTable;
