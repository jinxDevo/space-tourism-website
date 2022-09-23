import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";






export default function Home (){
    useEffect(()=>{
        const home = document.querySelector(".home")
        if(window.innerWidth <=765 && window.innerWidth > 375){
            home.style.backgroundImage = `url("./assets/home/background-home-tablet.jpg")`
        }else if(window.innerWidth < 375){
            home.style.backgroundImage = `url("./assets/home/background-home-mobile.jpg")`
        }else{
            home.style.backgroundImage = `url("./assets/home/background-home-desktop.jpg")`
        }
    },[])
    return(
        <Container>
            <div className="home main-home px-3 sm:px-24 pt-36 pb-auto">
                <div className="content mx-auto mt-48 flex justify-between">
                    <div className="">
                        <h4 className="text-xl md:text-4xl" >So, you want to travel to</h4>
                        <h1 className="text-8xl md:text-9xl py-3">space</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                            </p>
                    </div>
                    <Link to="destination" className="explor md:w-56 w-48 my-10 ">
                        <span >explor</span>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    /* background-color: black; */
`