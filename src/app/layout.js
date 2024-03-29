import { Inter } from 'next/font/google';
import './globals.css';
import ChakraProviderLayout from './layouts/chakra-provider';
import HTML from './components/html';
import { ThemeContext, ThemeProvider } from './context/theme-context';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tailwind + Chakra UI POC',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <HTML>
        <ChakraProviderLayout>
          <body className={inter.className}>{children}</body>
        </ChakraProviderLayout>
      </HTML>
    </ThemeProvider>
  );
}
