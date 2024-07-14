import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ExploreCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
}) => {
  return (
    <Link className="card" href={href}>
      <div className="containers">
        <div className="icon-circle">
          <Icon className="h-10 w-20" style={{ color: "#9333ea" }} />
        </div>
        <div className="title mb-3">{title}</div>
        <div className="subtitle">{description}</div>
        <div className="btnRound btnService">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 19 18"
            height="18"
            width="19"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke=" #9333ea"
              d="M3.51141 2.78405L14.9344 6.95805C15.4154 7.13405 15.4014 7.81905 14.9134 7.97605L9.68541 9.64905L8.01241 14.8771C7.85641 15.3651 7.17041 15.3791 6.99441 14.8981L2.82141 3.47405C2.66441 3.04405 3.08141 2.62705 3.51141 2.78405Z"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ExploreCard;
