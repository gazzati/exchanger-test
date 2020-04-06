import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Tab, Tabs} from "react-bootstrap";
import TopFiveValues from "./TopFiveValues";

function App() {
    const [showTab, setShowTab] = useState(false);
    const [value, setValue] = useState(null)

    const onSelectNav = (selectedKey) => {
        alert(`selected ${selectedKey}`);
        setValue(selectedKey);
        setShowTab(true);
    }
    return (
    <div className="App">
        <Nav
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

        {showTab && <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                {value} <>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                222 <TopFiveValues/>
            </Tab>

        </Tabs>}

    </div>
  );
}

export default App;
