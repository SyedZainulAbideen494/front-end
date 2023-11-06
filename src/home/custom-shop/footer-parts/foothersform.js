import React,{Fragment, useCallback, useState} from "react";
import './footers.css'
import { useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";
import Footer1Edit from "./component form fotter/footer1-edit";

const Footerform = () => {
  const [shop_name, setshop_name] = useState('')
  const [btn1, setbtn1] = useState('')
  const [btn2, setbtn2] = useState('')
  const [btn3, setbtn3] = useState('')
  const [instaLink, setInstaLink] = useState('')
  const [phone, setphone] = useState('')

  const params = useParams();

  const SectionsEditDisplay = ()  => {
    const params = useParams()
    if(params.number === '1'){
      return<Footer1Edit/>
    }else{
      return
    }
  }
  return<Fragment>
    <SectionsEditDisplay/>
  </Fragment>
}

export default Footerform