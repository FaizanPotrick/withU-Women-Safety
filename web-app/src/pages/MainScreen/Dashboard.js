import React from "react";
import { Grid } from "@mantine/core";
import Sidebar from "../../components/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import AllSOS from "../AllSos";
import Complaints from "../Complaints";
import Profile from "./Profile";

const Dashboard = ({ setIsLogin }) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={3}>
          <Sidebar setIsLogin={setIsLogin} />
        </Grid.Col>
        <Grid.Col span={9} p={40}>
          <Routes>
            <Route path="/" element={<Navigate to="/sos" />} />
            <Route path="/register" element={<Navigate to="/sos" />} />
            <Route path="/login" element={<Navigate to="/sos" />} />
            <Route path="/sos" element={<AllSOS />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/complaints" element={<Complaints />} />
          </Routes>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Dashboard;
