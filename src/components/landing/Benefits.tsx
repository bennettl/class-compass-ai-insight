
import { Container, Title, Text, Tabs, Grid, Button, Paper, Box, Group, List, ThemeIcon } from '@mantine/core';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const benefitsByRole = {
  teachers: [
    "Save 5+ hours per week on grading and feedback",
    "Make data-driven instructional decisions",
    "Create differentiated learning experiences effortlessly",
    "Identify struggling students before they fall behind",
    "Enhance feedback quality and consistency",
    "Focus more time on actual teaching"
  ],
  assistants: [
    "Streamline grading workflows for large enrollment courses",
    "Maintain feedback consistency across multiple sections",
    "Provide quality support without extensive training",
    "Scale personalized attention in high-volume courses",
    "Generate detailed progress reports for supervisors",
    "Reduce repetitive administrative tasks"
  ],
  students: [
    "Receive faster, more detailed feedback on assignments",
    "Get personalized learning recommendations",
    "Track progress with clear, actionable insights",
    "Access 24/7 AI-powered study assistance",
    "Understand exactly where to focus improvement efforts",
    "Experience more engaging, adaptive learning"
  ],
  admins: [
    "Monitor teaching effectiveness across departments",
    "Ensure consistent grading standards institution-wide",
    "Generate comprehensive analytics and reports",
    "Reduce faculty workload and improve satisfaction",
    "Demonstrate measurable learning outcomes",
    "Scale quality education without proportional cost increases"
  ]
};

const roleDescriptions = {
  teachers: "Join thousands of educators who have transformed their teaching practice with AI-powered insights and sophisticated feedback capabilities.",
  assistants: "Empower your teaching assistants with tools that ensure consistent, high-quality support across all course sections.",
  students: "Enhance the learning experience with personalized feedback and insights that help students succeed.",
  admins: "Drive institutional excellence with comprehensive analytics and tools that improve outcomes at scale."
};

