import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registedUsers, setRegistedUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <AuthProvider
      value={{ registedUsers, setRegistedUsers, loggedInUser, setLoggedInUser }}
    >
      {children}
    </AuthProvider>
  );
};
