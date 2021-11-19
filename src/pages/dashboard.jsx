import React from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { Center, Container, Heading } from "@chakra-ui/layout";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <Layout>
      <Card>
        <Center maxW="md" mx="auto" mt={4}>
          <Heading className="text">Random User Fetch</Heading>
        </Center>
      </Card>
    </Layout>
  );
}
