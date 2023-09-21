import React, { useEffect, useState } from 'react';
import '../UserData/Userdata.css';
import profile from '../Images/profile.png';

import axios from 'axios';
import Component from '../Component/Component';

const Userdata = () => {
  const [defaultwhatsapp, setdefaultwhatsapp] = useState([]);
  const [Phone, setPhone] = useState([]);
  const [whatsapploop, setwhatsapploop] = useState([]);
  const [Email, setEmail] = useState([]);
  const [ComapnyName, setComapnyName] = useState([]);
  const [Logoi, setLogo] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true before making the API call
    axios
      .get('https://bsoapp.in/servicefinder/api/ss/api_mwbp1.php?action=get_card1')
      .then((result) => {
        const maindata = result.data;
        const Defawhatsapp = maindata.primary_dtl;
        const Mobile = maindata.phone;
        const whatsapploops = maindata.secondary_dtl;
        const Emails = maindata.email;
        const Company = maindata.company_name;
        const Logos = maindata.Logo;
        setLogo(Logos);
        setComapnyName(Company);
        setEmail(Emails);
        setPhone(Mobile);

        // Check if Defawhatsapp is an array and not empty
        if (Array.isArray(Defawhatsapp) && Defawhatsapp.length > 0) {
          const waNumber = Defawhatsapp[0].wa_number;
          setdefaultwhatsapp(waNumber);
        }

        setwhatsapploop(whatsapploops);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.warn(error);
        setIsLoading(false); // Handle errors and set loading to false
      });
  }, []);

  const [BuisnessType, setBuisnessType] = useState([]);
  const [Buisness, setBuisness] = useState([])
  useEffect(() => {
    axios
      .get('https://bsoapp.in/servicefinder/api/ss/api_mwbp1.php?action=get_card2&userid=1')
      .then((result1) => {
        const maindata1 = result1.data;
        const buisnessType = maindata1.primary_cat_name;
        const Buisnessty = maindata1.secondary_cat
        setBuisness(Buisnessty)
        setBuisnessType(buisnessType);
      });
  }, []);
 console.log(Buisness)
  const Active = <i className="fa-solid fa-circle-dot"></i>;
  const InActive = <i className="fa-solid fa-circle-xmark" style={{color:'red'}}></i>;

  return (
    <div className="scrollable-container">
      {isLoading ? ( // Conditionally render Loading...
       <Component/>
      ) : (
        <div className="hero-perent">
          <div className="hero-subperent">
            <div className="onediv">
              {/* Child Divs Like Cards  */}
              <div className="childone">
                <div className="first">
                  <p>
                    <i className="fa-solid fa-store"></i> {ComapnyName}
                  </p>
                  <div className="shopdetails">
                    <table className="usertabildata">
                      <thead>
                        <tr>
                          <th style={{ color: 'white' }}>Contact</th>
                          <th style={{ color: 'white' }}>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="maintabil">
                            <i className="fa-solid fa-phone"></i> Phone
                          </td>
                          <td className="maintabil">+{Phone}</td>
                        </tr>
                        <tr>
                          <td className="maintabil">
                            <i className="fa-brands fa-whatsapp"></i> WhatsApp{' '}
                          </td>
                          <td className="ooop">
                            +{defaultwhatsapp || "0000000000"}
                          </td>
                        </tr>
                        {whatsapploop.map((number, index) => {
                          return (
                            <tr key={index}>
                              <td className="maintabil">
                                <i className="fa-brands fa-whatsapp"></i> WhatsApp{' '}
                              </td>
                              <td className="ooop">
                                +{number.isd_code} {number.wa_number}{' '}
                                {number.status ? InActive : Active}
                              </td>
                            </tr>
                          );
                        })}
                        {/* Email Tags */}
                        <tr>
                          <td className="maintabil">
                            <i className="fa-solid fa-envelope"></i> Email
                          </td>
                          <td className="maintabil">{Email}</td>
                        </tr>
                        <tr>
                          <td className="maintabil">
                            <i className="fa-solid fa-briefcase"></i> Buisness{' '}
                          </td>
                          <td className="ooop">{BuisnessType}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="second">
                  <img src={Logoi || profile} alt="" />
                </div>
              </div>






              <div className="childtwo">

                <div className="subchildtwo">
                <h4>Service Catagory</h4>
                <table className='Childtwo Tabil'>
                {
  Buisness.slice(0, 6).map((data, index) => {
    const isChecked = data.status === "Enable"; // Check if data.status is "Enable"
    
    return (
      <tr key={index}>
        <td className='Childtwotabiltd'>{data.cat_id}</td>
        <td className='Childtwotabiltd'>{data.cat_name}</td>
        <td>
          <label className="small-toggle">
            <input type="checkbox" checked={isChecked} />
            <span className="slider"></span>
          </label>
        </td>
      </tr>
    );
  })
}

</table>


                </div>
              </div>

            </div>









            {/* End */}
            {/* Child Two Div */}
            <div className="twodiv">
              <div className="childthree"></div>
            </div>
            {/* End */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Userdata;
