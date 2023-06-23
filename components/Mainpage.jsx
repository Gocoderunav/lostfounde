// import {
//   Badge,
//   Box,
//   Button,
//   Heading,
//   SimpleGrid,
//   Text,
//   useClipboard,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import useAuth from "../hooks/useAuth";
// import {
//   collection,
//   onSnapshot,
//   query,
//   deleteDoc,
//   doc,
//   where,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { FaTrash } from "react-icons/fa";

// const ListingList = () => {
//   const [loading, setLoading] = useState(true);
//   const [listings, setListings] = useState([]);
//   const [searchDate, setSearchDate] = useState("");
//   const { user } = useAuth();
//   const { isLoggedIn } = useAuth();
//   const toast = useToast();

//   const refreshData = () => {
//     if (!user) {
//       setListings([]);
//       return;
//     }
//     let q = query(collection(db, "listings"));

//     if (searchDate) {
//       q = query(collection(db, "listings"), where("date", "==", searchDate));
//     }

//     onSnapshot(q, (querySnapshot) => {
//       let arr = [];
//       querySnapshot.forEach((doc) => {
//         arr.push({ id: doc.id, ...doc.data() });
//       });
//       setListings(arr);
//       setLoading(false);
//     });
//   };

//   const handleCopyNumber = (phoneNumber) => {
//     navigator.clipboard.writeText(phoneNumber);
//     toast({ title: "Phone number copied to clipboard", status: "success" });
//   };

//   useEffect(() => {
//     refreshData();
//   }, [user, searchDate]);

//   return (
//     <>
//       <Box mt={5}>
//         {loading ? (
//           <>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
//               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
//                 (index) => (
//                   <Box
//                     key={index}
//                     p={4}
//                     boxShadow="2xl"
//                     shadow="dark-lg"
//                     transition="0.2s"
//                     _hover={{ boxShadow: "sm" }}
//                     border="1px solid"
//                     borderColor="gray.200"
//                     borderRadius="md"
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Box>
//                       <Skeleton height="20px" mb={2} />
//                       <Skeleton height="16px" mb={2} />
//                       <Skeleton height="16px" mb={2} />
//                       <Skeleton height="12px" />
//                       <Skeleton height="16px" mt={2} />
//                       <Skeleton height="32px" width="120px" mt={2} />
//                     </Box>
//                     <Skeleton height="24px" width="24px" />
//                   </Box>
//                 )
//               )}
//             </SimpleGrid>
//           </>
//         ) : (
//           <>
//             <Box mb={4}>
//               <Heading as="h2" size="lg" mb={2}>
//                 Search By Date
//               </Heading>
//               <input
//                 type="date"
//                 value={searchDate}
//                 onChange={(e) => setSearchDate(e.target.value)}
//               />
//               <Button
//                 ml={2}
//                 colorScheme="radiant-blue"
//                 variant ='outline'
//                 onClick={() => {
//                   setLoading(true);
//                   setSearchDate("");
//                 }}
//               >
//                 Clear
//               </Button>
//             </Box>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
//               {listings.length > 0 ? (
//                 listings.map((listing) => (
//                   <Box
//                     key={listing.id}
//                     p={4}
//                     boxShadow="2xl"
//                     shadow="dark-lg"
//                     transition="0.2s"
//                     _hover={{ boxShadow: "outline" }}
//                     border="1px solid"
//                     borderColor="gray.200"
//                     borderRadius="md"
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Box>
//                       <Text fontSize="2xl" fontWeight="bold" mb={2}>
//                         {listing.startPlace} --&gt; {listing.destination}
//                       </Text>
//                       <Heading as="h3" fontSize="xl" my={2}>
//                         {listing.date.split("-")[2]}{" "}
//                         {new Date(listing.date).toLocaleString("default", {
//                           month: "long",
//                         })}
//                         {" - "}({listing.time})
//                       </Heading>
//                       <Text fontSize="lg" mt={2}>
//                         {listing.name}
//                       </Text>
//                       <Text fontSize="lg" mt={2}>
//                         Phone: {listing.phoneNumber}
//                       </Text>
//                       <Button
//                         mt={2}
//                         variant="outline"
//                         colorScheme="teal"
//                         onClick={() => handleCopyNumber(listing.phoneNumber)}
//                       >
//                         Copy Number
//                       </Button>
//                     </Box>
//                     {user && listing.creator === user.uid && (
//                       <Button
//                         variant="outline"
//                         colorScheme="red"
//                         onClick={() => handleListingDelete(listing.id)}
//                       >
//                         <FaTrash />
//                       </Button>
//                     )}
//                   </Box>
//                 ))
//               ) : (
//                 <Text fontSize="lg">No search results yet.</Text>
//               )}
//             </SimpleGrid>
//           </>
//         )}
//       </Box>
//     </>
//   );
// };

