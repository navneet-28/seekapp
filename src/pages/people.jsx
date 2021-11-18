import { React, useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
export default function People() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let data;
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
      } catch (error) {
        console.log(error);
        data = [];
      }
      setUsers(data);
    })();
  });
  return <Layout></Layout>;
}
