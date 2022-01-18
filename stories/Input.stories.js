import Input from '../components/form/Input';
import { PasswordCheckIcon } from '../assets/svgs';

const InputStories = {
  title: 'Components/Input',
  component: Input
};

export default InputStories;

const defaultParameters = {
  name: 'email',
  placeholder: 'Email'
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = defaultParameters;

export const withIcon = Template.bind({});
withIcon.args = {
  ...defaultParameters,
  Icon: <PasswordCheckIcon width="18px" height="18px" fill="#292D32" />
};
export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
  ...defaultParameters,
  placeholder: 'New placeholder'
};

export const withLabelAndIcon = Template.bind({});
withLabelAndIcon.args = {
  ...defaultParameters,
  label: 'Email address',
  Icon: <PasswordCheckIcon width="18px" height="18px" fill="#292D32" />
};
