import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Topheadline = () => {
    const [headline, setheadline]=useState([])
  

    let getAllData=async()=>{
        let res=await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7e753cc228274f60b6942b35efc8d932');
        let data= await res.json();

        setheadline(data.articles)
      
      
      
       

    }
    useEffect(()=>{
        getAllData()
    },[])
  return (
    <div>
      <div>
     {
         headline.map((ele)=>{
            return  ele.urlToImage  && <div className='h-20 flex gap-2 bg-slate-100 w-[100%]'>
                <img className='h-16' src={ele.urlToImage} alt="" />
                <Link to={ele.url} className='text-xs  text-blue-500 font-bold '>{ele.title}</Link>

            </div>
          })
     }
    </div>
    </div>
    
  )
}

export default Topheadline
