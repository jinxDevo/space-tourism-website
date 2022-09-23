import React ,{useEffect, useState} from "react";
import data from '../js/data.json'

function Crew (){
     // Destructuring the destrition from data.json
        const {crew} = data;
        //useState to set value of index that in crew
        const [position , setPosition] =useState(0)
        // function to get the index of the crew data
        const getIndex=(e)=>{
            let item = e.target.getAttribute("data-filter")
            crew.map((ele ,index)=>{
                if(index == item){
                    setPosition(index)
                }
            })
        }
        // set the data of the crew
        const dataItem = crew[position];

     //useEffect to set the background image for the three width of page
        useEffect(()=>{
        const home = document.querySelector(".home")
        if(window.innerWidth <=765 && window.innerWidth > 375){
            home.style.backgroundImage = `url("./assets/crew/background-crew-tablet.jpg")`
        }else if(window.innerWidth < 375){
            home.style.backgroundImage = `url("./assets/crew/background-crew-mobile.jpg")`
        }else{
            home.style.backgroundImage = `url("./assets/crew/background-crew-desktop.jpg")`
        }
},[])


    return(
        <div className="home crew-home pt-32  pt-24 md:pt-32">
                <h4 className="titel crew_home_titel text-xl md:text-3xl mb-9 mt-9 ml-10 md:ml-24">
                    <span className="pr-1 opacity-40 font-semibold mr-1">02</span> Meet your crew
                </h4>
                <div className="content px-3 sm:px-24" key={dataItem.name}>
                <div className="div-1 crew_overlay my-6">
                    <div className="crew_overlay_details">
                        <h4 className="text-2xl sm:text-4xl opacity-40 crew_role">{dataItem.role}</h4>
                        <h3 className="text-5xl sm:text-6xl py-3">{dataItem.name}</h3>
                        <p>{dataItem.bio}</p>
                    </div>
                    <div className="toggle_crew_content md:mt-12">
                    {
                        crew.map((e ,index,array)=>{
                                return <span data-filter={index} onClick={getIndex} key={e.name} className={
                                    index ==position ? "active" :""
                                }></span>
                            })
                        }
                    </div>
                </div>
                <div className="div-2 crew_image mx-auto">
                    <img src={dataItem.images.png} alt={`${dataItem.name} image in crew page`}/>
                </div>
            </div>
        </div>
    )
}

export default Crew;