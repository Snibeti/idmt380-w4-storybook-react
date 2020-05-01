import React from 'react';
import { storiesOf } from "@storybook/react";
import { Button } from './components/Button';

storiesOf("Button", module);

export default { 
    
    component: Button,
    title: 'Button', 

};

export const withText = () => <Button>Test Button</Button>;

export const withEmoji = () => (
  <Button>
  </Button>
);