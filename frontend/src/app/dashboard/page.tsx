import React from "react";
import { FaEye } from "react-icons/fa";

const page = () => {
  const items = [
    {
      title: "Users",
      subtitle: "Community Engagement",
      list: ["Active Users", "New Signups", "Total Users"],
      value: 1200,
    },
    {
      title: "Total NFTs",
      subtitle: "Digital Assets",
      list: ["Total Minted", "Total Sold", "Total Listed"],
      value: 5000,
    },
    {
      title: "My NFTs",
      subtitle: "Your Collections",
      list: ["Owned NFTs", "For Sale", "Recently Acquired"],
      value: 30,
    },
  ];

  return (
    <div>
      <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h1>
      <a
        className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
        href="https://github.com/Jagadeeshftw/NFT-Ocean"
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span>Star this project on GitHub</span>
        </div>
        <span>
          View more{" "}
          <span dangerouslySetInnerHTML={{ __html: "&RightArrow;" }}></span>
        </span>
      </a>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="plan-card xs:mx-auto  ">
            <h2>
              {item.title}
              <span>{item.subtitle}</span>
            </h2>
            <div
              className={
                item.title === "Users" ? "etiquet-user-count" : "etiquet-count"
              }
            >
              <p>Total: {item.value}</p>
              <div></div>
            </div>
            <div className="benefits-list">
              <ul>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                  </svg>
                  <span>{item.list[0]}</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                  </svg>
                  <span>{item.list[1]}</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                  </svg>
                  <span>{item.list[2]}</span>
                </li>
              </ul>
            </div>
            <div className="button-get-plan">
              <a href="#">
                <FaEye className="mr-3" />
                <span>VIEW</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
