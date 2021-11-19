import { React, useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import UserCard from "../components/userCard";
import { Center, Heading, SimpleGrid, Box, Stack } from "@chakra-ui/layout";
import DividerWithText from "../components/DividerWithText";

const baseUrl = `https://randomuser.me/api/?results=1000`;

export default function People() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await fetch(baseUrl)
      .then((res) => res.json())
      .then((user) => {
        setUsers(user.results);
      });

    console.log(users[0]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <Heading>Users</Heading>

      <Center>
        {users.map((user) => {
          const {
            name: { title, first, last },
            email,
            location: {
              street: { number, name },
              city,
              country,
            },
            phone,
            picture: { large },
          } = user;
          return (
            <div key={user.login.uuid} className="container">
              <Stack spacing={80}>
                <UserCard
                  picture={large}
                  title={title}
                  first={first}
                  last={last}
                  email={email}
                  phone={phone}
                  number={number}
                  name={name}
                  city={city}
                  country={country}
                ></UserCard>
              </Stack>
              <br></br>
            </div>
          );
        })}
      </Center>
    </Layout>
  );
}
