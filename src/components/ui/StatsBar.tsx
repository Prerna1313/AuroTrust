'use client';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import AnimatedCounter from './AnimatedCounter';

export default function StatsBar() {
  const stats = [
    { title: 'Total Staked APT', value: 5000000, isCurrency: false, precision: 0 },
    { title: 'Cross-Chain Txns', value: 1023, isCurrency: false, precision: 0 },
    { title: 'Total Users', value: 1500, isCurrency: false, precision: 0 },
    { title: 'Avg Donation', value: 837.56, isCurrency: true, precision: 2 },
    { title: 'Verified Causes', value: 25, isCurrency: false, precision: 0 },
    { title: 'Total Donated', value: 1256342.50, isCurrency: true, precision: 2 },
  ];

  const duplicatedStats = [...stats, ...stats];

  return (
    <Box 
      mt="70px"
      py={8}
      borderBottom="1px solid rgba(62, 246, 125, 0.1)"
      bg="rgba(11, 14, 18, 0.35)"
      backdropFilter="blur(10px)"
      position="relative"
      zIndex={10}
      overflow="hidden"
      width="100%"
    >
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .sliding-stats {
            animation: slide 28s linear infinite;
          }
          .sliding-stats:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <Flex
        className="sliding-stats"
        gap={12}
        px={8}
      >
        {duplicatedStats.map((stat, index) => (
          <VStack 
            key={index} 
            minW="200px" 
            flexShrink={0}
            gap={2} 
            align="flex-start"
          >
            <Text 
              fontSize="xs" 
              color="gray.400" 
              textTransform="uppercase" 
              letterSpacing="wide"
              fontWeight="medium"
              whiteSpace="nowrap"
            >
              {stat.title}
            </Text>
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              color="#3EF67D"
              lineHeight="1"
              fontFamily="monospace"
            >
              <AnimatedCounter 
                value={stat.value} 
                isCurrency={stat.isCurrency} 
                precision={stat.precision}
              />
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
}
