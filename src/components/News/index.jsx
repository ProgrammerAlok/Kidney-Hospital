import React from "react";
import CardLG from "./CardLG";
import XRayImage from "../../assets/images/xray-image.png"
import BoneImage from "../../assets/images/bone-image.png"
import BoneCheckImage from "../../assets/images/bone-check-image.png"
import KidneyImage from "../../assets/images/kidney-image.png"
import OTImage from "../../assets/images/ot-image.png"
import Avatar from "../../assets/images/avatar-logo.svg"
import CardMD from "./CardMD";
import CardSM from "./CardSM";

const NewsPage = () => {

  const Data1 = [
    {
      title: "What To Do When You Break A Bone?", 
      description: "Breaking a bone is a serious and scary situation that can happen to anyone in a number of different ways. The most common way a bone. \n Bone breaks are categorized into different types of fractures...",
      image: XRayImage, 
      avatar: Avatar, 
      name: "James Williams", 
      date: "October 22, 2022",
    },
    {
      title: "The most common way a bone...",
      image: BoneImage, 
      avatar: Avatar, 
      name: "James Williams", 
      date: "October 22, 2022",
    },
  ];

  const Data2 = [
    {
      title: "What To Do When You Break...",
      image: BoneCheckImage,
      url: "",
    },
    {
      title: "What To Do When You Break...",
      image: KidneyImage,
      url: "",
    },
    {
      title: "What To Do When You Break...",
      image: OTImage,
      url: "",
    },
  ];

  return (
    <div className="newspage-container-wrapper flex flex-col justify-center items-center py-10 lg:py-16">
      <div className="newspage-container">
        <h3 className="text-center">Our Blogs</h3>
        <h1 className="text-center">Latest <span>News</span> </h1>

        <div className="grid1">
          <CardLG { ...Data1[0] } />
          <CardMD { ...Data1[1] } />
        </div>

        <div className="grid2">
          {Data2.map((data) => (<CardSM { ...data } />))}
        </div>

        <div className="flex justify-center items-center my-16">
          <button className="btn">View More</button>
        </div>
      </div>
      
    </div>
  );
};

export default NewsPage;
