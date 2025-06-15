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
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Container */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Classroom Analytics</h3>
                </div>
                
                {/* Common Misconceptions Card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-4 border border-green-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-800">Common Misconceptions</h4>
                      <p className="text-sm text-gray-600">Fractions - 73% of students</p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconTrendingUp size={16} className="text-green-600" />
                    </div>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                </div>

                {/* Students Needing Support Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-4 border border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">Students Needing Support</h4>
                      <p className="text-sm text-gray-600">5 students flagged</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconUsers size={16} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Personalized Strategies Card */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">Personalized Strategies</h4>
                      <p className="text-sm text-gray-600">12 recommendations ready</p>
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <IconBook size={16} className="text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20"></div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
