import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const socialIcons = [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "twitter", icon: <RiTwitterXFill /> },
    { name: "github", icon: <FaGithub /> },
    { name: "youtube", icon: <FaYoutube /> },
  ];

  const footerLinks = ["About", "Blog", "Jobs", "Press", "Accessibility", "Partners"];

  return (
    <footer className="mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center space-y-4">
        {/* Footer navigation links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((text) => (
            <a
              key={text}
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {text}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-4">
          {socialIcons.map(({ name, icon }) => (
            <Link
              key={name}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center  transition-colors"
            >
              <span className="sr-only">{name}</span>
              <div className="w-5 h-5 text-gray-600">{icon}</div>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
