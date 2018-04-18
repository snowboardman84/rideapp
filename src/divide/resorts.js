import React from 'react';
import BigSky from '../skiMods/bigsky.js';
import Bridger from '../skiMods/bridger.js';
import RedLodge from '../skiMods/redlodge.js';
import Targhee from '../skiMods/targhee';
import Jackson from '../skiMods/jackson';

export default class Resorts extends React.Component {

    render() {
        return (
            <div>
                < BigSky /> < Bridger />

                < RedLodge />  < Targhee />

                < Jackson />
            </div>
        );
    }
}



