import { GiButterfly } from "react-icons/gi";
import { FaTelegramPlane, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Contacts() {
  return (
    <div id="footer" className="flex-col">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row gap-8">
            <h1 className="text-lg font-fira">
              {" "}
              <GiButterfly className="text-3xl text-white inline" />
              Truket
            </h1>
          </div>
        </div>
        <div className="Contact">
          <h1 className="mb-2">Contact me</h1>
          <div className="flex gap-4">
            <a
              href="https://t.me/We_risee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-[1.5rem] text-white hover:text-[#c778dd] cursor-pointer" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/truket-lema-707b19316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-[#c778dd] cursor-pointer text-xl" />
            </a>

            {/* Email */}
            <a href="mailto:truketlema9489@email.com">
              <FaEnvelope className="text-white hover:text-[#c778dd] cursor-pointer text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="tracking-wider text-gray-400 text-center mt-3 ">
        <p>© Copyright 2026. Made by Truket</p>
      </div>
    </div>
  );
}
