import React from 'react';
import Beaver from '../skiMods/beaver';
import Bell from '../skiMods/bellLake';
import Cooke from '../skiMods/cooke';

import '../skiMods/cards.css'


export default class Resorts extends React.Component {
   

        render() {
            return (
                <div className='backcountry'>
                    < Beaver />
                    < Bell />
                    < Cooke />

                </div>
            );
        }
    }

