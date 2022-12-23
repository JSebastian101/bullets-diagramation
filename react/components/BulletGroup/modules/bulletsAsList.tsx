import React from "react";
import { BulletsSchema } from "../BulletsTypes";
import Bullet from "../Bullet";




export const getBulletsAsTSXList = (bullets: BulletsSchema) => {
  console.log(bullets);

  return (
    bullets.map((bullet: any/* Bullet */, index) => {
      console.log(bullet);
      return <Bullet
      key={index}
      src={bullet.image}
      titleBullet = {bullet.titleBullet} 
      link={
        bullet.link 
        ? bullet.link 
        : {
          url: "",
          attributeNofollow: false,
          attributeTitle: "",
          openNewTab: false,
          newTab: false
        }
      }
     />
    })
  )
}

/* 

*/