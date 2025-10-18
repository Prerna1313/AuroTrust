'use client';
import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

interface AnimatedCounterProps {
  value: number;
  isCurrency?: boolean;
  precision?: number;
}

export default function AnimatedCounter({ 
  value, 
  isCurrency = false, 
  precision = 0 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  const formatValue = (num: number) => {
    if (isCurrency) {
      return `$${num.toLocaleString('en-US', { 
        minimumFractionDigits: precision,
        maximumFractionDigits: precision 
      })}`;
    }
    return num.toLocaleString('en-US', {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    });
  };

  return (
    <Text as="span" fontFamily="monospace">
      {formatValue(count)}
    </Text>
  );
}
