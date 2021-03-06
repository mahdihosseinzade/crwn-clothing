import React from "react";
import './MenuItem.scss';

const MenuItem =({section})=>{
    return (
      <div className={`${section.size} menu-item`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${section.imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title"> {section.title.toUpperCase()} </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
    );
}

export default MenuItem;