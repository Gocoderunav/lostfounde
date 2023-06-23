



import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  useToast,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import {
  collection,
  onSnapshot,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { FaTrash } from "react-icons/fa";

const MyListingList = () => {
  const [loading, setLoading] = useState(true);

  const [listings, setListings] = React.useState([]);

  const [editingListing, setEditingListing] = useState(null);

  const { user } = useAuth();
  const toast = useToast();

  const refreshData = () => {
    if (!user) {
      setListings([]);
      return;
    }
    const q = query(collection(db, "users", user.uid, "listings"));

    onSnapshot(q, (querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setListings(arr);
      setLoading(false); // Set loading state to false after data is fetched
    });
  };

  useEffect(() => {
    refreshData();
  }, [user]);

  const handleEditListing = (listing) => {
    setEditingListing(listing);
  };

  const handleCloseModal = () => {
    setEditingListing(null);
  };

  const handleListingDelete = async (id) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      const listingToDelete = listings.find((listing) => listing.id === id);
      console.log(listingToDelete.creator, " ans ", user.uid);
      if (listingToDelete && listingToDelete.creator === user.uid) {
        try {
          const listingRef = doc(db, "listings", id);
          await deleteDoc(listingRef);
          const userListingRef = doc(db, "users", user.uid, "listings", id);
          await deleteDoc(userListingRef);
          toast({ title: "Listing deleted successfully", status: "success" });
        } catch (error) {
          console.log(error);
          toast({
            title: "An error occurred while deleting the listing",
            status: "error",
          });
        }
      } else {
        toast({
          title: "You can only delete your own listings",
          status: "error",
        });
      }
    }
  };

  const handleSaveChanges = async (id) => {
    const listingToUpdate = listings.find((listing) => listing.id === id);

    if (listingToUpdate && listingToUpdate.creator === user.uid) {
      try {
        const listingRef = doc(db, "listings", id);
        await updateDoc(listingRef, editingListing);

        const userListingRef = doc(db, "users", user.uid, "listings", id);
        await updateDoc(userListingRef, editingListing);

        toast({ title: "Listing updated successfully", status: "success" });
        setEditingListing(null);
      } catch (error) {
        console.log(error);
        toast({
          title: "An error occurred while updating the listing",
          status: "error",
        });
      }
    } else {
      toast({
        title: "You can only update your own listings",
        status: "error",
      });
    }
  };

  return (
    <Box mt={5}>
      {loading ? ( // Show skeletons when loading is true
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <Box
              key={index}
              p={4}
              boxShadow="2xl"
              shadow="dark-lg"
              transition="0.2s"
              _hover={{ boxShadow: "sm" }}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <Skeleton height="20px" mb={2} />
                <Skeleton height="16px" mb={2} />
                <Skeleton height="12px" />
                <Skeleton height="16px" mt={2} />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Skeleton height="24px" width="24px" />
                <Skeleton height="24px" width="60px" mt={2} />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        // Render actual listings when loading is false
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {listings.map((listing) => (
            <Box
              key={listing.id}
              p={4}
              boxShadow="2xl"
              shadow="dark-lg"
              transition="0.2s"
              _hover={{ boxShadow: "sm" }}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <Text fontSize="2xl" fontWeight="bold" mb={2}>
                  {listing.Place} 
                </Text>
                <Text> {listing.description}</Text>
                <Text fontSize="lg">
                  {listing.date.split("-")[2]}{" "}
                  {new Date(listing.date).toLocaleString("default", {
                    month: "long",
                  })}
                  {" - "}({listing.time})
                </Text>
                <Heading as="h3" fontSize="xl" my={2}>
                  {listing.name}
                </Heading>
                <Text fontSize="lg" mt={2}>
                  Phone: {listing.phoneNumber}
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => handleListingDelete(listing.id)}
                >
                  <FaTrash />
                </Button>
                <Button
                  variant="solid"
                  colorScheme="teal"
                  onClick={() => handleEditListing(listing)}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}

      <Modal isOpen={editingListing !== null} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalBody>
            <Stack spacing={4}>
              <Input
                placeholder="Name"
                value={editingListing ? editingListing.name : ""}
                onChange={(e) =>
                  setEditingListing((prevListing) => ({
                    ...prevListing,
                    name: e.target.value,
                  }))
                }
              />

              <Input
                placeholder="Place"
                value={editingListing ? editingListing.Place : ""}
                onChange={(e) =>
                  setEditingListing((prevListing) => ({
                    ...prevListing,
                    startPlace: e.target.value,
                  }))
                }
              />

              <Input
                placeholder="description"
                value={editingListing ? editingListing.description : ""}
                onChange={(e) =>
                  setEditingListing((prevListing) => ({
                    ...prevListing,
                    description: e.target.value,
                  }))
                }
              />

              <Input
                type="date"
                placeholder="Date"
                value={editingListing ? editingListing.date : ""}
                onChange={(e) =>
                  setEditingListing((prevListing) => ({
                    ...prevListing,
                    date: e.target.value,
                  }))
                }
              />

              <Input
                type="time"
                placeholder="Time"
                value={editingListing ? editingListing.time : ""}
                onChange={(e) =>
                  setEditingListing((prevListing) => ({
                    ...prevListing,
                    time: e.target.value,
                  }))
                }
              />

              <Input
                placeholder="Phone Number"
                value={editingListing ? editingListing.phoneNumber : ""}
                onChange={(e) =>
                  setEditingListing((prevListing) => ({
                    ...prevListing,
                    phoneNumber: e.target.value,
                  }))
                }
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleSaveChanges(editingListing.id)}
            >
              Save Changes
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MyListingList;