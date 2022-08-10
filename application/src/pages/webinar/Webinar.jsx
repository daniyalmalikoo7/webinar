import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import Host from "../../components/Host";
import Register from "../../components/Register";
import Footer from "../../components/Footer";

const Webinar = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/posts?per_page=12&page=1`
        );
        const json = await response.json();
        setPosts(json?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Cards posts={posts} />
      <Host />
      <Register posts={posts} />
      <Footer />
    </div>
  );
};

export default Webinar;
