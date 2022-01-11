import { Button, Input } from '@/components/form';
import Navbar from '@/components/Navbar';
import { EmailIcon } from '../assets/svgs';

export default function Home() {
  return (
    <>
      <Navbar />

      <h1 className={styles.header}>Welcome to Amcovad</h1>

      <h2>Solid Button</h2>
      <Button>Sign in</Button>

      <Button color="secondary">try it now</Button>

      <h2>Outline Button</h2>

      <Button outline>Sign in</Button>

      <Button outline color="secondary">
        Try it now
      </Button>
      <br />
      <Input
        name="email"
        label="email"
        placeholder="Email address"
        type="email"
        Icon={<EmailIcon className="w-4 h-4 fill-[#292D32]" />}
      />
      <br />
      <Input placeholder="Password" type="password" />
      <br />
    </>
  );
}

const styles = {
  header: 'text-3xl font-bold underline text-red-500 mt-10'
};
