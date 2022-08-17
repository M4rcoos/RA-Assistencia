import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from 'react-icons/bs'
import style from './SocialMedia.module.css'

import React from 'react'

export  function SocialMedia() {
  return (
    <div className={style.content}>
      <ul className={style.ulSocialMidia}>
        <li className={style.liSocialMIdia}>
       <a href="https://pt-br.facebook.com/polviteccajamar/"  target='blank'><BsFacebook /></a> 
        </li>
        <li className={style.liSocialMIdia}>
       <a href="https://instagram.com/polvitec?igshid=YmMyMTA2M2Y="  target='blank'><BsInstagram /></a>
        </li>
      </ul>
    </div>
  )
}
