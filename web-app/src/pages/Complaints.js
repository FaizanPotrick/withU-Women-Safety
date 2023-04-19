import { Card, Text, Badge, Group, Grid, Button } from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../config";

const Complaints = () => {
  const [alertList, setAlertList] = useState([]);

  useEffect(() => {
    const Fetch_Alert = async () => {
      try {
        const { data } = await axios.get(`${SERVER_URL}/api/anonymous_alert`);
        setAlertList(data);
      } catch (error) {
        console.log(error);
      }
    };
    Fetch_Alert();
  }, []);
  return (
    <div>
      <Grid gutterXl={30}>
        {alertList.map((item, index) => {
          const { type, description } = item;

          return (
            <Grid.Col span={4} key={index}>
              <Card withBorder padding="lg" radius="md">
                <Text fz="lg" fw={500}>
                  Anonymous
                </Text>
                <Text fz="sm" c="dimmed" mt={5}>
                  Type : {type}
                </Text>
                <Text
                  c="dimmed"
                  fz="sm"
                  mt="md"
                  style={{ textTransform: "capitalize", fontWeight: "bold" }}
                >
                  Description: {description}
                </Text>
                <Group mt={15} spacing="xl" grow>
                  <Button
                    color="pink"
                    size={"xs"}
                    // variant="outline"
                  >
                    Resolve
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default Complaints;
