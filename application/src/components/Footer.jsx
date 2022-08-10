import { Facebook, Twitter } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#01254F] mt-16 px-24 py-5">
      <div className="flex   text-white border-b py-10">
        <div className="flex-1">
          <h1 className="font-bold text-2xl tracking-widest">ACY.</h1>
          <p className="italic tracking-widest">Securities</p>
          <div className="my-5">
            <p>Contact Us</p>
            <p>Australia: 1300 729 171</p>
            <p>International: +61 2 9188 2999</p>
            <p>China: 950 4959 5638</p>
            <p>Taiwan: 02 5594 2999</p>
            <p>Email: support@acy.com</p>
          </div>
          <div className="flex">
            <div className="bg-[#01254F]  text-white mr-5">
              <Facebook />
            </div>
            <div className="bg-[#01254F] text-white ">
              <Twitter />
            </div>
          </div>
        </div>
        <div className="flex-[2_2_0%]">
          <div className="flex">
            <div className="pr-4">
              <h3 className="mb-5">Why ACY?</h3>
              <ul className="mb-2">
                <li>About Us</li>
                <li>Awards</li>
                <li>Company Announcements</li>
                <li>ACY history</li>
                <li>Regulations</li>
                <li>Terms and Conditions</li>
                <li>FAQS</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="pr-4">
              <h3 className="mb-5">Products</h3>
              <ul className="mb-2">
                <li>Forex</li>
                <li>Precious Metals</li>
                <li>Indices</li>
                <li>Commodities</li>
                <li>Chinese Offshore Yuan</li>
                <li>Product Specification</li>
              </ul>
            </div>
            <div className="pr-4">
              <h3 className="mb-5">Platforms</h3>
              <ul className="mb-2">
                <li>MT4</li>
                <li>MT5</li>
                <li>Account Types</li>
              </ul>
            </div>
            <div className="pr-4">
              <h3 className="mb-5">Education</h3>
              <ul className="mb-2">
                <li>Trading Contest</li>
                <li>Seminars/Webinars</li>
                <li>Market Blogs</li>
                <li>E-book</li>
                <li>Economic Calendar</li>
                <li>Trading Course</li>
                <li>How to Forex Trade</li>
              </ul>
            </div>
            <div className="pr-4">
              <h3 className="mb-5">Partners</h3>
              <ul className="mb-2">
                <li>Introducing Brokers</li>
                <li>Regional Managers</li>
                <li>Money Managers</li>
                <li>Referral Program</li>
                <li>White Label</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