// export default ListingList;



// import {
//   Badge,
//   Box,
//   Button,
//   Heading,
//   SimpleGrid,
//   Text,
//   useClipboard,
//   useToast,
//   Skeleton,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import useAuth from "../hooks/useAuth";
// import {
//   collection,
//   onSnapshot,
//   query,
//   deleteDoc,
//   doc,
//   where,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { FaTrash } from "react-icons/fa";

// const ListingList = () => {
//   const [loading, setLoading] = useState(true);
//   const [listings, setListings] = useState([]);
//   const [searchDate, setSearchDate] = useState("");
//   const { user } = useAuth();
//   const { isLoggedIn } = useAuth();
//   const toast = useToast();
  

//   const refreshData = () => {
//     if (!user) {
//       setListings([]);
//       return;
//     }
//     let q = query(collection(db, "listings"));

//     if (searchDate) {
//       q = query(collection(db, "listings"), where("date", "==", searchDate));
//     }

//     onSnapshot(q, (querySnapshot) => {
//       let arr = [];
//       querySnapshot.forEach((doc) => {
//         arr.push({ id: doc.id, ...doc.data() });
//       });
//       setListings(arr);
//       setLoading(false);
//     });
//   };

//   const handleCopyNumber = (phoneNumber) => {
//     navigator.clipboard.writeText(phoneNumber);
//     toast({ title: "Phone number copied to clipboard", status: "success" });
//   };

//   useEffect(() => {
//     refreshData();
//   }, [user, searchDate]);

//   return (
//     <>
//       <Box mt={5}>
//         {loading ? (
//           <>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
//               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
//                 (index) => (
//                   <Box
//                     key={index}
//                     p={4}
//                     boxShadow="2xl"
//                     shadow="dark-lg"
//                     transition="0.2s"
//                     _hover={{ boxShadow: "sm" }}
//                     border="1px solid"
//                     borderColor="gray.200"
//                     borderRadius="md"
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Box>
//                       <Skeleton height="20px" mb={2} />
//                       <Skeleton height="16px" mb={2} />
//                       <Skeleton height="16px" mb={2} />
//                       <Skeleton height="12px" />
//                       <Skeleton height="16px" mt={2} />
//                       <Skeleton height="32px" width="120px" mt={2} />
//                     </Box>
//                     <Skeleton height="24px" width="24px" />
//                   </Box>
//                 )
//               )}
//             </SimpleGrid>
//           </>
//         ) : (
//           <>
//             <Box mb={4}>
//               <Box >
//               <Heading as="h2" size="lg" borderColor="blue.300" mb={2}>
            
//                Lost Items Search By Date
//               </Heading>
//               </Box>
//               <input
//                 type="date"
//                 value={searchDate}
//                 onChange={(e) => setSearchDate(e.target.value)}
//               />
//               <Button
//                 ml={2}
//                 colorScheme="radiant-blue"
//                 variant ='outline'
//                 onClick={() => {
//                   setLoading(true);
//                   setSearchDate("");
//                 }}
//               >
//                 Clear
//               </Button>
//             </Box>
//             <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
//               {listings.length > 0 ? (
//                 listings.map((listing) => (
//                   <Box
//                     key={listing.id}
//                     p={4}
//                     boxShadow="2xl"
//                     shadow="dark-lg"
//                     transition="0.2s"
//                     _hover={{ boxShadow: "outline" }}
//                     border="1px solid"
//                     borderColor="gray.200"
//                     borderRadius="md"
//                     display="flex"
//                     justifyContent="space-between"
//                   >
//                     <Box color='gray.10'>
//                     <Text fontSize="large" fontweight="bold" mt={2}>
//                        Name:({listing.name})
//                       </Text>
//                      <Box  p={4}
//                     boxShadow="2xl"
//                     shadow="dark-lg"
//                     transition="0.2s"
//                     _hover={{ boxShadow: "outline" }}
//                     border="1px solid"
//                     borderColor="gray.200"
//                     borderRadius="md"
//                     display="flex"
//                     justifyContent="space-between" >
//                       <Text fontSize="large" fontWeight="bold" mb={2}>
//                       ({listing.destination})
//                       </Text></Box>
//                       <Box >
//                       <Text fontSize="large" fontWeight="bold" mb={2}>
//                         Description(Place&Remarks):{listing.startPlace}
//                       </Text></Box>
//                       <Heading as="h3" fontSize="xl" my={2}>
//                         {listing.date.split("-")[2]}{" "}
//                         {new Date(listing.date).toLocaleString("default", {
//                           month: "long",
//                         })}
//                         {" - "}({listing.time})
//                       </Heading>
                      
