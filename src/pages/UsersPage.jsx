import React, { useEffect } from "react";

const UsersPage = () => {
  let getUsersData = async () => {
    const [usersData, setUsersData] = useState([]);
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
  return <div>UsersPage</div>;
};

export default UsersPage;
