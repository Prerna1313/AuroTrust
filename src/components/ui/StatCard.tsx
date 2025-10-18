import { Box, Text, VStack } from '@chakra-ui/react';
import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  title: string;
  value: number;
  isCurrency?: boolean;
  precision?: number;
}

export default function StatCard({ 
  title, 
  value, 
  isCurrency = false, 
  precision = 0 
}: StatCardProps) {
  return (
    <Box 
      bg="transparent"
      p={3}
      textAlign="center"
      borderRadius="md"
      transition="all 0.3s"
      _hover={{ 
        bg: 'rgba(62, 246, 125, 0.05)',
        transform: 'translateY(-2px)'
      }}
    >
      <VStack gap={1}>
        <Text 
          fontSize="xs" 
          color="gray.400" 
          textTransform="uppercase" 
          letterSpacing="wide"
          fontWeight="medium"
          whiteSpace="nowrap"
        >
          {title}
        </Text>
        <Text 
          fontSize={["lg", "xl"]} 
          fontWeight="bold" 
          color="#3EF67D"
          lineHeight="1"
          fontFamily="monospace"
        >
          <AnimatedCounter 
            value={value} 
            isCurrency={isCurrency} 
            precision={precision}
          />
        </Text>
      </VStack>
    </Box>
  );
}
