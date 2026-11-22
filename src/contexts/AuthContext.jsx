import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registedUsers, setRegistedUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );

  return (
    <Auth.Provider
      value={{ registedUsers, setRegistedUsers, loggedInUser, setLoggedInUser }}
    >
      {children}
    </Auth.Provider>
  );
};
