import { Button, Input } from '@/components/form';
import { PasswordCheckIcon } from '../assets/svgs';

export default function Home() {
  return (
    <>
      <h1 className={styles.header}>Welcome to Amcovad</h1>

      <h2>Solid Button</h2>
      <Button>Sign in</Button>

      <Button color="secondary">try it now</Button>

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
        Icon={<PasswordCheckIcon className="w-4 h-4 fill-[#292D32]" />}
      />
      <br />
    </>
  );
}

const styles = {
  header: 'text-3xl font-bold underline text-red-500'
};
