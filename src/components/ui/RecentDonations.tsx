import { Box, Heading, VStack, HStack, Text, Grid } from '@chakra-ui/react';

export default function RecentDonations() {
  const donations = [
    { from: '0x3a2b...c4d5', to: '0x9f8e...b1a2', amount: '150.75', currency: 'APT', time: 'about 1 year ago' },
    { from: '0x1c2d...e3f4', to: '0x5a6b...c7d8', amount: '0.50', currency: 'ETH', time: 'about 1 year ago' },
    { from: '0x7e8f...a9b8', to: '0x3c4d...e5f6', amount: '25.00', currency: 'SOL', time: 'about 1 year ago' },
    { from: '0x9a8b...c7d6', to: '0x1e2f...a3b4', amount: '500.00', currency: 'APT', time: 'about 1 year ago' },
    { from: '0x5d6e...f7a8', to: '0xb1c2...d3e4', amount: '1.20', currency: 'ETH', time: 'about 1 year ago' },
  ];

  return (
    <Box
      bg="rgba(11, 14, 18, 0.6)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(62, 246, 125, 0.2)"
      borderRadius="xl"
      p={6}
      position="relative"
      zIndex={10}
    >
      <VStack gap={4} align="stretch">
        <Heading fontSize="2xl" color="white">
          Recent Donations
        </Heading>
        
        <Grid templateColumns="repeat(4, 1fr)" gap={4} pb={2} borderBottom="1px solid rgba(62, 246, 125, 0.2)">
          <Text color="gray.400" fontSize="xs" fontWeight="bold">From</Text>
          <Text color="gray.400" fontSize="xs" fontWeight="bold">To</Text>
          <Text color="gray.400" fontSize="xs" fontWeight="bold">Amount</Text>
          <Text color="gray.400" fontSize="xs" fontWeight="bold">Time</Text>
        </Grid>
        
        {donations.map((donation, index) => (
          <Grid key={index} templateColumns="repeat(4, 1fr)" gap={4} py={2} borderBottom="1px solid rgba(255,255,255,0.05)">
            <HStack>
              <Text color="gray.300" fontSize="xs" fontFamily="monospace">{donation.from}</Text>
              <Text color="#3EF67D">→</Text>
            </HStack>
            <Text color="gray.300" fontSize="xs" fontFamily="monospace">{donation.to}</Text>
            <VStack align="start" gap={0}>
              <Text color="white" fontWeight="bold" fontSize="sm">{donation.amount}</Text>
              <Text color="#3EF67D" fontSize="xs">{donation.currency}</Text>
            </VStack>
            <Text color="gray.500" fontSize="xs">{donation.time}</Text>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
}
