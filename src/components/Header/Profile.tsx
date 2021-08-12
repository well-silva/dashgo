import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wellington Silva</Text>
          <Text color="gray.300" fontSize="small">well.silvaa97@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Wellington Silva" src="https://github.com/well-silva.png" />
    </Flex>
  )
}