import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Dashbord/Dashbord.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart,Bar,PieChart,Pie } from 'recharts';
import { Link } from 'react-router-dom';
const Dashbord = () => {
  const [total_count, setTotalCount] = useState(null);
  const [active_count, setactive] = useState(null);
  const [setup_pending_count, setpendingcount] = useState(null);
  const [approvelcount, setapprovelcount] = useState(null)
  const [massages, setmassage] = useState(null)

  // Pending State 
 
  useEffect(() => {
    axios
      .get('https://bsoapp.in/servicefinder/api/ss/api_bsoapp_v1.php?action=get_bsocust')
      .then((res) => {
        const responseData = res.data;
        const totalCount = responseData.total_count;
        const totalactive = responseData.active_count;
        const pendingcount = responseData.setup_pending_count;
        const approvpencou = responseData.approval_pending_count;
        const massage = responseData.msg;
        setTotalCount(totalCount);
        setactive(totalactive)
        setpendingcount(pendingcount)
        setapprovelcount(approvpencou)
        setmassage(massage)
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []); 



  // Section for order items
const [backlog, setbacklog] = useState([])
const [Todayorder, setTodayorder] = useState([])
const [Ordercount, setOrdercount] = useState([])
const [OrderCreated, setOrderCreated] = useState([])
const [TodayCreateorder, setTodayCreateorder] = useState([])
const [PartnerResponcepending, setPartnerResponcepending] = useState([])
const [TodayPartnerResponcepending, setTodayPartnerResponcepending] = useState([])
const [PartnerAssing, setPartnerAssing] = useState([])
const [TodayAssingPartner, setTodayAssingPartner] = useState([])
const [Orderstarted, setOrderstarted] = useState([])
const [TodayOrderStarted, setTodayOrderStarted] = useState([])
const [OrderComplted, setOrderComplted] = useState([])
const [TodayOrderComplet, setTodayOrderComplet] = useState([])
const [OrderClosed, setOrderClosed] = useState([])
const [TodayOrderClose, setTodayOrderClose] = useState([])
const [OrderCancelld, setOrderCancelld] = useState([])
const [Todayordercancelld, setTodayordercancelld] = useState([])


 useEffect(()=>{
axios.get('https://bsoinfotech.com/servicefinder/api/api_admnew1.php?action=summaryscreen1').then((res2)=>{
  const backlogdata = res2.data
  const maindata = backlogdata.out_data
  const backlogdata3 = maindata.backlogord
  const Todayorder = maindata.today_ord
  const TotalOrdercount = maindata.total_ord
  const CreatedOrder = maindata.ord_10
  const TodayCreatedOrder = maindata.ord_101
  const PartnerResponcePending = maindata.ord_20
  const PartnerResponcependingToday = maindata.ord_201
  const AssingPartner = maindata.ord_50
  const AssingPartnerToday = maindata.ord_501
  const ToatlOrderstarted = maindata.ord_60
  const TodayOrderstarted = maindata.ord_601
  const TotalorderComplte = maindata.ord_70
  const TodayCompltOrder = maindata.ord_701
  const Totalorderclose = maindata.ord_80
  const TodayOrderClose = maindata.ord_801
  const TotalOrderCancelld = maindata.ord_99
  const Todaycancelldorder = maindata.ord_991



  setTodayordercancelld(Todaycancelldorder)
  setOrderCancelld(TotalOrderCancelld)
  setTodayOrderClose(TodayOrderClose)
  setOrderClosed(Totalorderclose)
  setTodayOrderComplet(TodayCompltOrder)
  setOrderComplted(TotalorderComplte)
  setTodayOrderStarted(TodayOrderstarted)
  setOrderstarted(ToatlOrderstarted)
  setTodayAssingPartner(AssingPartnerToday)
  setPartnerAssing(AssingPartner)
  setTodayPartnerResponcepending(PartnerResponcependingToday)
  setPartnerResponcepending(PartnerResponcePending)
  setTodayCreateorder(TodayCreatedOrder)
  setOrderCreated(CreatedOrder)
  setOrdercount(TotalOrdercount)
 setbacklog(backlogdata3)
 setTodayorder(Todayorder)
}).catch((err)=>{
  console.warn(err)
})
 },[])
  // data calling 




  const Data = [
    { name: 'January', value: 50 },
    { name: 'February', value: 60 },
    { name: 'March', value: 70 },
    { name: 'April', value: 65 },
    { name: 'May', value: 80 },
    { name: 'June', value: 75 },
  ];

  const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// Round Graph Chat

const data2 = [
  { name: 'Sunday', value: 400 },
  { name: 'Monday', value: 300 },
  { name: 'Tuesday', value: 300 },
  { name: 'Wednesday', value: 600 },
  { name: 'Thursday', value: 500 },
  { name: 'Friday', value: 180 },
  { name: 'Saturday', value: 800 },
];
  

  return (
    <>
    <div className="scrollable-container">
    <div className='maindiv'>
    <div className="subdiv">

    <div className="one">


   <Link className='containerlink' to={'/totalusers'}> 
   <div className="container1">
    <div className="text">
      <span className="count">
        {total_count || 0}
      </span>
      <p>Total Users</p>
    </div>
    <div className="icon">
      <p><i class="fa-solid fa-users"></i></p>
      <div className="increasratio">
      <span className="increas">
      <i class="fa-solid fa-caret-up"></i> 29,63.12%
      </span>
      </div>

    </div>
   </div>
   </Link>
   {/* Second Div */}
   <Link className='containerlink' to={'/Activecustomer'}> 
   <div className="container1">
    <div className="text">
      <span className="count">
        {active_count || 0}
      </span>
      <p>Active Users</p>
    </div>
    <div className="icon">
      <p><i class="fa-solid fa-bolt"></i></p>


      <div className="increasratio">
      <span className="increas">
      <i class="fa-solid fa-caret-up"></i> 225.36%
      </span>
      </div>


    </div>
   </div>
   </Link>


{/* Therd div */}


<Link className='containerlink' to={'/customerstatususer'}> 
   <div className="container1">
    <div className="text">
      <span className="count">
        {setup_pending_count || 0}
      </span>
      <p>Pending</p>
    </div>
    <div className="icon">
      <p><i class="fa-solid fa-shapes"></i></p>

      <div className="increasratio">
      <span className="increas">
      <i class="fa-solid fa-caret-up"></i> 172.22%
      </span>
      </div>

    </div>
   </div>
   </Link>
   </div>
   {/* fifth div */}

<div className="two">


   <Link className='containerlink' to={'/customerstatususer'}> 
   <div className="container1">
    <div className="text">
      <span className="count">
        {approvelcount || 0}
      </span>
      <p>Approvel Pending</p>
    </div>
    <div className="icon">
      <p><i class="fa-solid fa-clock"></i></p>

      <div className="increasratio">
      <span className="increas">
      <i class="fa-solid fa-caret-up"></i> 0.96%
      </span>
      </div>

    </div>
   </div>
   </Link>

{/* Sixth */}
<Link className='containerlink' to={'/customerstatususer'}> 
   <div className="container1">
    <div className="text">
      <span className="count">
        {massages || 'Fetching'}
      </span>
      <p>Server Status</p>
    </div>
    <div className="icon">
      {/* <p><i class="fa-solid fa-database"></i></p> */}
    </div>
   </div>
   </Link>
</div>

    </div>
<div className="mainchat">

<div className="chart">
<ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
</div>
<div className="chart1">
<ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
</div>


</div>
    <div className="ordersmain">
    <div className="orderlist">

   <div className="backlogdiv">
   <h4>TOTAL BACKLOG: {backlog || 0}</h4>
   </div>
   <div className="Todayorderdiv">
   <div className="orderdiv">
    <h4>TODAY'S ORDER: {Todayorder !== null ? Todayorder : 0}</h4>
</div>

   </div>
   <div className="TomorrowTodayorderdiv">
    <h4>TOMORROW ONWARDS ORDER: 8</h4>
   </div>
   <div className="Ordercountdiv">
    <h4>Order Count: {Ordercount}</h4>
   </div>
    <table className='ordertabil'>
    
        <thead>
            <tr className='ordtr'>
                <th className='orderth'>Customer</th>
                <th className='orderth'>Total</th>
                <th className='orderth'>#Today</th>
            </tr>
        </thead>
        <tbody>
      
            <tr>
                <td className='odertd'>Order Created</td>
                <td className='odertd'>{OrderCreated}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
                <td className='odertd'>{TodayCreateorder}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
            </tr>
            <tr>
                <td className='odertd'>Partner Responce Pending</td>
                <td className='odertd'>{PartnerResponcepending}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
                <td className='odertd'>{TodayPartnerResponcepending}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
            </tr>
            <tr>
                <td className='odertd'>Partner Assing</td>
               
         <td className='odertd'>{PartnerAssing}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
         <td className='odertd'>{TodayAssingPartner}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
            </tr>
            <tr>
                <td className='odertd'>Order Started</td>
                <td className='odertd'>{Orderstarted}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
                <td className='odertd'>{TodayOrderStarted}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
            </tr>
            <tr>
                <td className='odertd'>Order Completd</td>
                <td className='odertd'>{OrderComplted}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
                <td className='odertd'>{TodayOrderComplet}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
            </tr>
            <tr>
                <td className='odertd'>Order Closed</td>
                <td className='odertd'>{OrderClosed}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
                <td className='odertd'>{TodayOrderClose}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
            </tr>
            <tr>
                <td className='odertd'>Order Cancelld</td>
                <td className='odertd'>{OrderCancelld}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
                <td className='odertd'>{Todayordercancelld}<Link className='mainlink'><i class="fa-solid fa-file"></i></Link></td> 
              
            </tr>
        </tbody>
       
    </table>
    </div>
    <div className="grapdiv">
    <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data2} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashbord