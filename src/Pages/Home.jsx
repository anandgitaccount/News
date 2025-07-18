import React, { useContext, useEffect, useState } from 'react'
import Topheadline from './Topheadline';
import { Link } from 'react-router-dom';
import NewsContext from '../context/NewsContext';


const Home = () => {
    const [articles, setArticles]=useState([])
    console.log(articles)
     let ctx=useContext(NewsContext);
     console.log(ctx.search)

    let getAllData=async()=>{
        let res=await fetch(`https://newsapi.org/v2/everything?q=${ctx.search?ctx.search:'world'}&apiKey=4916d5b5109845c5b43ffdd6cbfaa3b0`);
        let data= await res.json();
        setArticles(data.articles)
      
      
       

    }
    useEffect(()=>{
        getAllData();
    },[ctx.search]);

   
    //using card prpos

  return (
    <>
      <div className='flex w-[100%] sm:w-[74%] md:w-[72%] p-2 absolute justify-between mt-[75px] '>
        <div className=' gap-2 grid grid-cols-12 h-auto   ' >
        {
          articles.map((ele)=>{
            return ele.urlToImage &&   <div className='md:col-span-4 sm:col-span-6  col-span-12  p-2'>
              < img src={ele.urlToImage} alt="" />
              <Link to={ele.url} className='text-blue-700 ' href=''>{ele.title}</Link>
              <p className='text-sm'>{ele.description}</p>
              <p className='text-xs'>Date:-{ele.publishedAt}</p>
              <h1 className='font-bold text-xs'>{ele.source.name} </h1>
            </div>
          })
        }

        </div>
        <div className=' bg-red-500  w-[26%] hidden sm:block md:block  fixed overflow-hidden right-0   '>
        <h2 className='  text-center absolute font-bold bg-gray-500 h-8 w-[100%] z-50'>Top Headline</h2>
       <div className='mainDiv'>
        <div className=' topHeadline '>
       <Topheadline/>
        </div>
        <div className=' topHeadline mt-0 overflow-hidden relative '>
       <Topheadline/>
        </div>
        

       
        </div>
       </div>
      </div>
    </>
  )
}

export default Home
