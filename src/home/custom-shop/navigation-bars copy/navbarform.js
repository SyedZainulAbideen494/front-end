import React,{Fragment, useCallback, useState} from "react";
import './nav-bars.css'
import { useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";
import NavBar1Edit from "./compnent forms nav/navbar1-edit";
import NavBar2Edit from "./compnent forms nav/navbar2-edit";
import NavBar3Edit from "./compnent forms nav/navbar3-edit";
import NavBar4Edit from "./compnent forms nav/navbar4-edit";
import NavBar5Edit from "./compnent forms nav/navbar5-edit";
import NavBar6Edit from "./compnent forms nav/navbar6-edit";
import NavBar7Edit from "./compnent forms nav/navbar7-edit";

const NavBarsForm = () => {
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
        return<NavBar1Edit/>
      }if(params.number === '2'){
        return<NavBar2Edit/>
      }if(params.number === '3'){
        return<NavBar3Edit/>
      }if(params.number === '4'){
        return<NavBar4Edit/>
      }if(params.number === '5'){
        return<NavBar5Edit/>
      }if(params.number === '6'){
        return<NavBar6Edit/>
      }if(params.number === '7'){
        return<NavBar7Edit/>
      }else{
        return
      }
    }
    return<Fragment>
      <SectionsEditDisplay/>
    </Fragment>
}

export default NavBarsForm