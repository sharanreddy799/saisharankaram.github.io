import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sharanreddy799" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/saisharank/" },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sharan_reddy.k?igsh=MXZ5dmxwNHl4d2Fnbg%3D%3D&utm_source=qr",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
