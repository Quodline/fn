'use client';

import { Box, Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function RegisterForm() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Box maw={340} mx="auto" mt={64}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack gap="sm">
          <TextInput label="Email" {...form.getInputProps('email')} />
          <TextInput label="Password" {...form.getInputProps('password')} />
        </Stack>
        <Group justify="flex-end" mt="md">
          <Button type="submit">Create account</Button>
        </Group>
      </form>
    </Box>
  );
}
