import React from 'react';
import {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar({handleFilter}){
    const [currencies, setCurrencies] = useState([])
    const [languages, setLanguage] = useState([])
    const [timezones, setTimezone] = useState([])

    useEffect(() => {
        fetch('/api/currencies')
        .then(response => response.json())
        .then(data => {
            setCurrencies(data)
        })
        
        fetch('/api/languages')
        .then(response => response.json())
        .then(data => {
            setLanguage(data)
        })

        fetch('/api/timezones')
        .then(response => response.json())
        .then(data => {
            setTimezone(data)
        })
    }, [])

    return(
        <div className="navbar"> 
            <select name="currency" onChange={handleFilter}>
                <option value="">Currency</option>
                {currencies.map((currencies) => (
                    <option key={currencies.code} value={currencies.code}>
                        {currencies.name}
                    </option>
                ))}
            </select>

            <select name="language" onChange={handleFilter}>
                <option value="">Language</option>
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>

            <select name="timezone" onChange={handleFilter}>
                <option value="">Timezone</option>
                {timezones.map((timezone) => (
                    <option key={timezone} value={timezone}>
                        {timezone}
                    </option>
                ))}
            </select>
        </div>
    )
}