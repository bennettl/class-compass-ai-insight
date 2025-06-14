
import { Container, Title, Text, Paper, Box, Badge, ThemeIcon, Grid, Group, List } from '@mantine/core';
import { IconShield, IconLock, IconFileText, IconCircleCheck } from '@tabler/icons-react';

const complianceFeatures = [
  {
    icon: IconShield,
    title: "Data Protection",
    description: "End-to-end encryption for all student information"
  },
  {
    icon: IconLock,
    title: "Access Controls",
    description: "Role-based permissions and secure authentication"
  },
  {
    icon: IconFileText,
    title: "Audit Trails",
    description: "Complete logging of all data access and modifications"
  },
  {
    icon: IconCircleCheck,
    title: "Compliance Ready",
    description: "Pre-configured to meet FERPA requirements"
  }
];

export const FerpaCompliance = () => {
  return (
    <Box
      py={80}
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)'
      }}
    >
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge
            size="lg"
            color="green"
            variant="light"
            mb="md"
            leftSection={<IconShield size={16} />}
          >
            FERPA Compliant
          </Badge>
          <Title order={2} size="2.25rem" fw={700} c="gray.9" mb="md">
            Privacy & Security First
          </Title>
          <Text size="xl" c="gray.6" maw={768} mx="auto">
            Built with education privacy standards in mind. Your student data remains secure and compliant.
          </Text>
        </Box>
        
        <Grid mb={48}>
          {complianceFeatures.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <Box ta="center">
                <ThemeIcon
                  size={64}
                  radius="xl"
                  color="blue"
                  variant="light"
                  mb="md"
                  mx="auto"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid var(--mantine-color-gray-2)'
                  }}
                >
                  <feature.icon size={32} />
                </ThemeIcon>
                <Title order={3} size="lg" fw={600} c="gray.9" mb="xs">
                  {feature.title}
                </Title>
                <Text size="sm" c="gray.6">
                  {feature.description}
                </Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
        
        <Paper p="xl" radius="xl" shadow="lg" style={{ border: '1px solid var(--mantine-color-gray-2)' }}>
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={3} size="1.5rem" fw={700} c="gray.9" mb="md">
                Educational Privacy Standards
              </Title>
              <List
                spacing="sm"
                icon={
                  <ThemeIcon color="green" size={20} radius="xl">
                    <IconCircleCheck size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <Text c="gray.7">FERPA compliant data handling</Text>
                </List.Item>
                <List.Item>
                  <Text c="gray.7">SOC 2 Type II certified infrastructure</Text>
                </List.Item>
                <List.Item>
                  <Text c="gray.7">Regular security audits and updates</Text>
                </List.Item>
                <List.Item>
                  <Text c="gray.7">Data residency options available</Text>
                </List.Item>
              </List>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper
                p="xl"
                radius="xl"
                style={{
                  background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
                  border: '1px solid var(--mantine-color-blue-2)'
                }}
              >
                <Box ta="center">
                  <ThemeIcon
                    size={80}
                    radius="xl"
                    color="blue"
                    mb="md"
                    mx="auto"
                  >
                    <IconShield size={40} />
                  </ThemeIcon>
                  <Title order={4} size="lg" fw={600} c="gray.9" mb="xs">
                    Enterprise Security
                  </Title>
                  <Text size="sm" c="gray.6" mb="md">
                    Bank-level encryption and security protocols protect your educational data
                  </Text>
                  <Badge
                    size="sm"
                    color="green"
                    variant="light"
                    leftSection={<IconLock size={12} />}
                  >
                    256-bit AES Encryption
                  </Badge>
                </Box>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};
