# Design Management System
Design Management System for Wish Team for better development. in do so, we use storybook as our DMS. Each component which could be developed in isolation will be added here. 

## Purpose
The purpose of this project is to create a unified toolkit that is used by UX-designers and developers alike on their projects to ensure all Wish Work projects are accessible, appealing, and have a consistent code-base and feel across the board by following Wish Work’s design and implementation guidelines.

## Structure
This Design System consist of 4 sections 
1. `Form`, 
2. `Profile`,
3. `Navigation Bar`, 
4. `General`.

## Framework
Our main framework is React.js. In this case, we write a input.stories.js as follows: 
```javascript
import React from 'react';
import './input.scss';

export const Input = () => {
  return (
    <>
      <input className="input-field"/>
    </> 
    ) 
}
```

## Contribute
first you should pull the code base. Then you could easily use `npm run storybook` command and access to the storybook on `localhost:6006`. 
