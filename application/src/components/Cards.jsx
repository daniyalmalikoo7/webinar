import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center items-center bg-gray-100 px-14 py-16">
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      <Card />
    </div>
  );
};

export default Cards;
