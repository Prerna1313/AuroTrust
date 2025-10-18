import { Box, VStack, Heading, Text, HStack, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <Box py={20} px={8} position="relative" zIndex={10}>
      <VStack 
        gap={6} 
        maxW="800px" 
        mx="auto" 
        textAlign="center"
        bg="rgba(11, 14, 18, 0.6)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(62, 246, 125, 0.3)"
        borderRadius="2xl"
        p={12}
      >
        <Heading fontSize="4xl" color="white">
          Join the Movement
        </Heading>
        
        <Text fontSize="2xl" color="#3EF67D" fontStyle="italic">
          "Every transaction tells a story of trust."
        </Text>
        
        <Text color="gray.400" fontSize="lg">
          Start donating, tracking, and making transparency real.
        </Text>
        
        <HStack gap={4} pt={4}>
          {/* DONATE NOW BUTTON - Links to /donate */}
          <Link href="/donate">
            <Button 
              bg="#3EF67D" 
              color="black" 
              size="lg" 
              px={8}
              fontWeight="bold"
              _hover={{ 
                bg: '#34d399',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 40px rgba(62, 246, 125, 0.5)'
              }}
            >
              Donate Now
            </Button>
          </Link>

          {/* TRACK DONATION BUTTON - Links to /track */}
          <Link href="/track">
            <Button 
              bg="rgba(59, 130, 246, 0.1)" 
              border="2px solid #3b82f6"
              color="#3b82f6" 
              size="lg" 
              px={8}
              fontWeight="bold"
              _hover={{ 
                bg: 'rgba(59, 130, 246, 0.2)',
                transform: 'translateY(-2px)'
              }}
            >
              Track a Donation
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
