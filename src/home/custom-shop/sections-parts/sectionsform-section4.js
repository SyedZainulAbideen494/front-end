import React,{Fragment, useCallback, useState} from "react";
import './sections.css'
import { useParams, useSearchParams } from "react-router-dom";
import Axios from "axios";
import Section1BuildEdit from "./component forms/section-1-edit";
import Section2BuildEdit from "./component forms/section-2-edit";
import Section3BuildEdit from "./component forms/section3-edit";
import Section4BuildEdit from "./component forms/section4-edit";
import Section5BuildEdit from "./component forms/section5-edit";
import Section6BuildEdit from "./component forms/section6-edit";
import Section7BuildEdit from "./component forms/section7-edit";
import Section8BuildEdit from "./component forms/section8-edit";
import Section9BuildEdit from "./component forms/section9-edit";
import Section10BuildEdit from "./component forms/section10-edit";
import Section11Build from "./section11";
import Section11BuildEdit from "./component forms/section11-edit";
import Section12BuildEdit from "./component forms/section12-edit";
import Section1BuildEditSec4 from "./component forms section4/section-1-edit-sec-4";
import Section2BuildEditSec4 from "./component forms section4/section-2-edit-sec4";
import Section3BuildEditSec4 from "./component forms section4/section3-edit-sec4";
import Section4BuildEditSec4 from "./component forms section4/section4-edit-sec4";
import Section5BuildEditSec4 from "./component forms section4/section5-edit-sec4";
import Section6BuildEditSec4 from "./component forms section4/section6-edit-sec4";
import Section7BuildEditSec4 from "./component forms section4/section7-edit-sec4";
import Section8BuildEditSec4 from "./component forms section4/section8-edit-sec4";
import Section9BuildEditSec4 from "./component forms section4/section9-edit-sec4";
import Section10BuildEditSec4 from "./component forms section4/section10-edit-sec4";
import Section11BuildEditSec4 from "./component forms section4/section11-edit-sec4";
import Section12BuildEditSec4 from "./component forms section4/section12-edit-sec4";

const Section4Form = () => {
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
        "https://apifordropment.online/section1/data",
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
        return<Section1BuildEditSec4/>
      }if(params.number === '2'){
        return<Section2BuildEditSec4/>
      }if(params.number === '3'){
        return<Section3BuildEditSec4/>
      }if(params.number === '4'){
        return<Section4BuildEditSec4/>
      }if(params.number === '5'){
        return<Section5BuildEditSec4/>
      }if(params.number === '6'){
        return<Section6BuildEditSec4/>
      }if(params.number === '7'){
        return<Section7BuildEditSec4/>
      }if(params.number === '8'){
        return<Section8BuildEditSec4/>
      }if(params.number === '9'){
        return<Section9BuildEditSec4/>
      }if(params.number === '10'){
        return<Section10BuildEditSec4/>
      }if(params.number === '11'){
        return<Section11BuildEditSec4/>
      }if(params.number === '12'){
        return<Section12BuildEditSec4/>
      }else{
        return
      }
    }
    return<Fragment>
      <SectionsEditDisplay/>
    </Fragment>
}

export default Section4Form