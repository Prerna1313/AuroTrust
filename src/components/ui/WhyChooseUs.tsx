import { Box, Heading, Grid, VStack, Text } from '@chakra-ui/react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: '🔒',
      title: 'On-Chain Escrow',
      description: 'Donations locked until verified.'
    },
    {
      icon: '🌐',
      title: 'Cross-Chain Support',
      description: 'Works across Aptos, Ethereum, and more.'
    },
    {
      icon: '📊',
      title: 'Full Transparency',
      description: 'Public dashboard for all fund flows.'
    },
    {
      icon: '🤝',
      title: 'Verified NGOs',
      description: 'Vetted by DAO and oracles.'
    }
  ];

  return (
    <Box py={20} px={8} position="relative" zIndex={10}>
      <VStack gap={12} maxW="1200px" mx="auto">
        <Heading fontSize="4xl" color="white" textAlign="center">
          Why Choose Us
        </Heading>
        
        <Grid templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap={6}>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="rgba(11, 14, 18, 0.6)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(62, 246, 125, 0.2)"
              borderRadius="xl"
              p={6}
              textAlign="center"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-10px)',
                border: '1px solid rgba(62, 246, 125, 0.5)',
                boxShadow: '0 10px 40px rgba(62, 246, 125, 0.2)'
              }}
            >
              <VStack gap={3}>
                <Text fontSize="4xl">{feature.icon}</Text>
                <Heading fontSize="lg" color="#3EF67D">{feature.title}</Heading>
                <Text color="gray.400" fontSize="sm">{feature.description}</Text>
              </VStack>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
}
