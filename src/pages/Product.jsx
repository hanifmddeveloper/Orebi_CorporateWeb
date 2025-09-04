import React, { useContext, useEffect, useState } from 'react'
import Container from "../components/Container"
import { ApiData } from '../components/ContextApi'
import Pagination from '../components/Pagination'
import { ImListNumbered } from "react-icons/im";
import { FaBorderAll } from "react-icons/fa6";
import Post from '../components/Post'
import { Link } from 'react-router';



const Product = () => {

let info = useContext(ApiData)
 console.log(info);
  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)
  let[categoryp,setCategoryp] = useState([])
  let [filterShow,setFilterShow] = useState([])
  let [listItem,setListItem]= useState("")
  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage,lastPage)   // so now we send allPage insted of info
 console.log(allPage);


let pageNumber = []
  for(let i=0; i< Math.ceil(info.length / perPage);i++){
   pageNumber.push(i)
  }
// console.log(pageNumber); 
let paginate =(index)=>{
  setCurrentPage(index+1);
  
}

let next =()=>{
  if(currentPage < pageNumber.length){
    setCurrentPage((state)=>state+1)
  }
  
}
let previous =()=>{
  if(currentPage > 1){
  setCurrentPage((state)=>state-1)
}
}

let handlePerPageChange =(e)=>{
 // console.log("ami",e.target.value);
  setPerPage(e.target.value)
  
}
useEffect(()=>{
setCategoryp([...new Set(info.map((item)=>item.category))])
},[info])

let handalCategory = (citem)=>{
//console.log("ami",citem);
let cateFilter = info.filter((item)=>item.category == citem)
//console.log("ami",citem);
setFilterShow(cateFilter)
//console.log(cateFilter);
}
let handleAll = ()=>{
//console.log("ami");
setFilterShow("")
}

let handleListItem = ()=>{
 setListItem("active")
}

//console.log(listItem);


  return (
    <section>
        <Container>
        <div className='py-10' >
        <h2 className='font-dm text-[49px] text-[#262626] font-bold' >Products</h2>
        <p><Link to="/">Home</Link> / <Link to="/product">Product</Link></p>
        </div>
        <div className="flex justify-between" >
         <div className='w-[20%]' >
          <h2 className='text-[#262626] font-dm text-[20px] font-bold' >Shop by Category</h2>
          <ul>
          <li onClick={handleAll} className='font-dm text-[16px] text-[#262626] font-normal' >All Products</li>
        </ul>
          <ul className='' >
            {categoryp.map((item)=>(
              <li onClick={()=>handalCategory(item)} className='text-[#262626] font-dm text-[16px] font-normal' >{item}({item.length})</li>
             ))}
          </ul>
          </div>
          
          <div className='w-[80%]' >
          <div className='flex justify-between' >
           <div className="flex gap-5" >
            <div onClick={handleListItem} className={`cursor-pointer ${listItem == "active" ? "text-[#262626] p-[5px] rounded-[5px] text-3xl bg-green-500 " : "text-black p-[5px] rounded-[5px] text-3xl bg-blue-50" }`}> 
            <ImListNumbered /> 
            </div>
            <div onClick={()=>setListItem("")} className={`cursor-pointer ${listItem == "" ? "text-[#262626] p-[5px] rounded-[5px] text-3xl bg-green-500 " : "text-black p-[5px] rounded-[5px] text-3xl bg-blue-50" }`}>
            <FaBorderAll />
            </div>
            </div>
          <div className=' flex  items-center ml-[350px]' >
          <labil className='pr-2' htmlFor="">Feature by:</labil>
           <select name='' id='' className='py-1 px-3 border border-[#262626]' >
           <option value='3'>Price</option>
           <option value='6'>High to Low</option>
           <option value='9'>Low to High</option>
           
          </select>
          </div>
          <div className='flex  items-center mr-[60px]' >
          <labil className='pr-2' htmlFor="">Show:</labil>
           <select onChange={handlePerPageChange} name='' id='' className='py-1 px-3 border border-[#262626]' >
           <option value='3'>3</option>
           <option value='6'>6</option>
           <option value='9'>9</option>
           <option value='12'>12</option>
          </select>
          </div>
          </div>
          <Post allPage ={allPage} filterShow={filterShow} listItem={listItem} />
          <Pagination pageNumber={pageNumber} paginate={paginate} next={next} previous={previous} currentPage={currentPage}/>
          </div>
          </div>
       </Container>
    </section>
  )
}

export default Product