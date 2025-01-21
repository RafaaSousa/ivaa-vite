import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const socialMedia = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ivaa_consultoria"
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/ivaa-consultoria"
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@ivaa.consultoria"
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.link/dhflq9"
  },
]

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row py-4">
      {socialMedia.map((item, index) => (
        <li key={index} className="m-4 list-none text-3xl text-primary">
          <a href={item.link}>
            {item.icon}
          </a>
        </li>
      ))}
    </div>
  );
};

export default SocialMediaLinks