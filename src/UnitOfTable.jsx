import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UnitOfTable({values, rates, preRates}) {
    const subtractionRates = (rate, preRate) => {
        const rel = rate / preRate * 100;
        if (rel < 100) {
            return `-${(100 - rel).toFixed(3)}%`
        } else if (rel > 100) return `+${(rel - 100).toFixed(3)}%`
        else return 'Without changes'
    }
    return (
        <tr>
            <td>{values}</td>
            <td>{rates.toFixed(3)}</td>
            <td>{subtractionRates(rates, preRates)}</td>
        </tr>
    );
}

export default UnitOfTable;
