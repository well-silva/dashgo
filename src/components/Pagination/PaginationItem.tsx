import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        w="4"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  }
  
  return (
    <Button
      size="sm"
      w="4"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}