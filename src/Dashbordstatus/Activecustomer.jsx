import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Dashbordstatus/Activecustomer.css';
import Component from '../Component/Component';
import { Link } from 'react-router-dom';

const Activecustomer = () => {
  const [active, setactive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://bsoapp.in/servicefinder/api/ss/api_bsoapp_v1.php?action=get_bsocust')
      .then((res) => {
        const responseData = res.data;
        const setupPendingCust = responseData.active_cust || [];
        setactive(setupPendingCust);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Filter the active array based on the searchQuery Bso clients 
  const filteredActive = active.filter((item) => {
    const { user_whatsapp, user_email, company_id } = item;
    const query = searchQuery.toLowerCase();

    return (
      user_whatsapp.toLowerCase().includes(query) ||
      user_email.toLowerCase().includes(query) ||
      company_id.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {loading ? (
       
        <Component/>
      ) : (
        <div className="scrollable-table">
    <h4 className='tophead'>Active Users <i class="fa-solid fa-people-group"></i></h4>
          <div className="searchbox">
            <div className="alinesearch">
              <input
                type="text"
                placeholder='Search....'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <table className="user-table">
            <thead>
              <tr>
                <th className='tabilhead'>ID</th>
                <th className='tabilhead'>Name</th>
                <th className='tabilhead'>User Contract</th>
                <th className='tabilhead'>User Email</th>
                <th className='tabilheadone'><p>Details</p></th>
              </tr>
            </thead>
            <tbody>
              {filteredActive.map((item) => (
                <tr key={item.company_id}>
                  <td className='tdclass'>{item.company_id}</td>
                  <td className='tdclass'>{item.businessname || 'N/A'}</td>
                  <td className='tdclass'>+{item.user_whatsapp || 'N/A'}</td>
                  <td className='tdclass'>{(item.user_email || 'N/A').substring(0, 7)}**</td>
                  <td className='tdclassone'><Link  to={`/getuserdata/${item.company_id}`}><i class="fa-solid fa-address-card"></i></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Activecustomer;
