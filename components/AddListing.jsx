


import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import { addListing } from "../api/listing"; // Import the modified addListing function
import useAuth from "../hooks/useAuth";

const AddListing = () => {
  const { user } = useAuth();
  const [name, setName] = React.useState("");
  const [Place, setPlace] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const toast = useToast();

  const handleListingCreate = async () => {
    setIsLoading(true);
    const listing = {
      name,
      Place,
      description,
      date,
      time,
      phoneNumber,
      creatorId: user.uid, // Include the user ID in the listing data
    };
    await addListing(listing);
    setIsLoading(false);

    setName("");
    setPlace("");
    setdescription("");
    setDate("");
    setTime("");
    setPhoneNumber("");

    toast({ title: "Listing created successfully", status: "success" });
  };

  return (
    <Box w="40%" margin={"0 auto"} display="block" mt={5}>
      <Stack direction="column">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Place"
          value={Place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <Input
          placeholder="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        <Input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Button
          onClick={() => handleListingCreate()}
          disabled={
            name.length < 1 ||
            Place.length < 1 ||
            description.length < 1 ||
            date.length < 1 ||
            time.length < 1 ||
            phoneNumber.length < 1 ||
            isLoading
          }
          variantColor="teal"
          variant="solid"
        >
          Add
        </Button>
      </Stack>
    </Box>
  ); 
};

export default AddListing;