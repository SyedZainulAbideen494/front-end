import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './payment.css'

const SubscriptionFormInner = ({ userId }) => {
  async function handleSubscription() {
    const token = localStorage.getItem('token')
  
    try {
      const response = await fetch('http://localhost:8080/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
  
      const data = await response.json();
  
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout page
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function handleSubscription2() {
    const token = localStorage.getItem('token')
  
    try {
      const response = await fetch('http://localhost:8080/create-checkout-session2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
  
      const data = await response.json();
  
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout page
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function handleSubscription3() {
    const token = localStorage.getItem('token')
  
    try {
      const response = await fetch('http://localhost:8080/create-checkout-session3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
  
      const data = await response.json();
  
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout page
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const Price1 = (props) => {
    const Pricing = ({ country }) => {
      if (country === "India") {
        return <h3>₹40</h3>;
      } else if (country === "europe") {
        return <h3>€0.44</h3>;
      } else if (country === "united kingdom") {
        return <h3>£0.38</h3>;
      } else if (country === "japan") {
        return <h3>¥70.72</h3>;
      } else if (country === "canada") {
        return <h3>CAD0.66</h3>;
      } else if (country === "australia") {
        return <h3>AUD0.75</h3>;
      } else if (country === "switzerland") {
        return <h3>Fr0.43</h3>;
      } else if (country === "china") {
        return <h3>¥3.53</h3>;
      } else if (country === "brazil") {
        return <h3>R$2.35</h3>;
      } else if (country === "south korea") {
        return <h3>₩640.19</h3>;
      } else if (country === "singapore") {
        return <h3>SGD0.65</h3>;
      } else if (country === "new zealand") {
        return <h3>NZD0.81</h3>;
      } else if (country === "mexico") {
        return <h3>MXN8.11</h3>;
      } else if (country === "hong kong") {
        return <h3>HKD3.80</h3>;
      } else if (country === "turkey") {
        return <h3>₺12.93</h3>;
      } else if (country === "south africa") {
        return <h3>R9.03</h3>;
      } else if (country === "sweden") {
        return <h3>kr5.24</h3>;
      } else if (country === "norway") {
        return <h3>kr 5.12</h3>;
      } else {
        return <h3>$0.48</h3>;
      }
    };

    const Price2 = (props) => {
      const Pricing2 = ({ country }) => {
        if (country === "India") {
          return <h3>₹70</h3>;
        } else if (country === "europe") {
          return <h3>€0.77</h3>;
        } else if (country === "united kingdom") {
          return <h3>£0.66</h3>;
        } else if (country === "japan") {
          return <h3>¥100.89</h3>;
        } else if (country === "canada") {
          return <h3>CAD0.95</h3>;
        } else if (country === "australia") {
          return <h3>AUD1.07</h3>;
        } else if (country === "switzerland") {
          return <h3>Fr0.62</h3>;
        } else if (country === "china") {
          return <h3>¥5.04</h3>;
        } else if (country === "brazil") {
          return <h3>R$3.36</h3>;
        } else if (country === "south korea") {
          return <h3>₩914.56</h3>;
        } else if (country === "singapore") {
          return <h3>SGD0.93</h3>;
        } else if (country === "new zealand") {
          return <h3>NZD1.16</h3>;
        } else if (country === "mexico") {
          return <h3>MXN11.58</h3>;
        } else if (country === "hong kong") {
          return <h3>HKD5.43</h3>;
        } else if (country === "turkey") {
          return <h3>₺18.47</h3>;
        } else if (country === "south africa") {
          return <h3>R12.90</h3>;
        } else if (country === "sweden") {
          return <h3>kr9.07</h3>;
        } else if (country === "norway") {
          return <h3>kr8.91</h3>;
        } else {
          return <h3>$0.69</h3>;
        }
      };
    }

const Price3 = (props) => {
  const Pricing3 = ({ country }) => {
    if (country === "India") {
      return <h3>₹120</h3>;
    } else if (country === "europe") {
      return <h3>€1.32</h3>;
    } else if (country === "united kingdom") {
      return <h3>£1.13</h3>;
    } else if (country === "japan") {
      return <h3>¥141.44</h3>;
    } else if (country === "canada") {
      return <h3>CAD1.32</h3>;
    } else if (country === "australia") {
      return <h3>AUD1.50</h3>;
    } else if (country === "switzerland") {
      return <h3>Fr0.86</h3>;
    } else if (country === "china") {
      return <h3>¥7.07</h3>;
    } else if (country === "brazil") {
      return <h3>R$4.70</h3>;
    } else if (country === "south korea") {
      return <h3>₩1288.38</h3>;
    } else if (country === "singapore") {
      return <h3>SGD1.31</h3>;
    } else if (country === "new zealand") {
      return <h3>NZD1.62</h3>;
    } else if (country === "mexico") {
      return <h3>MXN16.33</h3>;
    } else if (country === "hong kong") {
      return <h3>HKD7.60</h3>;
    } else if (country === "turkey") {
      return <h3>₺25.86</h3>;
    } else if (country === "south africa") {
      return <h3>R18.04</h3>;
    } else if (country === "sweden") {
      return <h3>kr10.49</h3>;
    } else if (country === "norway") {
      return <h3>kr10.24</h3>;
    } else {
      return <h3>$0.92</h3>;
    }
  }
}

  
    const [name, setName] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchUsersHandler = useCallback(async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      try {
        const response = await fetch("http://localhost:8080/users/", {
          headers: {
            Authorization: token,
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
  
        const data = await response.json();
        const transformedUsers = data.user.map((userData) => {
          return {
            first_name: userData.first_name,
            last_name: userData.last_name,
            country: userData.country,
          };
        });
  
        setName(transformedUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
  
      setLoading(false);
    }, []);
  
    useEffect(() => {
      fetchUsersHandler();
    }, [fetchUsersHandler]);
  
    return (
      <div className="produc">
        {name.map((user, index) => (
          <div>
            <Pricing country={user.country} />
            </div>
        ))}
      </div>
    );
        }

          const Price2 = (props) => {
            const Pricing2 = ({ country }) => {
              if (country === "India") {
                return <h3>₹70</h3>;
              } else if (country === "europe") {
                return <h3>€0.77</h3>;
              } else if (country === "united kingdom") {
                return <h3>£0.66</h3>;
              } else if (country === "japan") {
                return <h3>¥100.89</h3>;
              } else if (country === "canada") {
                return <h3>CAD0.95</h3>;
              } else if (country === "australia") {
                return <h3>AUD1.07</h3>;
              } else if (country === "switzerland") {
                return <h3>Fr0.62</h3>;
              } else if (country === "china") {
                return <h3>¥5.04</h3>;
              } else if (country === "brazil") {
                return <h3>R$3.36</h3>;
              } else if (country === "south korea") {
                return <h3>₩914.56</h3>;
              } else if (country === "singapore") {
                return <h3>SGD0.93</h3>;
              } else if (country === "new zealand") {
                return <h3>NZD1.16</h3>;
              } else if (country === "mexico") {
                return <h3>MXN11.58</h3>;
              } else if (country === "hong kong") {
                return <h3>HKD5.43</h3>;
              } else if (country === "turkey") {
                return <h3>₺18.47</h3>;
              } else if (country === "south africa") {
                return <h3>R12.90</h3>;
              } else if (country === "sweden") {
                return <h3>kr9.07</h3>;
              } else if (country === "norway") {
                return <h3>kr8.91</h3>;
              } else {
                return <h3>$0.69</h3>;
              }
            };
        
          const [name, setName] = useState([]);
          const [loading, setLoading] = useState(false);
        
          const fetchUsersHandler = useCallback(async () => {
            setLoading(true);
            const token = localStorage.getItem("token");
            
            try {
              const response = await fetch("http://localhost:8080/users/", {
                headers: {
                  Authorization: token,
                },
              });
        
              if (!response.ok) {
                throw new Error("Failed to fetch user data.");
              }
        
              const data = await response.json();
              const transformedUsers = data.user.map((userData) => {
                return {
                  first_name: userData.first_name,
                  last_name: userData.last_name,
                  country: userData.country,
                };
              });
        
              setName(transformedUsers);
            } catch (error) {
              console.error("Error fetching user data:", error);
            }
        
            setLoading(false);
          }, []);
        
          useEffect(() => {
            fetchUsersHandler();
          }, [fetchUsersHandler]);
        
          return (
            <div className="produc">
              {name.map((user, index) => (
                <div>
                  <Pricing2 country={user.country} />
                  </div>
              ))}
            </div>
          );
              }
            
            const Price3 = (props) => {
              const Pricing3 = ({ country }) => {
                if (country === "India") {
                  return <h3>₹120</h3>;
                } else if (country === "europe") {
                  return <h3>€1.32</h3>;
                } else if (country === "united kingdom") {
                  return <h3>£1.13</h3>;
                } else if (country === "japan") {
                  return <h3>¥141.44</h3>;
                } else if (country === "canada") {
                  return <h3>CAD1.32</h3>;
                } else if (country === "australia") {
                  return <h3>AUD1.50</h3>;
                } else if (country === "switzerland") {
                  return <h3>Fr0.86</h3>;
                } else if (country === "china") {
                  return <h3>¥7.07</h3>;
                } else if (country === "brazil") {
                  return <h3>R$4.70</h3>;
                } else if (country === "south korea") {
                  return <h3>₩1288.38</h3>;
                } else if (country === "singapore") {
                  return <h3>SGD1.31</h3>;
                } else if (country === "new zealand") {
                  return <h3>NZD1.62</h3>;
                } else if (country === "mexico") {
                  return <h3>MXN16.33</h3>;
                } else if (country === "hong kong") {
                  return <h3>HKD7.60</h3>;
                } else if (country === "turkey") {
                  return <h3>₺25.86</h3>;
                } else if (country === "south africa") {
                  return <h3>R18.04</h3>;
                } else if (country === "sweden") {
                  return <h3>kr10.49</h3>;
                } else if (country === "norway") {
                  return <h3>kr10.24</h3>;
                } else {
                  return <h3>$0.92</h3>;
                }
              }
                const [name, setName] = useState([]);
                const [loading, setLoading] = useState(false);
              
                const fetchUsersHandler = useCallback(async () => {
                  setLoading(true);
                  const token = localStorage.getItem("token");
                  
                  try {
                    const response = await fetch("http://localhost:8080/users/", {
                      headers: {
                        Authorization: token,
                      },
                    });
              
                    if (!response.ok) {
                      throw new Error("Failed to fetch user data.");
                    }
              
                    const data = await response.json();
                    const transformedUsers = data.user.map((userData) => {
                      return {
                        first_name: userData.first_name,
                        last_name: userData.last_name,
                        country: userData.country,
                      };
                    });
              
                    setName(transformedUsers);
                  } catch (error) {
                    console.error("Error fetching user data:", error);
                  }
              
                  setLoading(false);
                }, []);
              
                useEffect(() => {
                  fetchUsersHandler();
                }, [fetchUsersHandler]);
              
                return (
                  <div className="produc">
                    {name.map((user, index) => (
                      <div>
                        <Pricing3 country={user.country} />
                        </div>
                    ))}
                  </div>
                );
                    }
    return (
      <Fragment>
        <div className='maindivforplans'>
          <div className='headerplansetion'>
          <header>
            <h2>Dropment</h2>
            <ul>
              <Link to="/">
              <li><button>Back</button></li>
              </Link>
            </ul>
          </header>
          </div>
          <div className='plansfordropment'>
            <div className='plan1'>
              <section>
                <h1>Standard Plan</h1>
                <h1 className='priceplans'><Price1/></h1>
                <ul>
                  <li>200 sales a week</li>
                  <li>3 Templates</li>
                  <li>10 Shops</li>
                </ul>
                <button onClick={handleSubscription}>Upgrade</button>
              </section>
            </div>
            <div className='plan1'>
              <section>
                <h1>Premium Plan</h1>
                <h1 className='priceplans'><Price2/></h1>
                <ul>
                  <li>400 sales a week</li>
                  <li>All Templates</li>
                  <li>25 Shops</li>
                </ul>
                <button onClick={handleSubscription2}>Upgrade</button>
              </section>
            </div>
            <div className='plan1'>
              <section>
                <h1>Ultra Plan</h1>
                <h1 className='priceplans'><Price3/></h1>
                <ul>
                  <li>Unlimited sales a week</li>
                  <li>all Templates</li>
                  <li>Unlimited Shops</li>
                </ul>
                <button onClick={handleSubscription3}>Upgrade</button>
              </section>
            </div>
        </div>
        </div>
      </Fragment>
    );
  }

export default SubscriptionFormInner;