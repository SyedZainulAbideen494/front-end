import React,{useCallback, useState} from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import './addproductfrom.css'

const AddProductsForm = () => {
        const [title, setTitle] = useState("");
        const [usd, setUSD] = useState("");
        const [EUR, setEUR] = useState("");
        const [GBP, setGBP] = useState("");
        const [JPY, setJPY] = useState("");
        const [CAD, setCAD] = useState("");
        const [AUD, setAUD] = useState("");
        const [CHF, setCHF] = useState("");
        const [CNY, setCNY] = useState("");
        const [INR, setINR] = useState("");
        const [BRL, setBRL] = useState("");
        const [RUB, setRUB] = useState("");
        const [KRW, setKRW] = useState("");
        const [SGD, setSGD] = useState("");
        const [NZD, setNZD] = useState("");
        const [MXN, setMXN] = useState("");
        const [HKD, setHKD] = useState("");
        const [TRY, setTRY] = useState("");
        const [ZAR, setZAR] = useState("");
        const [SEK, setSEK] = useState("");
        const [NOK, setNOK] = useState("");
        const [amount, setAmount] = useState("");
        const [image, setImage] = useState(null);
        const [payment, setpayment] = useState('')
        const [product_description, setproduct_description] = useState('')
       
       
        const params = useParams();
       
        const addProductHandler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
          formData.append("title", title);
          formData.append("amount", amount);
          formData.append("payment", payment)
          formData.append("usd", usd);
          formData.append("EUR", EUR);
          formData.append("GBP", GBP);
          formData.append("JPY", JPY);
          formData.append("CAD", CAD);
          formData.append("AUD", AUD);
          formData.append("CHF", CHF);
          formData.append("CNY", CNY);
          formData.append("INR", INR);
          formData.append("BRL", BRL);
          formData.append("RUB", RUB);
          formData.append("KRW", KRW);
          formData.append("SGD", SGD);
          formData.append("NZD", NZD);
          formData.append("MXN", MXN);
          formData.append("HKD", HKD);
          formData.append("TRY", TRY);
          formData.append("ZAR", ZAR);
          formData.append("SEK", SEK);
          formData.append("NOK", NOK);
          formData.append("product_description", product_description)
       
          Axios.post("https://apifordropment.online/addProduct", formData, {
            headers: {
              Authorization: params.shop_id,
            },
          })
            .then((response) => {
              console.log(response.data);
              window.location.href = `/admin/products/${params.shop_id}`
            })
            .catch((error) => {
              console.error("Error adding product:", error);
              // Handle error
            });
        };
       
        return (
            <div class="form-container">
            <h2>ADD NEW ITEM</h2>
            <form onSubmit={addProductHandler}>
              <section class="section">
                <h3>Image</h3>
                <label for="image">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  placeholder="Image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </section>
              <section class="section">
                <h3>Details</h3>
                <label for="title">Product Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Product title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                /><br />
          
                <label for="amount">Product Quantity</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Product Quantity"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                /><br />
                <label for="product_description">Description (max 2000 words)</label>
                <input
                  type="text"
                  id="product_description"
                  name="product_description"
                  placeholder="Enter description below 2000 words"
                  value={product_description}
                  onChange={(e) => setproduct_description(e.target.value)}
                /><br />
              </section>
              <section class="section">
  <h3>Pricing</h3>

  <div class="currency-section">
    <label for="usd">USD</label>
    <input
      type="number"
      id="usd"
      name="usd"
      placeholder="USD"
      value={usd}
      onChange={(e) => setUSD(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="eur">EUR</label>
    <input
      type="number"
      id="eur"
      name="eur"
      placeholder="EUR"
      value={EUR}
      onChange={(e) => setEUR(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="gbp">GBP</label>
    <input
      type="number"
      id="gbp"
      name="gbp"
      placeholder="GBP"
      value={GBP}
      onChange={(e) => setGBP(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="jpy">JPY</label>
    <input
      type="number"
      id="jpy"
      name="jpy"
      placeholder="JPY"
      value={JPY}
      onChange={(e) => setJPY(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="cad">CAD</label>
    <input
      type="number"
      id="cad"
      name="cad"
      placeholder="CAD"
      value={CAD}
      onChange={(e) => setCAD(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="aud">AUD</label>
    <input
      type="number"
      id="aud"
      name="aud"
      placeholder="AUD"
      value={AUD}
      onChange={(e) => setAUD(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="chf">CHF</label>
    <input
      type="number"
      id="chf"
      name="chf"
      placeholder="CHF"
      value={CHF}
      onChange={(e) => setCHF(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="cny">CNY</label>
    <input
      type="number"
      id="cny"
      name="cny"
      placeholder="CNY"
      value={CNY}
      onChange={(e) => setCNY(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="inr">INR</label>
    <input
      type="number"
      id="inr"
      name="inr"
      placeholder="INR"
      value={INR}
      onChange={(e) => setINR(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="brl">BRL</label>
    <input
      type="number"
      id="brl"
      name="brl"
      placeholder="BRL"
      value={BRL}
      onChange={(e) => setBRL(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="rub">RUB</label>
    <input
      type="number"
      id="rub"
      name="rub"
      placeholder="RUB"
      value={RUB}
      onChange={(e) => setRUB(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="krw">Price in KRW</label>
    <input
      type="number"
      id="krw"
      name="krw"
      placeholder="Price in KRW"
      value={KRW}
      onChange={(e) => setKRW(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="sgd">Price in SGD</label>
    <input
      type="number"
      id="sgd"
      name="sgd"
      placeholder="Price in SGD"
      value={SGD}
      onChange={(e) => setSGD(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="nzd">Price in NZD</label>
    <input
      type="number"
      id="nzd"
      name="nzd"
      placeholder="Price in NZD"
      value={NZD}
      onChange={(e) => setNZD(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="mxn">Price in MXN</label>
    <input
      type="number"
      id="mxn"
      name="mxn"
      placeholder="Price in MXN"
      value={MXN}
      onChange={(e) => setMXN(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="hkd">Price in HKD</label>
    <input
      type="number"
      id="hkd"
      name="hkd"
      placeholder="Price in HKD"
      value={HKD}
      onChange={(e) => setHKD(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="try">Price in TRY</label>
    <input
      type="number"
      id="try"
      name="try"
      placeholder="Price in TRY"
      value={TRY}
      onChange={(e) => setTRY(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="sek">Price in SEK</label>
    <input
      type="number"
      id="sek"
      name="sek"
      placeholder="Price in SEK"
      value={SEK}
      onChange={(e) => setSEK(e.target.value)}
    /><br />
  </div>

  <div class="currency-section">
    <label for="nok">Price in NOK</label>
    <input
      type="number"
      id="nok"
      name="nok"
      placeholder="Price in NOK"
      value={NOK}
      onChange={(e) => setNOK(e.target.value)}
    /><br />
  </div>
</section>
          <div className="add-product-form-btn">
              <button type="submit">Add Product</button>
          </div>
            </form>
          </div>
        );
       };

export default AddProductsForm