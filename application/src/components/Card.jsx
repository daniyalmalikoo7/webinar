import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { AuthContext } from "../context/AuthContext";

const Card = ({ post }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const date = post?.created_at.split(" ")[0];
  const newDate = new Date(date);
  const epochDate = newDate.setDate(newDate.getDate() + 10);
  const seminarDate = new Date(epochDate);
  const formattedSeminarDate = seminarDate.toLocaleString("en-US");

  return (
    <div className="mx-5 my-2 p-4 h-[300px] flex flex-col justify-between  border border-sm bg-white">
      <span className="text-[#01254F] text-sm my-2">{date}</span>
      <h1 className="text-base my-5 text-[#01254F] font-semibold w-[280px] ">
        {post?.title}
      </h1>
      <p
        className="text-sm text-gray-700 mb-5 truncate ... hover:text-clip"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
      <p className="text-sm text-gray-700 mb-5">
        {formattedSeminarDate != "Invalid Date"
          ? formattedSeminarDate
          : "NOT AVAILABLE"}
      </p>
      <div className="text-[#6BB718]">
        {!user?.token ? (
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            Register Now
          </span>
        ) : (
          <span>
            <Link to="register" spy={true} smooth={true}>
              Register Now
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
