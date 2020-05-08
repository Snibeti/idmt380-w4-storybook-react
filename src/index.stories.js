import React from 'react';
import { storiesOf } from "@storybook/react";
import { Button } from './components/Button';
import { Card } from './components/Card';

storiesOf("Button", module);

export default { 
    
    component: Button,
    title: 'Button',

};


export const paragraphCard = () => <Card></Card>

export const primaryText = () => <Button>Test Button</Button>;

export const primaryOutline = () => (
  <Button
      onClick={() => {console.log("button clickity clacked")}} 
      type="button"
      buttonStyle="btn--primary--outline"
      buttonSize="btn--large"
  >Test Button</Button>
);

export const warningSolid = () => (
  <Button
      onClick={() => {console.log("button clickity clacked")}} 
      type="button"
      buttonStyle="btn--warning--solid"
      buttonSize="btn--large"
  >Test Button</Button>
);

export const warningOutline = () => (
  <Button
      onClick={() => {console.log("button clickity clacked")}} 
      type="button"
      buttonStyle="btn--warning--outline"
      buttonSize="btn--large"
  >Test Button</Button>
);