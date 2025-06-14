
import { Container, Title, Text, Paper, Box, Group, Grid, ThemeIcon } from '@mantine/core';
import { IconBook, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

export const Footer = () => {
  return (
    <Box py={64} bg="gray.9" c="white">
      <Container size="xl">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Group mb="xl">
              <IconBook size={32} color="var(--mantine-color-indigo-4)" />
              <Text size="xl" fw={700}>SupaClass</Text>
            </Group>
            <Text c="gray.4" mb="xl">
              Empowering educators with AI-powered teaching intelligence and sophisticated feedback capabilities.
            </Text>
            <Group>
              <ThemeIcon
                size={40}
                radius="md"
                color="indigo"
                style={{
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    backgroundColor: 'var(--mantine-color-indigo-7)'
                  }
                }}
              >
                <Text size="sm" fw={700}>f</Text>
              </ThemeIcon>
              <ThemeIcon
                size={40}
                radius="md"
                color="indigo"
                style={{
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    backgroundColor: 'var(--mantine-color-indigo-7)'
                  }
                }}
              >
                <Text size="sm" fw={700}>t</Text>
              </ThemeIcon>
              <ThemeIcon
                size={40}
                radius="md"
                color="indigo"
                style={{
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    backgroundColor: 'var(--mantine-color-indigo-7)'
                  }
                }}
              >
                <Text size="sm" fw={700}>in</Text>
              </ThemeIcon>
            </Group>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Title order={3} size="lg" fw={600} mb="xl">Product</Title>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Features</Text>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Pricing</Text>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Integrations</Text>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>API</Text>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Title order={3} size="lg" fw={600} mb="xl">Resources</Title>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Help Center</Text>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Blog</Text>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Webinars</Text>
              <Text component="a" href="#" c="gray.4" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Case Studies</Text>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Title order={3} size="lg" fw={600} mb="xl">Contact</Title>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Group>
                <IconMail size={20} color="var(--mantine-color-gray-4)" />
                <Text c="gray.4">hello@supaclass.ai</Text>
              </Group>
              <Group>
                <IconPhone size={20} color="var(--mantine-color-gray-4)" />
                <Text c="gray.4">1-800-SUPACLASS</Text>
              </Group>
              <Group>
                <IconMapPin size={20} color="var(--mantine-color-gray-4)" />
                <Text c="gray.4">San Francisco, CA</Text>
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
        
        <Box mt={48} pt="xl" style={{ borderTop: '1px solid var(--mantine-color-gray-8)' }}>
          <Group justify="space-between" style={{ '@media (max-width: 768px)': { flexDirection: 'column', gap: '1rem' } }}>
            <Text size="sm" c="gray.4">
              © 2024 SupaClass. All rights reserved.
            </Text>
            <Group>
              <Text component="a" href="#" c="gray.4" size="sm" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Privacy Policy</Text>
              <Text component="a" href="#" c="gray.4" size="sm" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Terms of Service</Text>
              <Text component="a" href="#" c="gray.4" size="sm" style={{ textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'white' } }}>Cookie Policy</Text>
            </Group>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};
