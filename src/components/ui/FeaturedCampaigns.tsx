import { Box, Heading, Grid, VStack, Text, HStack, Button } from '@chakra-ui/react';

export default function FeaturedCampaigns() {
  const campaigns = [
    {
      title: 'Clean Water for Villages',
      mission: 'Bringing safe drinking water to remote communities',
      goal: 1000,
      raised: 720,
      currency: 'APT'
    },
    {
      title: 'Education for All',
      mission: 'Building schools in underserved regions',
      goal: 2500,
      raised: 1850,
      currency: 'APT'
    },
    {
      title: 'Healthcare Access',
      mission: 'Mobile clinics for rural healthcare',
      goal: 1500,
      raised: 900,
      currency: 'APT'
    }
  ];

  return (
    <Box py={20} px={8} position="relative" zIndex={10}>
      <VStack gap={12} maxW="1200px" mx="auto">
        <Heading fontSize="4xl" color="white" textAlign="center">
          Featured Campaigns
        </Heading>
        
        <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={8}>
          {campaigns.map((campaign, index) => {
            const percentage = (campaign.raised / campaign.goal) * 100;
            return (
              <Box
                key={index}
                bg="rgba(11, 14, 18, 0.6)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(62, 246, 125, 0.2)"
                borderRadius="xl"
                p={6}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-10px)',
                  border: '1px solid rgba(62, 246, 125, 0.5)',
                  boxShadow: '0 10px 40px rgba(62, 246, 125, 0.2)'
                }}
              >
                <VStack gap={4} align="stretch">
                  <Heading fontSize="xl" color="white">{campaign.title}</Heading>
                  <Text color="gray.400" fontSize="sm">{campaign.mission}</Text>
                  
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="gray.400" fontSize="sm">
                        Goal: {campaign.goal} {campaign.currency}
                      </Text>
                      <Text color="#3EF67D" fontSize="sm" fontWeight="bold">
                        {percentage.toFixed(0)}%
                      </Text>
                    </HStack>
                    
                    {/* Custom Progress Bar */}
                    <Box 
                      w="full" 
                      h="8px" 
                      bg="rgba(255,255,255,0.1)" 
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Box 
                        w={`${percentage}%`} 
                        h="full" 
                        bg="#3EF67D"
                        borderRadius="full"
                        transition="width 0.5s"
                      />
                    </Box>
                    
                    <Text color="gray.400" fontSize="xs" mt={1}>
                      Raised: {campaign.raised} {campaign.currency}
                    </Text>
                  </Box>
                  
                  <Button 
                    bg="#3EF67D" 
                    color="black" 
                    size="sm" 
                    w="full"
                    _hover={{ bg: '#34d399' }}
                  >
                    Donate Now
                  </Button>
                </VStack>
              </Box>
            );
          })}
        </Grid>
      </VStack>
    </Box>
  );
}
