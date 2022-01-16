import Navbar from '../components/Navbar';

const HeaderStories = {
  title: 'Components/Header',
  component: Navbar
};

export default HeaderStories;

const Template = (args) => <Navbar {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  user: {}
};
