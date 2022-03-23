import Input from '@/components/form/Input';
import HookForm from '@/components/form/Form';
import { ShowPasswordIcon } from '@/public/assets/signUp/passwordSvgs';

const InputStories = {
  title: 'Components/Input',
  component: Input
};

export default InputStories;

const defaultParameters = {
  name: 'email',
  placeholder: 'Email'
};

const Template = (args) => (
  <HookForm>
    <Input {...args} />
  </HookForm>
);

export const Default = Template.bind({});

Default.args = defaultParameters;

export const withIcon = Template.bind({});
withIcon.args = {
  ...defaultParameters,
  Icon: <ShowPasswordIcon width="18px" height="18px" fill="#A9ABAD" />
};
export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
  ...defaultParameters,
  label: 'New placeholder'
};

export const withLabelAndIcon = Template.bind({});
withLabelAndIcon.args = {
  ...defaultParameters,
  label: 'Email address',
  Icon: <ShowPasswordIcon width="18px" height="18px" fill="#A9ABAD" />
};
