import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import CountryCode from "../CountryCode.json";

const Register = ({ posts }) => {
  const [countryCode, setCountryCode] = useState(CountryCode);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [message, setMessage] = useState(null);
  const { user } = useContext(AuthContext);

  console.log(posts);
  const postSelected = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const dialCode = useRef();
  const phoneNumber = useRef();
  const code = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      username: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      postSelected: postSelected.current.value,
    };
    const post = posts?.filter(
      (post) => post.title === postSelected.current.value
    );

    setSelectedPostId(post[0].id);

    await fetch(`http://localhost:3003/favourites/posts/${selectedPostId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res?.status === 403) setMessage("Webinar already Registered");
        if (res?.status === 200) setMessage("Registered");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="register"
      className="py-16 px-14 my-18 mx-14 border border-gray-200 rounded-md shadow-2xl"
    >
      <div className="max-w-[580px] mx-auto flex flex-col text-xl items-center">
        <h1 className="text-[#01254F] font-medium">
          Register for a Webinar Now
        </h1>
        <p className="text-sm text-center text-gray-700 my-5 py-2 px-5">
          Please fill in the form below and you will be contacted by one of our
          professional business experts.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2 max-w-[580px] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden sm:rounded-md">
            <div className=" bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label className="block text-lg font-light text-gray-700">
                    Topic
                  </label>
                  <select
                    ref={postSelected}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full py-2 px-3 font-light text-gray-700 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                  >
                    {posts?.map((post) => {
                      if (!post.favourited)
                        return <option key={post.id}>{post?.title}</option>;
                    })}
                  </select>
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-light text-gray-700">
                    First name
                  </label>
                  <input
                    ref={firstName}
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="peer mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                  />
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Please enter your first name
                  </p>
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-light text-gray-700">
                    Last name
                  </label>
                  <input
                    ref={lastName}
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="peer mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                  />
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Please enter your last name
                  </p>
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-light text-gray-700">
                    Email
                  </label>
                  <input
                    ref={email}
                    required
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="peer mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                  />
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Please enter a valid email address
                  </p>
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-light text-gray-700">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-2 ">
                      <select
                        ref={dialCode}
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 font-light text-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                      >
                        {countryCode.map((country) => (
                          <option key={country.name}>
                            {country.dial_code}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex-1">
                      <input
                        ref={phoneNumber}
                        type="number"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-light text-gray-700">
                    Mobile Authentication
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-2">
                      <button
                        type="submit"
                        className="mt-1 cursor-pointer hover:bg-gray-200 block w-full py-2 px-3 font-light text-gray-700 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm "
                      >
                        GET CODE
                      </button>
                    </div>

                    <div className="flex-1">
                      <input
                        ref={code}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-gray-50 text-right">
              <button
                type="submit"
                className="mt-3 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 block w-full py-2 px-3 border border-gray-300 bg-[#01254F] text-white rounded-md shadow-sm focus:outline-none focus:ring-[#01254F] focus:border-[#01254F] sm:text-sm"
              >
                Register
              </button>
              {message && (
                <p
                  className={`${
                    message === "Registered"
                      ? "text-[#01254F] animate-pulse tracking-wide font-bold"
                      : "text-red-700"
                  }  font-light text-center`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