//                       <Text fontSize="lg" mt={2}>
//                         Phone: {listing.phoneNumber}
//                       </Text>
//                       <Button
//                         mt={2}
//                         variant="outline"
//                         colorScheme="teal"
//                         onClick={() => handleCopyNumber(listing.phoneNumber)}
//                       >
//                         Copy Number
//                       </Button>
//                     </Box>
//                     {user && listing.creator === user.uid && (
//                       <Button
//                         variant="outline"
//                         colorScheme="red"
//                         onClick={() => handleListingDelete(listing.id)}
//                       >
//                         <FaTrash />
//                       </Button>
//                     )}
//                   </Box>
//                 ))
//               ) : (
//                 <Text fontSize="lg">No search results yet.</Text>
//               )}
//             </SimpleGrid>
//           </>
//         )}
//       </Box>
//     </>
//   );
// };

// export default ListingList;

import { Box, Button, Heading, SimpleGrid, Text, useToast ,Skeleton} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import {
  collection,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { FaTrash } from "react-icons/fa";

const ListingList = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();
  const toast = useToast();

  const refreshData = () => {
    if (!user) {
      setListings([]);
      return;
    }
    let q = query(collection(db, "listings"));

    if (searchDate) {
      q = query(collection(db, "listings"), where("date", "==", searchDate));
    }

    onSnapshot(q, (querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setListings(arr);
      setLoading(false);
    });
  };

  const handleCopyNumber = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber);
    toast({ title: "Phone number copied to clipboard", status: "success" });
  };

  const handleListingDelete = async (listingId) => {
    try {
      // Delete the listing from the "listings" collection
      await deleteDoc(doc(db, "listings", listingId));

      // Delete the listing from the user's listing subcollection
      const userListingRef = doc(db, "users", user.uid, "listings", listingId);
      await deleteDoc(userListingRef);

      toast({
        title: "Listing deleted successfully",
        status: "success",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error deleting listing",
        status: "error",
      });
    }
  };

  useEffect(() => {
    refreshData();
  }, [user, searchDate]);

  return (
    <>
      <Box mt={5}>
      {loading ? (
          <>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
                (index) => (
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
                      <Skeleton height="16px" mb={2} />
                      <Skeleton height="12px" />
                      <Skeleton height="16px" mt={2} />
                      <Skeleton height="32px" width="120px" mt={2} />
                    </Box>
                    <Skeleton height="24px" width="24px" />
                  </Box>
                )
              )}
            </SimpleGrid>
          </>
        ) : (
          <>
            <Box mb={4}>
              <Box >
              <Heading as="h2" size="lg" borderColor="blue.300" mb={2}>
            
               Lost Items Search By Date
              </Heading>
              </Box>
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
              />
              <Button
                ml={2}
                colorScheme="radiant-blue"
                variant ='outline'
                onClick={() => {
                  setLoading(true);
                  setSearchDate("");
                }}
              >
                Clear
              </Button>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {listings.length > 0 ? (
                listings.map((listing) => (
                  <Box
                    key={listing.id}
                    p={4}
                    boxShadow="2xl"
                    shadow="dark-lg"
                    transition="0.2s"
                    _hover={{ boxShadow: "outline" }}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box color='gray.10'>
                    <Text fontSize="large" fontweight="bold" mt={2}>
                       Name:({listing.name})
                      </Text>
                     <Box  p={4}
                    boxShadow="2xl"
                    shadow="dark-lg"
                    transition="0.2s"
                    _hover={{ boxShadow: "outline" }}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    display="flex"
                    justifyContent="space-between" >
                      <Text fontSize="large" fontWeight="bold" mb={2}>
                      ({listing.description})
                      </Text></Box>
                      <Box >
                      <Text fontSize="large" fontWeight="bold" mb={2}>
                        Description(Place&Remarks):{listing.Place}
                      </Text></Box>
                      <Heading as="h3" fontSize="xl" my={2}>
                        {listing.date.split("-")[2]}{" "}
                        {new Date(listing.date).toLocaleString("default", {
                          month: "long",
                        })}
                        {" - "}({listing.time})
                      </Heading>
                      
                      <Text fontSize="lg" mt={2}>
                        Phone: {listing.phoneNumber}
                      </Text>
                      <Button
                        mt={2}
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => handleCopyNumber(listing.phoneNumber)}
                      >
                        Copy Number
                      </Button>
                    </Box>
                    {user && listing.creator === user.uid && (
                      <Button
                        variant="outline"
                        colorScheme="red"
                        onClick={() => handleListingDelete(listing.id)}
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </Box>
                ))
              ) : (
                <Text fontSize="lg">No search results yet.</Text>
              )}
            </SimpleGrid>
          </>
        )}
      </Box>
    </>
  );
};

export default ListingList;



