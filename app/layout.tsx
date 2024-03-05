import '@mantine/core/styles.css';
import { Mulish } from 'next/font/google';
import React, { PropsWithChildren } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Form Ninja',
  description: 'Create and share dynamic forms with ease.',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className={mulish.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div className={mulish.variable}>{props.children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
