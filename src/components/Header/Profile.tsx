import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Sergio Silva</Text>
          <Text color="gray.300" fontSize="small">
            sergio@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Sergio Silva"
        src="https://avatars.githubusercontent.com/u/48535068?s=400&u=26da97bd80ed520a96ce406b5d35b2509c28789d&v=4"
      />
    </Flex>
  )
}
