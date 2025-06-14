import { Container, Title, Text, Paper, Box, Badge, ThemeIcon } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const universities = [
  {
    name: "Stanford University",
    logo: "STANFORD",
    color: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
  },
  {
    name: "Harvard University", 
    logo: "HARVARD",
    color: "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)"
  },
  {
    name: "MIT",
    logo: "MIT",
    color: "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
  },
  {
    name: "UC Berkeley",
    logo: "UC BERKELEY",
    color: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
  },
  {
    name: "Yale University",
    logo: "YALE",
    color: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)"
  },
  {
    name: "Princeton University",
    logo: "PRINCETON",
    color: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
  },
  {
    name: "University of Chicago",
    logo: "U CHICAGO",
    color: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
  },
  {
    name: "Columbia University",
    logo: "COLUMBIA",
    color: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)"
  }
];

export const Testimonials = () => {
  return (
    <Box py={80} bg="gray.0">
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Title order={2} size="2.25rem" fw={700} c="gray.9" mb="md">
            Trusted by Leading Universities
          </Title>
          <Text size="xl" c="gray.6" maw={768} mx="auto">
            Join top higher education institutions using SupaClass to enhance teaching effectiveness
          </Text>
        </Box>
        
        <Box maw={1280} mx="auto" style={{ position: 'relative' }}>
          <Carousel
            withIndicators={false}
            withControls={true}
            slideSize="25%"
            slideGap="md"
            align="start"
            slidesToScroll={1}
            loop
            styles={{
              control: {
                display: 'none',
                '@media (min-width: 640px)': {
                  display: 'flex'
                }
              }
            }}
          >
            {universities.map((university, index) => (
              <Carousel.Slide key={index}>
                <Paper
                  p="xl"
                  radius="xl"
                  shadow="sm"
                  h={128}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--mantine-color-gray-2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <ThemeIcon
                    size={64}
                    radius="md"
                    style={{
                      background: university.color,
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      lineHeight: 1.2
                    }}
                  >
                    {university.logo}
                  </ThemeIcon>
                </Paper>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
        
        <Box ta="center" mt={48}>
          <Badge
            size="lg"
            variant="light"
            color="indigo"
            style={{
              background: 'linear-gradient(135deg, #eef2ff 0%, #f3e8ff 100%)',
              border: '1px solid var(--mantine-color-indigo-2)',
              padding: '0.75rem 1.5rem'
            }}
          >
            <Text fw={600} c="indigo.8">Used by 500+ institutions worldwide</Text>
          </Badge>
        </Box>
      </Container>
    </Box>
  );
};
