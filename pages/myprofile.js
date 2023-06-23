import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import Profile from "../components/Profile";
import MyListingList from "../components/MyListingList";

function MyProfile() {
  return (
    <>
      <Profile />
      <Container maxW="7xl">
        <MyListingList />
      </Container>
    </>
  );
}

export default MyProfile;
