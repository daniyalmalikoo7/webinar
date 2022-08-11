import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Cards from "../../components/Cards";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";

const MyWebinar = () => {
  const [myWebinarList, setMyWebinarList] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/posts?favourited=1&author=${user?.user?.id}`
          //   {{url}}/posts?favourited=1&author=userId
        );
        const json = await response.json();
        setMyWebinarList(json?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar myWebinarPage />
      <Cards posts={myWebinarList} myList />
    </div>
  );
};

export default MyWebinar;
