import React from 'react'
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <label>
                <select>
                    <option value="can">Select </option>
                    <option value="ind">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="eng">UK</option>
                    <option value="aus">AUS</option>
                </select>

            </label>


        </div>
    )
}

export default Header;

