import { Anchor, Flex } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

export function Nav() {
  return (
    <Anchor href="/" underline="never">
      <Flex px="4" align="center" gap="md">
        <MantineLogo color="violet" size={50} type="mark" />
        <h1>FormNinja</h1>
      </Flex>
    </Anchor>
  );
}
