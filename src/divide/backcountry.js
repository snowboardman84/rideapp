import React from 'react';



import Beaver from '../skiMods/beaver';
import Bell from '../skiMods/bellLake';
import Cooke from '../skiMods/cooke';

import '../skiMods/cards.css'


export default class Backcountry extends React.Component {


    render() {
        return (
            <div className='backcountry'>
                <h4>
                    <a href="https://www.mtavalanche.com/">Gallatin Avalanche Center</a><br />
                    <a href="http://jhavalanche.org/">Bridger-Teton Avalanche Center</a>
                </h4>
                < Beaver />
                < Bell />
                < Cooke />

            </div>
        );
    }
}

