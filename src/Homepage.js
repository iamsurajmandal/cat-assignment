import React, {useState, useCallback} from 'react'
import Timeline from './Timeline'
import Navbar from './Navbar'
import "./Homepage.css"

export default function Homepage() {
  const [catInfo, setCatInfo] = useState({})
  const handleChange = useCallback((data)=>{
    setCatInfo(data)
  },[catInfo])
  return (
    <div className='homepage'>
   <div className="homepage__timeline">
    <Timeline setCatInfo={handleChange}/>
   </div>
   <div className='homepage__nav'>
    <Navbar catInfo={catInfo}/>
   </div>
 </div>
  )
}
