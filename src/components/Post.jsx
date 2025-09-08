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
   let [show,setShow] = useState(true)

   useEffect(()=>{
    let cateAll = filterShow.slice(0,5)
    setCateFilterShow(cateAll)
   },[filterShow])

   let handleShow = ()=>{
    setCateFilterShow(filterShow)
    setShow(false)
   }

   let handleLess = ()=>{
    let cateAll = filterShow.slice(0,5)
    setCateFilterShow(cateAll)
    setShow(true)
   }
    
  return (
    <>
    <div className=' flex flex-wrap justify-between' >
     {cateFilterShow.length > 0 ?
    <div className=''>
      <div className='flex flex-wrap justify-between' >
     {cateFilterShow.map((item) => (
             <div className={`${cateFilterShow.length == 1 ? 'w-full ml-10' : 'w-[32%]'}`}>
             {/* <div className="w-[32%]"> */}
              <div className="relative group">
                <Link to={`/product/${item.id}`}>
                  <img className="bg-[#D8D8D8] w-full" src={item.thumbnail} alt="" />
                </Link>
                <div className=" absolute bottom-0 left-0 w-full opacity-0 group hover:opacity-100">
                  <ul className="bg-[#262626] pr-3 pt-4 pb-4 py-2 cursor-pointer shadow-2xs w-full">
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
              <div className="flex items-center justify-between shadow-2xl border-1 border-[#434040] bg-[#6c6969]">
                <div className="">
                  <h3>{item.title}</h3>
                  <p>Black</p>
                </div>
                <div className="">
                  <h3 className="pl-3">${item.price}</h3>
                  <p className=" text-[red]">Stock {item.stock}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
          {filterShow.length > 5 && 
          show ?
          <h2 onClick={handleShow} className='mt-3 border-1 border-[#5f5d5d] inline-block px-2 py-1 bg-[gray] cursor-pointer' >Show All</h2> 
          : filterShow.length > 5 && 
          <h2 onClick={handleLess} className='mt-3 border-1 border-[#858383] inline-block px-7 py-1 bg-[gray] cursor-pointer' >Less</h2> }
        
    </div>
        : <div className={`${listItem == 'active' ? 'w-full' : 'w-full flex justify-between flex-wrap'}`} >
          {allPage.map((item) => (
              <div className="w-[32%] ">
                <div className="relative group ">
                  <Link to={`/product/${item.id}`}>
                    <img className="bg-[#D8D8D8] w-full" src={item.thumbnail} alt="" />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full transform translate-y-full opacity-0 transition-all duration-900 group-hover:translate-y-0 group-hover:opacity-100 ">
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
                <div className="flex items-center justify-between bg-[rgb(137,132,132)] w-full shadow-2xl">
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