import { Anchor } from '@mantine/core';
import { Nav } from '@/components/Nav/Nav';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Anchor href="/sign-in">Sign in</Anchor>
    </div>
  );
}
