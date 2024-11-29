import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      {/* Grid Layout */}
      <div className="relative grid grid-cols-12">
        {/* Background Div */}
        <div className="md:col-span-5 col-span-12 h-[40rem] md:h-[32rem] bg-[#252525]"></div>
        <div className="md:col-span-7 col-span-12 h-[50rem] md:h-[32rem] relative">
          <Image
            src="https://img.freepik.com/premium-photo/lindau-bavarai_1150964-67373.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
            alt="Scenic View"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </div>

      <div className="absolute inset-0 top-0 text-white ">
        <div className="container mx-auto px-4">
          <div className=" grid grid-cols-12">
            <div className=" md:col-span-5 col-span-12 h-[40rem] md:h-[32rem] flex flex-col justify-around">
              <h1 className="text-3xl font-bold">Chaudri CPA</h1>
              <p className=" md:pr-16">
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee.
              </p>
              <div>
                <h2 className="text-xl font-medium">Contact Info</h2>
                <p>Company Email: portfo@gmail.com</p>
                <p>Official Phone: (866) 710-9709</p>
              </div>
              <div>
                <h2 className="text-xl font-medium">Our Address</h2>
                <p>05 Ketch Harbour Road,1920</p>
              </div>
            </div>

            <div className="md:col-span-7 col-span-12 h-[50rem] md:h-[32rem] flex flex-col justify-around">
              <div>
                <div className=" flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h1 className="text-white text-xl font-semibold">
                      Subscribe
                    </h1>
                    <h2 className="text-white mt-2 text-lg">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                  </div>
                  <div className="relative md:w-full w-60">
                    <input
                      type="text"
                      placeholder="Your Email here..."
                      className="mt-4 p-2 md:w-full w-60  text-white bg-transparent border-b border-white outline-none pr-10"
                    />
                    <div className="absolute top-1/2 right-0 w-6 h-6 rounded-full flex justify-center items-center bg-white text-slate-800">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-3">
                <div>
                  <div className=" space-y-1">
                    <h1 className=" font-medium text-xl vigaRegular mb-3">
                      Quick Links
                    </h1>
                    <p>Home</p>
                    <p>About</p>
                    <p>Work</p>
                    <p>Contact</p>
                  </div>
                </div>
                <div>
                  <div className=" space-y-1">
                    <h1 className=" font-medium text-xl vigaRegular mb-3">
                      Tax Services
                    </h1>
                    <p>Individual Tax Preparation</p>
                    <p>Business Tax Preparation</p>
                    <p>Tax Preparation</p>
                    <p>Tax Planning Services</p>
                    <p>Tax Consulting</p>
                    <p>IRS Problem Resolution</p>
                    <p>Response & Representation</p>
                  </div>
                </div>
                <div>
                  <div className=" space-y-1">
                    <h1 className=" font-medium text-xl vigaRegular mb-3">
                      Financial Services
                    </h1>
                    <p>Outsourced Accounting and Bookkeeping</p>
                    <p>Business and Financial Consulting</p>
                    <p>QuickBooks Services</p>
                    <p>Payroll Services</p>
                    <p>Incorporation Services</p>
                    <p>Small Business Accounting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-800 py-6 text-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© 2024 Chaudricpa.com. All rights reserved.</p>
            <p>
              Designed and Developed by Solvierntech and Pirala Join Venture
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p>Follow us:</p>
            <div className="flex space-x-3">
              <Facebook className="w-6 h-6" />
              <Linkedin className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p>Privacy Policy & Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
