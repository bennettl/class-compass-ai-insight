
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Hero } from './components/landing/Hero';
import { Benefits } from './components/landing/Benefits';
import { Testimonials } from './components/landing/Testimonials';
import { Pricing } from './components/landing/Pricing';
import { FerpaCompliance } from './components/landing/FerpaCompliance';
import { Footer } from './components/landing/Footer';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';

const theme = createTheme({
  primaryColor: 'indigo',
  colors: {
    indigo: [
      '#eef2ff',
      '#e0e7ff',
      '#c7d2fe',
      '#a5b4fc',
      '#818cf8',
      '#6366f1',
      '#4f46e5',
      '#4338ca',
      '#3730a3',
      '#312e81'
    ]
  },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    fontWeight: '700'
  }
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <div className="min-h-screen">
        <Hero />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FerpaCompliance />
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
