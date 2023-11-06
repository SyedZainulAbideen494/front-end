import React,{Fragment, useCallback, useState} from "react";
import './sections.css'
import { useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";
import Section1BuildEditSec6 from "./component forms section6/section-1-edit-sec-6";
import Section2BuildEditSec6 from "./component forms section6/section-2-edit-sec6";
import Section3BuildEditSec6 from "./component forms section6/section3-edit-sec6";
import Section4BuildEditSec6 from "./component forms section6/section4-edit-sec6";
import Section5BuildEditSec6 from "./component forms section6/section5-edit-sec6";
import Section6BuildEditSec6 from "./component forms section6/section6-edit-sec6";
import Section7BuildEditSec6 from "./component forms section6/section7-edit-sec6";
import Section8BuildEditSec6 from "./component forms section6/section8-edit-sec6";
import Section9BuildEditSec6 from "./component forms section6/section9-edit-sec6";
import Section10BuildEditSec6 from "./component forms section6/section10-edit-sec6";
import Section11BuildEditSec6 from "./component forms section6/section11-edit-sec6";
import Section12BuildEditSec6 from "./component forms section6/section12-edit-sec6";

const Section6Form = () => {
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
        return<Section1BuildEditSec6/>
      }if(params.number === '2'){
        return<Section2BuildEditSec6/>
      }if(params.number === '3'){
        return<Section3BuildEditSec6/>
      }if(params.number === '4'){
        return<Section4BuildEditSec6/>
      }if(params.number === '5'){
        return<Section5BuildEditSec6/>
      }if(params.number === '6'){
        return<Section6BuildEditSec6/>
      }if(params.number === '7'){
        return<Section7BuildEditSec6/>
      }if(params.number === '8'){
        return<Section8BuildEditSec6/>
      }if(params.number === '9'){
        return<Section9BuildEditSec6/>
      }if(params.number === '10'){
        return<Section10BuildEditSec6/>
      }if(params.number === '11'){
        return<Section11BuildEditSec6/>
      }if(params.number === '12'){
        return<Section12BuildEditSec6/>
      }else{
        return
      }
    }
    return<Fragment>
      <SectionsEditDisplay/>
    </Fragment>
}

export default Section6Form