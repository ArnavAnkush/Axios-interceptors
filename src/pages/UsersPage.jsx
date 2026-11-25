import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);

  let getUsersData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");
      setUsersData(res.data);
    } catch (error) {
      console.log("error in users api", error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8">
      {usersData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UsersPage;
