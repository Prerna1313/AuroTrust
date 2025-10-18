import { VStack, Heading, HStack, Button, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box 
      position="relative"
      zIndex={10}
      py={10}
    >
      <VStack 
        gap={4}
        textAlign="center" 
        maxW="1000px"
        mx="auto"
        px={8}
      >
        <VStack gap={2}>
          <Heading 
            fontSize={["4xl", "5xl", "6xl"]} 
            fontWeight="bold" 
            color="#3EF67D"
            lineHeight="1.2"
            textShadow="0 0 80px rgba(62, 246, 125, 0.3)"
          >
            Donate Cross-Chain.
          </Heading>
          <Heading 
            fontSize={["4xl", "5xl", "6xl"]} 
            fontWeight="bold" 
            color="white"
            lineHeight="1.2"
          >
            Track Your Impact.
          </Heading>
        </VStack>

        <Text fontSize="lg" color="gray.400" maxW="700px" mt={2}>
          Track how your funds move, get used, and make an impact — all recorded on-chain.
        </Text>

        <Text fontSize="sm" color="gray.500" maxW="600px">
          Built on Aptos with Move smart contracts for escrow, cross-chain support, and complete transparency.
        </Text>

        <HStack gap={4} pt={4}>
          {/* DONATE NOW BUTTON - Links to /donate */}
          <Link href="/donate">
            <Button 
              size="lg" 
              bg="#3EF67D" 
              color="black" 
              fontWeight="bold" 
              px={8}
              py={6}
              fontSize="md"
              borderRadius="lg"
              _hover={{ 
                bg: '#34d399', 
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 40px rgba(62, 246, 125, 0.5)'
              }}
              transition="all 0.3s"
            >
              Donate Now
            </Button>
          </Link>

          {/* TRACK DONATION BUTTON - Links to /track */}
          <Link href="/track">
            <Button 
              size="lg" 
              bg="rgba(59, 130, 246, 0.1)" 
              border="2px solid #3b82f6" 
              color="#3b82f6"
              fontWeight="bold" 
              px={8}
              py={6}
              fontSize="md"
              borderRadius="lg"
              _hover={{ 
                bg: 'rgba(59, 130, 246, 0.2)', 
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
              }}
              transition="all 0.3s"
            >
              Track My Donation
            </Button>
          </Link>

          {/* VIEW NGOs BUTTON - Links to /ngo-portal */}
          <Link href="/ngo-portal">
            <Button 
              size="lg" 
              bg="transparent" 
              border="2px solid gray" 
              color="white"
              fontWeight="bold" 
              px={8}
              py={6}
              fontSize="md"
              borderRadius="lg"
              _hover={{ 
                bg: 'rgba(255, 255, 255, 0.1)', 
                transform: 'translateY(-3px)'
              }}
              transition="all 0.3s"
            >
              View Verified NGOs
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
