import { Card } from "./Card";
import { Heading, Box, Text, Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import DividerWithText from "./DividerWithText";
import "./userCard.css";

const UserCard = ({
  picture,
  title,
  first,
  last,
  email,
  phone,
  number,
  name,
  city,
  country,
}) => {
  return (
    <Card maxW="md" mx="auto" mt={4}>
      <Box p={5} shadow="md" borderWidth="1px" className="cardtext">
        <Center>
          <img className="image" src={picture} alt="pic" />
        </Center>
        <DividerWithText my={6}></DividerWithText>
        <Center>
          <Heading fontSize="xl">
            {title}. {first} {last}
          </Heading>
        </Center>

        <Text mt={4}>
          <Center>
            <span className="font-bold">Email</span>
          </Center>
          <Center>{email}</Center>
        </Text>
        <Text mt={4}>
          <Center>
            <span className="font-bold">Phone</span>
          </Center>
          <Center> {phone}</Center>
        </Text>
        <Text mt={4}>
          <Center>
            <span className="font-bold">Address:</span>
          </Center>
          <Center>
            {number}, {name}
          </Center>
          <Center>
            {" "}
            {city}, {country}
          </Center>
        </Text>

        <DividerWithText my={6}></DividerWithText>
        <Center>
          <Button type="submit" colorScheme="yellow" size="lg" fontSize="md">
            Save
          </Button>
        </Center>
      </Box>
    </Card>
  );
};

export default UserCard;
