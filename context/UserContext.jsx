import { createContext, useContext, useState } from 'react';
import { db, storage } from "../firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; 
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
    
  const userDataInsert = (data) => {
    return setDoc(doc(db, "users", `${data.id}`), {...data});
  }

  const userDataRetrieve = async(id) => {
    try{
      const docRef = doc(db, "users", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return(docSnap.data());
      } 
      else {
        console.log("No user found!!!");
          return(docSnap.data());
      }
    }
    catch(e){
      console.log(e.message);
      return e.message;
    }
  }

  const updateUserData = async(data) => {
    try{
      const updatedUserData = doc(db, "users", `${data.id}`);
      await updateDoc(updatedUserData, {
        name: data.name,
        number: data.number,
        profileImg: data.profileImg
      });
    }
    catch(e){
      console.log(e.message);
    }
  }

  const updateProfileImg = async(id, image) => {
    try{
      if(image === ""){
        return "";
      }

      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });
    
      const fileRef = ref(storage, `userProfileImages/${id}`);
      await uploadBytes(fileRef, blob);
    
      blob.close();

      return await getDownloadURL(fileRef);
    }
    catch(e){
      console.log(e.message);
    }
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, userDataInsert, userDataRetrieve, updateUserData, updateProfileImg}}>
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => {
  return useContext(UserContext);
};