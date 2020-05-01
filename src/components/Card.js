import React from 'react';
import '../App.css';

import {Button} from './Button';


export const Card = ( {

    children


}) => {

    return (

    <div className="card--padding">
        <div className="text--padding">
        <h3>Sample Paragraph text</h3>
        {children}
        </div>
        <Button>Cick Me</Button>
    </div>
    )


}