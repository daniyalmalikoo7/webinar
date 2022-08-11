import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = ({ posts, myList }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center bg-gray-100 px-14 py-16">
      {posts?.map((post) => (
        <Card key={post.id} post={post} myList={myList} />
      ))}
      <Card />
    </div>
  );
};

export default Cards;
