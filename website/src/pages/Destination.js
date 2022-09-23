import React ,{useEffect, useState} from "react";
import data from "../js/data.json";


function Destination (){
    // Destructuring the destrition from data.json
        const {destinations} = data;
        //useState to set value of index that in destination
        const [position , setPosition] =useState(0)
        // function to get the index of the destination data
        const getIndex=(e)=>{
            let item = e.target.getAttribute("data-filter")
            destinations.map((ele ,index)=>{
                if(ele.name == item){
                    setPosition(index)
                }
            })
        }
        // set the data of the destination
        const dataItem = destinations[position];

        //useEffect to set the background image for the three width of page
        useEffect(()=>{
        const home = document.querySelector(".home")
        if(window.innerWidth <=765 && window.innerWidth > 375){
            home.style.backgroundImage = `url("./assets/destination/background-destination-tablet.jpg")`
        }else if(window.innerWidth < 375){
            home.style.backgroundImage = `url("./assets/destination/background-destination-mobile.jpg")`
        }else{
            home.style.backgroundImage = `url("./assets/destination/background-destination-desktop.jpg")`
        }
    },[])


    return(
        <div className="home destination_home  pt-24 md:pt-32">
            <h4 className="titel destination_home_titel text-xl md:text-3xl mb-9 mt-9 ml-10 md:ml-24">
                <span className="pr-1 opacity-40 font-semibold mr-3">01</span>Pick your destination
            </h4>
            <div className="content px-3 sm:px-24" key={dataItem.name}>
                <div className="div-1 destination_image my-2 ml-auto">
                    <img src={dataItem.images.png} alt={`${dataItem.name} image in destination page`}/>
                </div>
                <div className="div-2 destination_overlay mx-auto">
                    <div className="border-b-white border-b-2 px-0">
                        <nav className="destination_navbar_toggle mb-6">
                            <ul id="navbar_item_list">
                                {
                                destinations.map((e ,index)=>{
                                    return <li data-filter={e.name} onClick={getIndex} key={e.name} className={
                                        index ==position ?"active" :""
                                    }>{e.name}</li>
                                })
                                }
                            </ul>
                        </nav>
                        <div className="destination_overlay_details pb-6 sm:pb-9">
                            <h2 className="text-6xl sm:text-8xl py-3">{dataItem.name}</h2>
                            <p>{dataItem.description}</p>
                        </div>
                    </div>
                    <div className="destination_status justify-between">
                        <div className="body-text-s uppercase mr-8">Avg. Distance<span className="text-3xl">{dataItem.distance}</span></div>
                        <div className="body-text-s uppercase">Est. travel time<span className="text-3xl">{dataItem.travel}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Destination;