
import React from 'react'
import styles from './Rodape.module.css'
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
export default function Rodape() {

  function getToday(){
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
return today
  }
  return (
    <>
 <div className={styles.rodape}> 
    <div className={styles.face}> <FaFacebook/> </div> 
    <div className={styles.tui}> <FaTwitter/> </div> 
    <div className={styles.insta}> <FaInstagram/> </div> 
  
    </div> 
<p>{getToday()}</p>
</>
  )
} 

