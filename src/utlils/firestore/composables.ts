import { query, where } from "firebase/firestore";
import { useCollection, useDocument } from "vuefire";
import { getItemDoc, getUserDoc, itemsCollection } from "./db";
import type { User } from "firebase/auth";
import { UserCollectionDocument } from "src/types/forms";

export const getUserData = (id: string) => useDocument<User>(getUserDoc(id));

export const getItem = (id: string) => useDocument(getItemDoc(id));

export const useItemsCollection = (collectionId: Parameters<typeof useCollection>[0], options?: { ssrKey: string }) => {

  return useCollection<UserCollectionDocument>(collectionId, options);
};


export const getUserItems = (uid: User["uid"]) => {

  const filteredQuery = query(itemsCollection, where("userId", "==", uid));
  return useItemsCollection(filteredQuery, { ssrKey: `userItemsCollection:${uid}` });

};

export const useAllItemsCollection = () => {

  return useItemsCollection(itemsCollection);
};
