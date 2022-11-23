import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserObjByUserId } from "../services/firebase";

export function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      //we need a function we can call (firebase service) that gets the user data based on the id
      const response = await getUserObjByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
