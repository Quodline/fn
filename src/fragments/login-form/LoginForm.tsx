'use client';

import { Box, Button, Stack, TextInput } from '@mantine/core';
import useLoginForm from './useLoginForm';

export function LoginForm() {
  const h = useLoginForm();

  return (
    <Box maw={340} mx="auto" mt={64}>
      <form onSubmit={h.onSubmit}>
        <Stack gap="md">
          <TextInput label="Email" {...h.form.getInputProps('email')} type="email" />
          <Button type="submit">Sign in with email</Button>
        </Stack>
      </form>
    </Box>
  );
}
