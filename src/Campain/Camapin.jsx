import React from 'react'
import '../Dashbord/Dashbord.css'
import { Link } from 'react-router-dom'
import Nodata from '../Images/nodata4.jpg'
const Camapin = () => {
  return (
    <div className="maindashbord">
    {/* <h4>Customer Details</h4> */}
      <div className="jobstatus">
        <ul className="oneul">
          <li>
            <Link className="filter">
              Filters<i className="fa-solid fa-chevron-down"></i>
            </Link>
          </li>
          <li>
            <Link to="/pending-requests" className='normal'>Connecting(0)</Link>
          </li>
          <li>
            <Link to="/payment" className='normal'>Facebook</Link>
          </li>
          <li>
            <Link to="/support" className='normal'>Google</Link>
          </li>
        </ul>
        <ul className="twoul">
          <li><Link className='normal'>Sort<i className="fa-solid fa-chevron-down"></i></Link></li>
          <li><Link className='normal'>Active</Link></li>
          <li><Link className='normal'>Connecting</Link></li>
          <li><Link className='specificbtn'>Record</Link></li>
        </ul>
      </div>
      <div className="data">
       <img src={Nodata} alt="" />
      </div>
    </div>
  )
}

export default Camapin
