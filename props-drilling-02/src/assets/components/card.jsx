import React from 'react'
import { Bookmark } from "lucide-react";
const card = () => {
  return (
   
   <div className="parent">
     
      <div className="card">
        <div className="top">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32Ua8H2HcpuzNhQAuWmJ-__qG12Y0wrOiu8inOZJ05Q&s=10" alt="" />
            <button>Save <Bookmark size={15} color='#3333' /></button>
        </div>
        <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI & UX Designer</h2>
            <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h3>$120/hr</h3>
                <p> Lhr</p>
            </div>
                <button>Apply Now</button>
        </div>
     </div>
    </div>
  
  )
}

export default card
