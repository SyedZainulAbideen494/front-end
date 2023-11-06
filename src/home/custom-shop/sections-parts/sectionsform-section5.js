import React,{Fragment, useCallback, useState} from "react";
import './sections.css'
import { useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";
import Section1BuildEditSec5 from "./component forms section5/section-1-edit-sec-5";
import Section2BuildEditSec5 from "./component forms section5/section-2-edit-sec5";
import Section3BuildEditSec5 from "./component forms section5/section3-edit-sec5";
import Section4BuildEditSec5 from "./component forms section5/section4-edit-sec5";
import Section5BuildEditSec5 from "./component forms section5/section5-edit-sec5";
import Section6BuildEditSec5 from "./component forms section5/section6-edit-sec5";
import Section7BuildEditSec5 from "./component forms section5/section7-edit-sec5";
import Section8BuildEditSec5 from "./component forms section5/section8-edit-sec5";
import Section9BuildEditSec5 from "./component forms section5/section9-edit-sec5";
import Section10BuildEditSec5 from "./component forms section5/section10-edit-sec5";
import Section11BuildEditSec5 from "./component forms section5/section11-edit-sec5";
import Section12BuildEditSec5 from "./component forms section5/section12-edit-sec5";

const Section5Form = () => {
    const [shop_blockhead1, setshop_blockhead1] = useState('')
    const [shop_block1, setshop_block1] = useState('')
    const [shop_blockhead2, setshop_blockhead2] = useState('')
    const [shop_block2, setshop_block2] = useState('')
    const [shop_blockhead3, setshop_blockhead3] = useState('')
    const [shop_block3, setshop_block3] = useState('')

    const params = useParams();

    const addShopHandler = (navValue) => {
      const token = localStorage.getItem("token");
  
      // Make an Axios PUT request to update the navigation bar
      Axios.put(
        "http://localhost:8080/section1/data",
        {
          shop_blockhead1: shop_blockhead1,
          shop_block1: shop_block1,
          shop_blockhead2: shop_blockhead2,
          shop_block2: shop_block2,
          shop_blockhead3: shop_blockhead3,
          shop_block3: shop_block3
        },
        {
          headers: {
            Authorization: params.shop_id
          }
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log('Operation succeeded');
          if(params.build === '4'){
            window.location.href = `/build/${params.build}/footer/${params.shop_id}/${params.build}`;
          }else{
          window.location.href = `/build/${params.build}/step4/${params.shop_id}/${params.build}`;
          }
        } else {
          console.log('Operation failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

    const SectionsEditDisplay = ()  => {
      const params = useParams()
      if(params.number === '1'){
        return<Section1BuildEditSec5/>
      }if(params.number === '2'){
        return<Section2BuildEditSec5/>
      }if(params.number === '3'){
        return<Section3BuildEditSec5/>
      }if(params.number === '4'){
        return<Section4BuildEditSec5/>
      }if(params.number === '5'){
        return<Section5BuildEditSec5/>
      }if(params.number === '6'){
        return<Section6BuildEditSec5/>
      }if(params.number === '7'){
        return<Section7BuildEditSec5/>
      }if(params.number === '8'){
        return<Section8BuildEditSec5/>
      }if(params.number === '9'){
        return<Section9BuildEditSec5/>
      }if(params.number === '10'){
        return<Section10BuildEditSec5/>
      }if(params.number === '11'){
        return<Section11BuildEditSec5/>
      }if(params.number === '12'){
        return<Section12BuildEditSec5/>
      }else{
        return
      }
    }
    return<Fragment>
      <SectionsEditDisplay/>
    </Fragment>
}

export default Section5Form