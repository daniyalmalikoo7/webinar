import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logoutCall } from "../context/apiCalls";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-scroll";

export default function Navbar({ myWebinarPage }) {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    logoutCall(dispatch);
    navigate("/login");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const myWebinarList = () => {
    navigate("/my_webinar");
  };

  return (
    <nav className="w-full z-10 fixed bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl items-center flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <h2 className="text-2xl font-bold text-[#01254F]">LOGO</h2>
          </a>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 block`}
          >
            <div className=" items-center justify-center space-y-8  md:space-x-6 md:space-y-0">
              <button
                type="button"
                className="hidden lg:inline-flex text-gray-500 group bg-white rounded-md items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01254F]"
                aria-expanded="false"
              >
                <span>Why ACY?</span>
                <svg
                  className="hidden lg:inline-flex text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden lg:inline-flex text-gray-500 group bg-white rounded-md items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01254F]"
                aria-expanded="false"
              >
                <span>Products</span>
                <svg
                  className="hidden lg:inline-flex text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden lg:inline-flex text-gray-500 group bg-white rounded-md items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01254F]"
                aria-expanded="false"
              >
                <span>Platforms</span>
                <svg
                  className="hidden lg:inline-flex text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden lg:inline-flex text-gray-500 group bg-white rounded-md items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01254F]"
                aria-expanded="false"
              >
                <span>Education</span>
                <svg
                  className="hidden lg:inline-flex text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden lg:inline-flex text-gray-500 group bg-white rounded-md items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01254F]"
                aria-expanded="false"
              >
                <span>Partners</span>
                <svg
                  className="hidden lg:inline-flex text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          {user?.token ? (
            <div className="hidden space-x-2 md:inline-block">
              <a
                onClick={myWebinarList}
                className="px-6 py-2 text-[#01254F]  bg-white rounded-sm shadow border border-[#01254F] hover:bg-gray-100"
              >
                My Webinars
              </a>
              <button
                onClick={() => handleLogout()}
                className="px-6 py-2 text-[#01254F]  bg-white rounded-sm shadow border border-[#01254F] hover:bg-gray-100"
              >
                Logout
              </button>
              {!myWebinarPage ? (
                <a
                  href="javascript:void(0)"
                  className="px-4 py-2 text-white bg-[#01254F] rounded-sm shadow border border-[#01254F] hover:bg-gray-800"
                >
                  <Link to="register" spy={true} smooth={true}>
                    Register
                  </Link>
                </a>
              ) : (
                <a
                  href="/"
                  className="px-4 py-2 text-white bg-[#01254F] rounded-sm shadow border border-[#01254F] hover:bg-gray-800"
                >
                  Home Page
                </a>
              )}
            </div>
          ) : (
            <div className="hidden space-x-2 md:inline-block">
              <a
                onClick={navigateToLogin}
                className="px-6 py-2 text-[#01254F]  bg-white rounded-sm shadow border border-[#01254F] hover:bg-gray-100"
              >
                Login
              </a>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-white bg-[#01254F] rounded-sm shadow border border-[#01254F] hover:bg-gray-800"
              >
                <Link to="register" spy={true} smooth={true}>
                  Register
                </Link>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
