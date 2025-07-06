import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-500">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-gray-500 font-medium text-sm mt-2 mb-6">
            Sign up and get 10% off on your first order.
          </p>

          {/* Newsletter Form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-gray-300"
            >
              <TbBrandMeta className="h5  w-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="h5  w-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener norefferer"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="h5  w-5" />
            </a>
          </div>
          <p className="text-gray-500 ">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2 " />
            0123-456-789
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt12 px-4 lg:px-0 border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center ">
          © 2025, Rabbit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