export const Benefits = () => {
  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)'
      }}
      py={80}
    >
      <Container size="xl">
        <Box ta="center" mb={48}>
          <Title order={2} size="2.25rem" fw={700} c="gray.9" mb="lg">
            Why Educational Professionals Choose SupaClass
          </Title>
        </Box>
        
        <Tabs defaultValue="teachers" variant="pills">
          <Tabs.List
            grow
            style={{
              backgroundColor: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              marginBottom: '3rem',
              padding: '0.25rem',
              borderRadius: '0.75rem'
            }}
          >
            <Tabs.Tab value="teachers" fw={500} size="sm">Teachers</Tabs.Tab>
            <Tabs.Tab value="assistants" fw={500} size="sm">Teaching Assistants</Tabs.Tab>
            <Tabs.Tab value="students" fw={500} size="sm">Students</Tabs.Tab>
            <Tabs.Tab value="admins" fw={500} size="sm">Administrators</Tabs.Tab>
          </Tabs.List>
          
          {Object.entries(benefitsByRole).map(([role, benefits]) => (
            <Tabs.Panel key={role} value={role}>
              <Grid>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                  <Text size="xl" c="gray.6" mb="xl">
                    {roleDescriptions[role as keyof typeof roleDescriptions]}
                  </Text>
                  
                  <List
                    spacing="md"
                    mb="xl"
                    icon={
                      <ThemeIcon color="green" size={24} radius="xl">
                        <IconCheck size={16} />
                      </ThemeIcon>
                    }
                  >
                    {benefits.map((benefit, index) => (
                      <List.Item key={index}>
                        <Text c="gray.7" fw={500}>{benefit}</Text>
                      </List.Item>
                    ))}
                  </List>
                  
                  <Button
                    size="lg"
                    color="indigo"
                    rightSection={<IconArrowRight size={20} />}
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      padding: '1rem 2rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    Start Your Free Trial
                  </Button>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, lg: 6 }}>
                  <Box style={{ position: 'relative' }}>
                    <Paper
                      shadow="xl"
                      p="xl"
                      radius="xl"
                      style={{
                        border: '1px solid var(--mantine-color-gray-2)'
                      }}
                    >
                      <Box pb="md" style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
                        <Title order={3} size="lg" fw={600} c="gray.9" mb="xs">
                          {role === 'teachers' && 'Student: Emma Johnson'}
                          {role === 'assistants' && 'Section 3A - Chemistry Lab'}
                          {role === 'students' && 'Your Progress Dashboard'}
                          {role === 'admins' && 'Department Analytics'}
                        </Title>
                        <Text size="sm" c="gray.6">
                          {role === 'teachers' && 'Math Assessment - Fractions'}
                          {role === 'assistants' && 'Weekly Grading Summary'}
                          {role === 'students' && 'Organic Chemistry Course'}
                          {role === 'admins' && 'Q3 Performance Overview'}
                        </Text>
                      </Box>
                      
                      <Box mt="md">
                        {role === 'teachers' && (
                          <>
                            <Paper
                              p="md"
                              radius="md"
                              mb="md"
                              style={{
                                background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
                                border: '1px solid #fbbf24'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">AI Insight</Title>
                              <Text size="sm" c="gray.7">
                                Emma consistently struggles with mixed numbers. Consider using visual fraction models 
                                and connecting to real-world examples like cooking measurements.
                              </Text>
                            </Paper>
                            
                            <Paper
                              p="md"
                              radius="md"
                              style={{
                                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                                border: '1px solid #10b981'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Suggested Feedback</Title>
                              <Text size="sm" c="gray.7">
                                "Great work on equivalent fractions! Let's practice mixed numbers using pizza slices 
                                to make it more concrete. Try the interactive fraction tool I've assigned."
                              </Text>
                            </Paper>
                          </>
                        )}
                        
                        {role === 'assistants' && (
                          <>
                            <Paper
                              p="md"
                              radius="md"
                              mb="md"
                              style={{
                                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                                border: '1px solid #3b82f6'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Grading Progress</Title>
                              <Text size="sm" c="gray.7">
                                45/50 lab reports graded automatically. 5 flagged for manual review. 
                                Average completion time: 2.3 minutes per report.
                              </Text>
                            </Paper>
                            
                            <Paper
                              p="md"
                              radius="md"
                              style={{
                                background: 'linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)',
                                border: '1px solid #8b5cf6'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Consistency Check</Title>
                              <Text size="sm" c="gray.7">
                                Your grading aligns 94% with course standards. 
                                3 students need additional support in titration calculations.
                              </Text>
                            </Paper>
                          </>
                        )}
                        
                        {role === 'students' && (
                          <>
                            <Paper
                              p="md"
                              radius="md"
                              mb="md"
                              style={{
                                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                                border: '1px solid #10b981'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Your Strengths</Title>
                              <Text size="sm" c="gray.7">
                                Excellent grasp of molecular structure! You're in the top 15% 
                                for reaction mechanism problems.
                              </Text>
                            </Paper>
                            
                            <Paper
                              p="md"
                              radius="md"
                              style={{
                                background: 'linear-gradient(135deg, #fed7aa 0%, #fca5a5 100%)',
                                border: '1px solid #f59e0b'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Focus Areas</Title>
                              <Text size="sm" c="gray.7">
                                Practice stereochemistry concepts. Try the 3D molecular viewer 
                                and complete practice set #7 by Friday.
                              </Text>
                            </Paper>
                          </>
                        )}
                        
                        {role === 'admins' && (
                          <>
                            <Paper
                              p="md"
                              radius="md"
                              mb="md"
                              style={{
                                background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                                border: '1px solid #6366f1'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Department Metrics</Title>
                              <Text size="sm" c="gray.7">
                                Student satisfaction up 23%. Average grading time reduced by 40%. 
                                Learning outcomes improved across 8 of 10 measured areas.
                              </Text>
                            </Paper>
                            
                            <Paper
                              p="md"
                              radius="md"
                              style={{
                                background: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
                                border: '1px solid #14b8a6'
                              }}
                            >
                              <Title order={4} fw={500} c="gray.9" mb="xs">Cost Efficiency</Title>
                              <Text size="sm" c="gray.7">
                                $47K saved in TA hours this semester. ROI of 340% achieved 
                                within first 6 months of implementation.
                              </Text>
                            </Paper>
                          </>
                        )}
                      </Box>
                    </Paper>
                    
                    {/* Decorative elements */}
                    <Box
                      style={{
                        position: 'absolute',
                        zIndex: -1,
                        top: '-1rem',
                        right: '-1rem',
                        width: '18rem',
                        height: '18rem',
                        background: 'linear-gradient(135deg, #e0e7ff 0%, #e9d5ff 100%)',
                        borderRadius: '50%',
                        opacity: 0.5,
                        filter: 'blur(3rem)'
                      }}
                    />
                  </Box>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};
