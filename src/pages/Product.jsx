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
// console.log(info);
  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)
  let[categoryp,setCategoryp] = useState([])
  let [filterShow,setFilterShow] = useState([])
  let [listItem,setListItem]= useState("")
  let [active, setActive] = useState("grid");
  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  
  let allPage = info.slice(firstPage,lastPage)
 console.log(allPage);

 let [brand,setBrand]= useState([])


let pageNumber = []
  for(let i=0; i< Math.ceil(filterShow.length > 0 ? filterShow.length : info.length / perPage);i++){
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
setBrand([...new Set(info.map((item)=>item.brand))])
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

let handleBrand = (bitem)=>{
  //console.log("ami");
  let brandFilter = info.filter((item)=> item.brand == bitem)
//  console.log(brandFilter);
setFilterShow(brandFilter);
  
}

//console.log(brand);


  return (
    <section>
        <Container>
        <div className='py-10' >
        <h2 className='font-dm text-[49px] text-[#262626] font-bold' >Products</h2>
        <p><Link to="/">Home</Link> / <Link to="/product">Product</Link></p>
        </div>
        <div className="flex justify-between" >
         <div className='w-[22%]'>
          <div className='py-2 px-3 border border-[#262626] shadow-2xl' >
           <h2 className='text-[#262626] font-dm text-[20px] font-bold' >Shop by Category</h2>
          <ul className='' >
          <li onClick={handleAll} className='font-dm text-[16px] text-[#262626] font-normal' >All Products</li>
          {categoryp.map((item)=>(
          <li onClick={()=>handalCategory(item)} className='text-[#262626] font-dm text-[16px] font-normal' >{item}({item.length})</li>
           ))}
          </ul>
          </div>
          <div className='py-2 px-3 border border-[#262626] shadow-2xl w-full' >
            <h2 className='text-[#262626] font-dm text-[20px] font-bold mt-2 w-full' >Brand</h2>
            <ul>
              {brand.map((item)=>(
              <li onClick={()=>handleBrand(item)} className='w-full'>{item}</li>
              ))}
            </ul>
          </div>
          </div>
          
          <div className='w-[78%]' >
            <div className='flex items-center justify-between' >
          <div className="flex gap-3" >
            <div onClick={()=>setListItem("")} className={`${listItem == "active" ? "" : "bg-green-500"} p-3 rounded-[3px]`}>
            <FaBorderAll />
            </div>
            <div onClick={handleListItem } className={`${listItem == "active" ?  "bg-green-500" : ""} p-3 rounded-[3px]`} > 
            <ImListNumbered /> 
            </div>
            </div>
          <div className='flex justify-between' >
           <div className='pr-3' >
           <labil className='mr-3' htmlFor="">Feature by :</labil>
           <select name='' id='' className='py-1 px-2 border border-[#262626]' >
           <option value='3'>Price</option>
           <option value='6'>High to Low</option>
           <option value='9'>Low to High</option>
           </select>
           </div>
           <div className='pr-3 ' >
          <labil className='mr-3' htmlFor="">Show :</labil>
           <select onChange={handlePerPageChange} name='' id='' className='py-1 px-3 border border-[#262626]' >
           <option value='3'>3</option>
           <option value='6'>6</option>
           <option value='9'>9</option>
           <option value='12'>12</option>
          </select>
          </div>
          </div>
          </div>
          <Post allPage ={allPage} filterShow={filterShow} listItem={listItem} />
          {((filterShow.length === 0 && pageNumber.length > 1) || (filterShow.length > 1 && Math.ceil(filterShow.length / perPage) > 1)) && (
            <Pagination pageNumber={pageNumber} paginate={paginate} next={next} previous={previous} currentPage={currentPage}/>
          )}
          </div>
       </div>
      </Container>
    </section>
  )
}

export default Product