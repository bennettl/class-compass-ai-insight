
import { Container, Title, Text, Paper, Button, List, ThemeIcon, Grid, Box, Badge } from '@mantine/core';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out SupaClass",
    features: [
      "5 AI feedback generations per month",
      "Basic analytics dashboard",
      "Email support",
      "Up to 30 students"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for individual teachers",
    features: [
      "Unlimited AI feedback generation",
      "Advanced analytics & insights",
      "Differentiated strategy suggestions",
      "Priority support",
      "Up to 150 students",
      "Custom rubric creation",
      "Export capabilities"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "School",
    price: "$99",
    period: "/month",
    description: "Best for schools and districts",
    features: [
      "Everything in Professional",
      "Unlimited teachers",
      "Admin dashboard",
      "Professional development resources",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced reporting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <Box
      py={80}
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #eef2ff 100%)'
      }}
    >
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Title order={2} size="2.25rem" fw={700} c="gray.9" mb="md">
            Choose Your Plan
          </Title>
          <Text size="xl" c="gray.6" maw={768} mx="auto">
            Start with our free plan and upgrade as you grow. All plans include our core AI feedback features.
          </Text>
        </Box>
        
        <Grid justify="center" maw={1280} mx="auto">
          {plans.map((plan, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Paper
                p="xl"
                radius="xl"
                shadow="lg"
                style={{
                  position: 'relative',
                  border: plan.popular ? '2px solid var(--mantine-color-indigo-5)' : '2px solid var(--mantine-color-gray-2)',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {plan.popular && (
                  <Badge
                    color="indigo"
                    size="lg"
                    style={{
                      position: 'absolute',
                      top: '-1rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '0.5rem 1.5rem'
                    }}
                  >
                    Most Popular
                  </Badge>
                )}
                
                <Box ta="center" mb="xl">
                  <Title order={3} size="1.5rem" fw={700} c="gray.9" mb="xs">{plan.name}</Title>
                  <Text c="gray.6" mb="md">{plan.description}</Text>
                  <Box style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    <Text size="2.5rem" fw={700} c="gray.9">{plan.price}</Text>
                    {plan.period && <Text c="gray.6" ml="xs">{plan.period}</Text>}
                  </Box>
                </Box>
                
                <List
                  spacing="md"
                  mb="xl"
                  style={{ flex: 1 }}
                  icon={
                    <ThemeIcon color="green" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {plan.features.map((feature, featureIndex) => (
                    <List.Item key={featureIndex}>
                      <Text c="gray.7">{feature}</Text>
                    </List.Item>
                  ))}
                </List>
                
                <Button
                  fullWidth
                  size="lg"
                  color={plan.popular ? "indigo" : "gray"}
                  variant={plan.popular ? "filled" : "light"}
                  rightSection={<IconArrowRight size={20} />}
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    padding: '0.75rem 0',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s',
                    ...(plan.popular && {
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    })
                  }}
                >
                  {plan.cta}
                </Button>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
        
        <Box ta="center" mt={48}>
          <Text c="gray.6">
            Questions about pricing?{' '}
            <Text
              component="a"
              href="#"
              c="indigo.6"
              style={{ textDecoration: 'none', fontWeight: 600 }}
            >
              Contact our sales team
            </Text>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
