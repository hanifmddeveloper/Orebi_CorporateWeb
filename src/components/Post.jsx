import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { IoGitCompare } from 'react-icons/io5'
import { Link } from 'react-router'





const Post = ({allPage,filterShow,listItem}) => {
   // console.log(allPage);
   // console.log(filterShow);
   // console.log(listItem);
   let [cateFilterShow,setCateFilterShow]= useState([])

   useEffect(()=>{
    let cateAll = filterShow.slice(0,5)
    setCateFilterShow(cateAll)
   },[filterShow])
    
  return (
    <>
    <div className=' flex flex-wrap justify-between' >
      {cateFilterShow.length > 0 ? (
          cateFilterShow.map((item) => (
            <div className="w-[32%]">
              <div className="relative group">
                <Link to={`/product/${item.id}`}>
                  <img className="bg-[#D8D8D8]" src={item.thumbnail} alt="" />
                </Link>
                <div className=" absolute bottom-0 left-0 w-full opacity-0 group hover:opacity-100">
                  <ul className="bg-[#262626] pr-3 pt-4 pb-4 py-2 w-[94.5%] cursor-pointer shadow-2xs">
                    <li className="flex justify-end items-center  gap-2">
                      <span className="text-white">Add to Wish List</span>
                      <FaHeart className="text-[red]" />
                    </li>
                    <li className="flex justify-end items-center gap-4">
                      <span className="text-white">Compare</span>
                      <IoGitCompare className='text-[yellow]'  />
                    </li>
                    <li className="flex justify-end items-center gap-4">
                      <span className="text-white">Add to Cart</span>
                      <FaShoppingCart className='text-[green]' />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between mx-auto shadow-2xl border-1 border-[#4800ff1d] bg-[#716f6f] w-[94%] mr-4.5">
                <div className="">
                  <h3>{item.title}</h3>
                  <p>Black</p>
                </div>
                <div className="">
                  <h3 className="pl-3">${item.price}</h3>
                  <p className="pr-4 text-[red]">Stock {item.stock}</p>
                </div>
              </div>
            </div>
          )))
        : <div className={`${listItem == 'active' ? 'w-full' : 'w-full flex flex-wrap'}`} >
          {allPage.map((item) => (
              <div className="w-[32%] ">
                <div className="relative group">
                  <Link to={`/product/${item.id}`}>
                    <img className="bg-[#D8D8D8]" src={item.thumbnail} alt="" />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-[94.5%] transform translate-y-full opacity-0 transition-all duration-900 group-hover:translate-y-0 group-hover:opacity-100 ">
                    <ul className="bg-[rgba(39,37,37,0.7)] pr-3 pt-4 pb-4 py-2 shadow-2xl border-1 border-[#4800ff1d]">
                      <li className="flex justify-end items-center gap-4">
                        <span className="text-white">Add to Wish List</span>
                        <FaHeart className="text-[red]" />
                      </li>
                      <li className="flex justify-end items-center gap-4">
                        <span className="text-white">Compare</span>
                        <IoGitCompare className="text-[yellow]" />
                      </li>
                      <li className="flex justify-end items-center gap-4">
                        <span className="text-white">Add to Cart</span>
                        <FaShoppingCart className="text-[green]" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mx-auto bg-[rgb(160,158,158)] w-[94.5%] mr-5">
                  <div className="">
                    <h3 className="text-[13px]">{item.title}</h3>
                    <p>Black</p>
                  </div>
                  <div className="">
                    <h3 className="pl-3 text-[green]">${item.price}</h3>
                    <p className="pl-2 text-[red]">Stock {item.stock}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          }
            </div>
        </>
  )
}

export default Post