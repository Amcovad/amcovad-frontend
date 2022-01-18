import { Button, Input } from '@/components/form';
import Navbar from '@/components/Navbar';
import { PasswordCheckIcon } from '../assets/svgs';


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <h1 className={styles.header}>Welcome to Amcovad</h1>

      <h2>Solid Button</h2>
      <Button>Sign in</Button>

      <Button color="secondary">Try it now</Button>

      <h2>Outline Button</h2>

      <Button outline>Sign in</Button>

      <Button outline color="secondary">
        Try it now
      </Button>

      <Input label="Email address" name="email" type="email" />
      <Input
        label="Password"
        name="password"
        type="password"
        Icon={<PasswordCheckIcon width="18px" height="18px" fill="#292D32" />}
      />
    </>
  );
}

const styles = {
  header: 'text-3xl font-bold underline text-red-500 mt-10'
};
