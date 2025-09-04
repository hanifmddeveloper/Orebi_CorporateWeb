import React, { useContext } from 'react'
import {ApiData} from "../components/ContextApi"
import Container from "../components/Container"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { FaHeart} from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
import { FaShoppingCart } from "react-icons/fa";
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'
import { Link } from 'react-router';

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="absolute right-[1px] top-[50%] w-[40px] h-[40px] leading-[40px] text-center rounded-full translate-y-[-50%] cursor-pointer z-[1] bg-[gray] mr-5"
      onClick={onClick}
    ><GrFormPrevious className='inline-block'/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[9px] top-[50%] w-[40px] h-[40px] leading-[40px] text-center rounded-full translate-y-[-50%] cursor-pointer z-[1] bg-[gray]"
      onClick={onClick}
    > <MdNavigateNext className='inline-block' />
    </div>
  );
}




const Newarival = () => {
let data = useContext(ApiData)
console.log(data);
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
   
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (
    <section>
    <Container>
      <h2 className='font-dm text-[39px] font-bold text-[#262626]' >New Arrivals</h2>
    
    <div className='' >
      <Slider {...settings}>
      {data.map((item)=>(
      <div className='w-[24%]'>
        <div className='relative group'>
          <Link to="/product">
          <img className='bg-[#D8D8D8]' src={item.thumbnail} alt=''/>
          </Link>
        <div className='absolute bottom-0 left-0 w-[97%] transform translate-y-full opacity-0 cursor-pointer transition-all duration-900 group-hover:translate-y-0 group-hover:opacity-100'>
          <ul className='bg-[rgba(39,37,37,0.7)] pr-3 pt-4 pb-4 py-2 shadow-lg' >
            <li className='flex justify-end items-center gap-4' ><span className='text-[#fff] text-[16px] font-dm font-medium hover:text-[rgb(237,237,132)] '>Add to Wish List</span><FaHeart  className='text-[yellow]'/></li>
            <li className='flex justify-end items-center gap-4'  ><span className='text-[#fff] text-[16px] font-dm font-medium hover:text-[rgb(98,240,98)]'>Compare</span><IoGitCompare className='text-[green]' /></li>
            <li className='flex justify-end items-center gap-4'  ><span className='text-[#fff] text-[16px] font-dm font-medium hover:text-[rgb(241,92,92)]' >Add to Cart</span><FaShoppingCart className='text-[red]' /></li>
          </ul>
        </div>
        </div>
          <div className='flex justify-between mx-auto  bg-[#6d6c6c] w-[97%] mr-3' >
             <div className='' >
            <h3>{item.title}</h3>
            <p>Black</p>
          </div>
   
          <div className='' >
            <h3 className='pl-3'>${item.price}</h3>
            <p className='pr-4 text-[red]'>Stock {item.stock}</p>
          </div> 
        </div>
      </div> 
     ))}
      </Slider>
    </div>
    </Container>
  </section>
    
  )
}

export default Newarival