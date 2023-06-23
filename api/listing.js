// import { db } from "../firebase";
// import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";

// const addListing = async ({
//   name,
//   startPlace,
//   destination,
//   date,
//   time,
//   phoneNumber,
//   creatorId,
// }) => {
//   try {
//     // Add the listing to the "listings" collection
//     const listingRef = await addDoc(collection(db, "listings"), {
//       name: name,
//       startPlace: startPlace,
//       destination: destination,
//       date: date,
//       time: time,
//       phoneNumber: phoneNumber,
//       creator: creatorId,
//       createdAt: new Date().getTime(),
//     });

//     // Get the ID of the newly created listing
//     const listingId = listingRef.id;

//     // Add the listing to the user's listing subcollection
//     const userListingRef = doc(db, "users", creatorId, "listings", listingId);
//     await setDoc(userListingRef, {
//       name: name,
//       startPlace: startPlace,
//       destination: destination,
//       date: date,
//       time: time,
//       phoneNumber: phoneNumber,
//       creator: creatorId,
//       createdAt: new Date().getTime(),
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const deleteListing = async (listingId, creatorId) => {
//   try {
//     // Delete the listing from the "listings" collection
//     const listingRef = doc(db, "listings", listingId);
//     await deleteDoc(listingRef);

//     // Delete the listing from the user's listing subcollection
//     const userListingRef = doc(db, "users", creatorId, "listings", listingId);
//     await deleteDoc(userListingRef);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export { addListing, deleteListing };


// import { db } from "../firebase";
// import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";

// const addListing = async ({
//   name,
//   startPlace,
//   destination,
//   date,
//   time,
//   phoneNumber,
//   creatorId,
// }) => {
//   try {
//     // Add the listing to the "listings" collection
//     const listingRef = await addDoc(collection(db, "listings"), {
//       name: name,
//       startPlace: startPlace,
//       destination: destination,
//       date: date,
//       time: time,
//       phoneNumber: phoneNumber,
//       creator: creatorId,
//       createdAt: new Date().getTime(),
//     });

//     // Get the ID of the newly created listing
//     const listingId = listingRef.id;

//     // Add the listing to the user's listing subcollection
//     const userListingRef = doc(db, "users", creatorId, "listings", listingId);
//     await setDoc(userListingRef, {
//       name: name,
//       startPlace: startPlace,
//       destination: destination,
//       date: date,
//       time: time,
//       phoneNumber: phoneNumber,
//       creator: creatorId,
//       createdAt: new Date().getTime(),
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const deleteListing = async (listingId, creatorId) => {
//   try {
//     // Delete the listing from the "listings" collection
//     const listingRef = doc(db, "listings", listingId);
//     await deleteDoc(listingRef);

//     // Delete the listing from the user's listing subcollection
//     const userListingRef = doc(db, "users", creatorId, "listings", listingId);
//     await deleteDoc(userListingRef);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export { addListing, deleteListing };


import { db } from "../firebase";
import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";

const addListing = async ({
  name,
  Place,
  description,
  date,
  time,
  phoneNumber,
  creatorId,
}) => {
  try {
    // Add the listing to the "listings" collection
    const listingRef = await addDoc(collection(db, "listings"), {
      name: name,
      Place: Place,
      description: description,
      date: date,
      time: time,
      phoneNumber: phoneNumber,
      creator: creatorId,
      createdAt: new Date().getTime(),
    });

    // Get the ID of the newly created listing
    const listingId = listingRef.id;

    // Add the listing to the user's listing subcollection
    const userListingRef = doc(db, "users", creatorId, "listings", listingId);
    await setDoc(userListingRef, {
      name: name,
      Place: Place,
      description: description,
      date: date,
      time: time,
      phoneNumber: phoneNumber,
      creator: creatorId,
      createdAt: new Date().getTime(),
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteListing = async (listingId, creatorId) => {
  try {
    // Delete the listing from the "listings" collection
    const listingRef = doc(db, "listings", listingId);
    await deleteDoc(listingRef);

    // Delete the listing from the user's listing subcollection
    const userListingRef = doc(db, "users", creatorId, "listings", listingId);
    await deleteDoc(userListingRef);
  } catch (err) {
    console.log(err);
  }
};

export { addListing, deleteListing };