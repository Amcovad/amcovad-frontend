import React from 'react';
import Input from '../components/form/Input';

const Stories = {
  title: 'Components/Input',
  component: Input
};
export default Stories;

const Template = (args) => <Input {...args} />;

export const Password = Template.bind({});

Password.args = {
  label: 'Create password',
  name: 'password',
  placeholder: 'Password',
  type: 'password'
};
