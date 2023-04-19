import { Card, Text, Badge, Group, Grid, Button } from "@mantine/core";
import React, { useState, useEffect } from "react";

const Complaints = () => {
  const [alertList, setAlertList] = useState([
    {
      _id: "60f1b1b0b0b5a40015b0b0b0",
      name: "John Doe",
      Type_of_complaint: "Theft",
      description: "Theft of my phone",
    },

    {
      _id: "60f1b1b0b0b5a40015b0b0b0",
      name: "John Doe",
      Type_of_complaint: "Theft",
      description: "Theft of my phone",
    },
  ]);

  return (
    <div>
      <Grid gutterXl={30}>
        {alertList.map((item, index) => {
          const { Type_of_complaint, description } = item;

          return (
            <Grid.Col span={4} key={index}>
              <Card withBorder padding="lg" radius="md">
                <Text fz="lg" fw={500}>
                  Anonymous
                </Text>
                <Text fz="sm" c="dimmed" mt={5}>
                  Type : {Type_of_complaint}
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
                    size={"xs"}
                    variant="outline"
                    // onClick={() => GetDirection(item.user._id)}
                  >
                    Resolved
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
