import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram
  
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaXTwitter className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">LOCATION</h6>
            <ul>
              <li className="py-2 text-sm">CHENNAI</li>
              <li className="py-2 text-sm">COCHI</li>
              <li className="py-2 text-sm">BANGLORE</li>
              <li className="py-2 text-sm">PUNE</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">SERVICES</h6>
            <ul>
              <li className="py-2 text-sm">FAST DELIEVERY</li>
              <li className="py-2 text-sm">FAST RESPONSE</li>
              <li className="py-2 text-sm">24*7 SUPPORT</li>
              <li className="py-2 text-sm">FAST DELIEVRY</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">ABOUT</h6>
            <ul>
              <li className="py-2 text-sm">HOME</li>
              <li className="py-2 text-sm">CONTACT</li>
              <li className="py-2 text-sm">SERVICES</li>
              <li className="py-2 text-sm">BLOG</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">BRANCHES</h6>
            <ul>
              <li className="py-2 text-sm">MUMBAI</li>
              <li className="py-2 text-sm">VIZAG</li>
              <li className="py-2 text-sm">MADUARI</li>
              <li className="py-2 text-sm">DELHI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
