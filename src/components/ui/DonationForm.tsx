'use client';
import { Box, VStack, Heading, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function DonationForm() {
  const [amount, setAmount] = useState('100');
  const [address, setAddress] = useState('');
  const [chain, setChain] = useState('APT');

  return (
    <Box
      bg="rgba(11, 14, 18, 0.6)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(62, 246, 125, 0.2)"
      borderRadius="xl"
      p={8}
      position="relative"
      zIndex={10}
    >
      <VStack gap={6} align="stretch">
        <VStack gap={2} align="start">
          <Heading fontSize="2xl" color="white">
            Make a Donation
          </Heading>
          <Text color="gray.400" fontSize="sm">
            Support projects across chains.
          </Text>
        </VStack>

        <VStack gap={4} align="stretch">
          <Box>
            <Text color="gray.300" fontSize="sm" mb={2}>Recipient Address</Text>
            <Input
              placeholder="0x..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              bg="rgba(0,0,0,0.3)"
              border="1px solid rgba(62, 246, 125, 0.2)"
              color="white"
              _focus={{ border: '1px solid #3EF67D' }}
            />
          </Box>

          <Box display="grid" gridTemplateColumns="2fr 1fr" gap={4}>
            <Box>
              <Text color="gray.300" fontSize="sm" mb={2}>Amount</Text>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                bg="rgba(0,0,0,0.3)"
                border="1px solid rgba(62, 246, 125, 0.2)"
                color="white"
                _focus={{ border: '1px solid #3EF67D' }}
              />
            </Box>
            <Box>
              <Text color="gray.300" fontSize="sm" mb={2}>Chain</Text>
              <select
                value={chain}
                onChange={(e) => setChain(e.target.value)}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(62, 246, 125, 0.2)',
                  color: 'white',
                  padding: '8px',
                  borderRadius: '6px',
                  width: '100%',
                  outline: 'none',
                }}
              >
                <option value="APT" style={{ background: '#0a0d10' }}>APT</option>
                <option value="ETH" style={{ background: '#0a0d10' }}>ETH</option>
                <option value="SOL" style={{ background: '#0a0d10' }}>SOL</option>
              </select>
            </Box>
          </Box>

          <Button
            bg="#3EF67D"
            color="black"
            fontWeight="bold"
            size="lg"
            w="full"
            _hover={{ bg: '#34d399' }}
          >
            Send Donation
          </Button>
        </VStack>

        <Box borderTop="1px solid rgba(62, 246, 125, 0.2)" pt={6}>
          <VStack gap={2} align="start">
            <Heading fontSize="xl" color="white">
              AI Transparency Index
            </Heading>
            <Text color="gray.400" fontSize="sm">
              Assess a recipient's on-chain history.
            </Text>
            <Input
              placeholder="0x..."
              bg="rgba(0,0,0,0.3)"
              border="1px solid rgba(62, 246, 125, 0.2)"
              color="white"
              mt={2}
              _focus={{ border: '1px solid #3EF67D' }}
            />
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

