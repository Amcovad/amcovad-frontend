import React from 'react';
import Input from '../components/form/Input';

export default {
  title: 'Components/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const Password = Template.bind({});

Password.args = {
  placeholder: 'Password',
  type: 'Password'
};
