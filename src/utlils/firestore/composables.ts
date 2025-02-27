import { query, where } from "firebase/firestore";
import { useCollection, useDocument } from "vuefire";
import { getItemDoc, getUserDoc, itemsCollection } from "./db";
import type { User } from "firebase/auth";

export const getUserData = (id: string) => useDocument<User>(getUserDoc(id));

export const getItem = (id: string) => useDocument(getItemDoc(id));

export const getUserItems = (uid: User["uid"]) => {

  const filteredQuery = query(itemsCollection, where("userId", "==", uid));
  return useCollection(filteredQuery);

};

export const useAllItemsCollection = () => {

  return useCollection(itemsCollection);

};
