import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from "react-bootstrap";
import MainTable from "./MainTable";

function App() {
    const [showButton, setShowButton] = useState(false);
    const [showTab, setShowTab] = useState(false);
    const [preValue, setPreValue] = useState(null)
    const [value, setValue] = useState(null)


    const onSelectNav = (selectedKey) => {
        setPreValue(selectedKey);
        setShowButton(true);
    }

    const onGetRatesClick = () => {
        setShowTab(true);
        setValue(preValue)
    }

    return (
        <div className="App">
            <div className="SelectValue">
                <Nav className="Selector" variant="pills"
                     onSelect={onSelectNav}>
                    <Nav.Item>
                        <Nav.Link eventKey="USD">USD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="EUR">EUR</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="RUB">RUB</Nav.Link>
                    </Nav.Item>
                </Nav>
                {showButton &&
                <Button className="GetButton" onClick={onGetRatesClick}>Get rates</Button>}
            </div>
            <div className="WrapperContent">
                {showTab && <MainTable currency={value} />}
            </div>
        </div>
    );
}

export default App;
