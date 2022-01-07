import Button from '@/components/form/Button';

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
    </>
  );
}

const styles = {
  header: 'text-3xl font-bold underline text-red-500'
};
