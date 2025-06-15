import { Button, Container, Grid, Text, Title, Group, Badge, Box, Paper, Progress, ThemeIcon } from '@mantine/core';
import { IconArrowRight, IconPlayerPlay, IconBook, IconUsers, IconTrendingUp, IconActivity } from '@tabler/icons-react';

export const Hero = () => {
  const animationStyle = {
    animation: 'fade-in 0.5s ease-out forwards',
    opacity: 0,
  };

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
                '@media (min-width: 1280px)': { fontSize: '4.5rem' },
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
          
          <Grid.Col span={{ base: 12, lg: 6 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box style={{ position: 'relative', width: '100%', maxWidth: '32rem' }}>
              {/* Floating Elements */}
              <Box style={{ ...animationStyle, animationDelay: '600ms', position: 'absolute', top: '-1rem', right: '-1rem', width: '4rem', height: '4rem' }}>
                <Box style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #a5b4fc, #c4b5fd)', borderRadius: '9999px', opacity: 0.2 }} />
              </Box>
              <Box style={{ ...animationStyle, animationDelay: '800ms', position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', width: '3rem', height: '3rem' }}>
                <Box style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #6ee7b7, #34d399)', borderRadius: '9999px', opacity: 0.2 }} />
              </Box>

              {/* Main Dashboard Container */}
              <Paper
                shadow="xl"
                radius="xl"
                p="xl"
                style={{
                  ...animationStyle,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Header */}
                <Group justify="space-between" mb="lg">
                  <Title order={4} style={{ color: '#1f2937' }}>Classroom Analytics</Title>
                  <Badge color="green" variant="light">Live</Badge>
                </Group>

                {/* Common Misconceptions Card */}
                <Paper
                  radius="lg"
                  p="md"
                  mb="md"
                  withBorder
                  style={{
                    ...animationStyle,
                    animationDelay: '200ms',
                    background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
                    borderColor: '#d1fae5',
                  }}
                >
                  <Group justify="space-between" wrap="nowrap" align="start">
                    <Box style={{ flexGrow: 1 }}>
                      <Text fw={500} c="gray.8">Common Misconceptions</Text>
                      <Text size="sm" c="gray.6">Fractions - 73% of students</Text>
                    </Box>
                    <ThemeIcon color="green" variant="light" size="lg" radius="md">
                      <IconTrendingUp size={20} />
                    </ThemeIcon>
                  </Group>
                  <Progress value={73} color="green" size="sm" mt="sm" radius="xl" />
                </Paper>

                {/* Student Engagement Card */}
                <Paper
                  radius="lg"
                  p="md"
                  mb="md"
                  withBorder
                  style={{
                    ...animationStyle,
                    animationDelay: '400ms',
                    background: 'linear-gradient(135deg, #f0f9ff, #eff6ff)',
                    borderColor: '#dbeafe',
                  }}
                >
                  <Group justify="space-between" wrap="nowrap" align="start">
                    <Box style={{ flexGrow: 1 }}>
                      <Text fw={500} c="gray.8">Student Engagement</Text>
                      <Text size="sm" c="gray.6">82% participation rate</Text>
                    </Box>
                    <ThemeIcon color="blue" variant="light" size="lg" radius="md">
                      <IconActivity size={20} />
                    </ThemeIcon>
                  </Group>
                </Paper>

                {/* Personalized Feedback Card */}
                <Paper
                  radius="lg"
                  p="md"
                  withBorder
                  style={{
                    ...animationStyle,
                    animationDelay: '600ms',
                    background: 'linear-gradient(135deg, #f5f3ff, #faf5ff)',
                    borderColor: '#e9d5ff',
                  }}
                >
                  <Group justify="space-between" wrap="nowrap" align="start">
                    <Box style={{ flexGrow: 1 }}>
                      <Text fw={500} c="gray.8">Personalized Feedback</Text>
                      <Text size="sm" c="gray.6">12 opportunities identified</Text>
                    </Box>
                    <ThemeIcon color="violet" variant="light" size="lg" radius="md">
                      <IconBook size={20} />
                    </ThemeIcon>
                  </Group>
                </Paper>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
