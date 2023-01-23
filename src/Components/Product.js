import React, { useState } from 'react';
import ProductInfo from "./ProductInfo";
import "./style.css";
const Product = () =>{
const [item,setItem]=useState(ProductInfo);
// console.log(item);
const [posItem,setPos]=useState(0);
const [cakeItem, setCakeItem]= useState(ProductInfo[0]);
const selectCake = (pos) =>{
    setCakeItem(ProductInfo[pos]); 
    setPos(pos);
}
  return (
    <>
    <div className="Container">
<h1>Cake Factory</h1>
<p className="cakeheading">Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor.</p>
<div className="CakeContainer">
{
    item.map((item, pos)=>{

        const arr=["classImg"];
        if(pos===posItem){
            arr.push("classImgBorder");
        }
        return(
            <img className={arr.join(' ')} src={item.image} onClick={()=>{selectCake(pos)}}/>
        )
    })
}
</div>
<div className="cakeInfo">
<h1>{cakeItem.name}</h1>
<img src={cakeItem.image}/>
<p>{cakeItem.descripion}</p>
<div className="bottomBox">
<h4>Price <span className="priceBg">{cakeItem.price}</span></h4>
<h4><span className="rateBg">{cakeItem.rating}</span></h4>
</div>
</div>
    </div>
    </>
  )
}

export default Product;


//old coding
{/* <div className="CakeContainer">
<img src="images/images.jpg" className={["classImg","classImgBorder"].join(' ')}/> 
<img src="images/redCake.jpg" className="classImg"/>
<img src="images/greenCake.jpg" className="classImg"/>
<img src="images/yellowCake.jpg" className="classImg"/> 
</div> */}

{/* <div className="cakeInfo">
<h1>Chocolate Cake</h1>
<h1>{cakeItem.name}</h1>
<img src="images/images.jpg"/>
<p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>
<div className="bottomBox">
<h4>Price <span className="priceBg">120₹</span></h4>
<h4><span className="rateBg">9.6</span></h4>
</div>
</div> */}