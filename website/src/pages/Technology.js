import React, { useState } from "react";
import {useEffect} from 'react'
import data from '../js/data.json'

function Technology (){
         // Destructuring the destrition from data.json
            const {technology} = data;
            //useState to set value of index that in technology
            const [position , setPosition] =useState(0)
            // function to get the index of the technology data
            const getIndex=(e)=>{
                let item = e.target.getAttribute("data-filter")
                technology.map((ele ,index)=>{
                    if(index == item){
                        setPosition(index)
                    }
                })
            }
            // set the data of the technology
            const dataItem = technology[position];
            
            // funciton handle with the destination image when toggle the width
            const getImage = ()=>{
                const width = window.innerWidth;
                let image ="";
                if(width >= 785){
                    image = dataItem.images.portrait
                }else{
                    image = dataItem.images.landscape
                }
                return image
            }
      //useEffect to set the background image for the three width of page
            useEffect(()=>{
            const home = document.querySelector(".home")
            if(window.innerWidth <=765 && window.innerWidth > 375){
                home.style.backgroundImage = `url("./assets/technology/background-technology-tablet.jpg")`
            }else if(window.innerWidth < 375){
                home.style.backgroundImage = `url("./assets/technology/background-technology-mobile.jpg")`
            }else{
                home.style.backgroundImage = `url("./assets/technology/background-technology-desktop.jpg")`
            }
    },[])

    return(
        <div className="home technology_home pt-24 md:pt-32 lg:pl-24 pb-16">
            <h4 className="titel technology_home_titel text-xl md:text-3xl mb-9 mt-9 ml-10 md:ml-0">
                <span className="pr-1 opacity-40 font-semibold mr-1">03</span> Space launch 101
            </h4>
            <div className="content" key={dataItem.name}>
                <div className="div-1 technology_overlay my-1">
                    <div className="toggle_technology_content">
                        {
                            technology.map((e, index ,array)=>{
                                return <span data-filter={index} onClick={getIndex} key={e.name} 
                                            className={`w-12 sm:w-14 md:mx-0 mx-4 sm:my-5 my-2  ${index ==position ? "active" :""}`}>
                                            {index +1}
                                    </span>
                            })
                        }
                    </div>
                    <div className="technology_details">
                        <p>The terminology...</p>
                        <h3 className="text-5xl sm:text-6xl py-3">{dataItem.name}</h3>
                        <p>{dataItem.description}</p>
                    </div>
                </div>
                <div className="div-2 tech-image ml-auto my-1">
                        <img src={getImage()} alt={`${dataItem.name} image in technology page`}/>
                </div>
            </div>
        </div>
    )
}

export default Technology;