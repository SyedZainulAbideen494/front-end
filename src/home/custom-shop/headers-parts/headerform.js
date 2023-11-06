import React,{Fragment, useCallback, useState} from "react";
import './headers.css'
import { useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";
import Header1Edit from "./component form header/header1-edit";
import Header2Edit from "./component form header/header2-edit";
import Header3Preview from "./header3-preview";
import Header3Edit from "./component form header/header3-edit";
import Header4Edit from "./component form header/header4-edit";
import Header5Edit from "./component form header/header5-edit";

const HeadersForm = () => {
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
      return<Header1Edit/>
    }if(params.number === '2'){
      return<Header2Edit/>
    }if(params.number === '3'){
      return<Header3Edit/>
    }if(params.number === '4'){
      return<Header4Edit/>
    }if(params.number === '5'){
      return<Header5Edit/>
    }else{
      return
    }
  }
  return<Fragment>
    <SectionsEditDisplay/>
  </Fragment>
}

export default HeadersForm