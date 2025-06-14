
import { Button, Container, Grid, Text, Title, Group, Badge, Box } from '@mantine/core';
import { IconArrowRight, IconPlayerPlay, IconBook, IconUsers, IconTrendingUp } from '@tabler/icons-react';

export const Hero = () => {
  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f3e8ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      py={80}
    >
      {/* Background decoration */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <Container size="xl" style={{ position: 'relative' }}>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Group justify="center" style={{ '@media (min-width: 1024px)': { justifyContent: 'flex-start' } }}>
              <Badge
                size="lg"
                variant="light"
                color="indigo"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(99, 102, 241, 0.3)'
                }}
                leftSection={<IconTrendingUp size={16} />}
              >
                AI-Powered Teaching Assistant
              </Badge>
            </Group>
            
            <Title
              order={1}
              size="3.5rem"
              fw={700}
              ta="center"
              style={{ 
                '@media (min-width: 1024px)': { textAlign: 'left' },
                '@media (min-width: 640px)': { fontSize: '4rem' },
                '@media (min-width: 1024px)': { fontSize: '4.5rem' },
                lineHeight: 1.1,
                marginTop: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              Transform Your{' '}
              <Text
                span
                variant="gradient"
                gradient={{ from: 'indigo.6', to: 'violet.6', deg: 45 }}
              >
                Teaching
              </Text>
              <br />
              with AI Intelligence
            </Title>
            
            <Text
              size="xl"
              c="gray.6"
              ta="center"
              style={{ 
                '@media (min-width: 1024px)': { textAlign: 'left' },
                maxWidth: '48rem',
                marginBottom: '2rem'
              }}
            >
              SupaClass empowers educators with sophisticated feedback capabilities and actionable classroom intelligence. 
              Go beyond grading—unlock personalized learning insights for every student.
            </Text>
            
            <Group
              justify="center"
              style={{ 
                '@media (min-width: 1024px)': { justifyContent: 'flex-start' },
                '@media (max-width: 640px)': { flexDirection: 'column' }
              }}
              gap="md"
            >
              <Button
                size="lg"
                color="indigo"
                rightSection={<IconArrowRight size={20} />}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  padding: '1rem 2rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                color="gray"
                leftSection={<IconPlayerPlay size={20} />}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  padding: '1rem 2rem',
                  borderWidth: '2px',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'var(--mantine-color-indigo-3)',
                    color: 'var(--mantine-color-indigo-6)'
                  }
                }}
              >
                Watch Demo
              </Button>
            </Group>
            
            <Group
              justify="center"
              style={{ 
                '@media (min-width: 1024px)': { justifyContent: 'flex-start' },
                marginTop: '2rem'
              }}
              gap="xl"
            >
              <Group gap="xs">
                <IconBook size={16} color="var(--mantine-color-gray-5)" />
                <Text size="sm" c="gray.5">No setup required</Text>
              </Group>
              <Group gap="xs">
                <IconUsers size={16} color="var(--mantine-color-gray-5)" />
                <Text size="sm" c="gray.5">Trusted by 10,000+ teachers</Text>
              </Group>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
