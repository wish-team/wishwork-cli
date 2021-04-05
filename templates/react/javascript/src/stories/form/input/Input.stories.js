import React from 'react';

import {Input, sampleValidateFunction} from "./Input";

export default {
    title: "Form/Input",
    component: Input
}

const InputStory = (args) => <Input {...args} />;
const InputStory2 = (args) => <Input {...args} />;

export const SimpleInputField = InputStory.bind({});

SimpleInputField.args = {
    name: 'Email',
    id: "email-input",
    message: 'Please Enter your Email Address',
};

// SimpleInputField.parameters = {
//     docs: { page: null }
// };

export const InputFieldWithError = InputStory2.bind({});
InputFieldWithError.args = {
    name: 'User Name',
    id: "username-input",
    message: 'Please Enter your Username',
    validateFunction: sampleValidateFunction
};

