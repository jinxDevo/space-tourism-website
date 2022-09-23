import React, { useEffect } from "react";
import {Link, Outlet} from 'react-router-dom'
import styled from "styled-components";

function Header(){
    useEffect(()=>{
        let path =window.location.hash;
        document.querySelectorAll(".link-item").forEach((e)=>{
            let item = e.children[1].getAttribute("href")
            e.classList.remove("active")
            if(item == path){
                e.classList.add("active")
            }
        })
    },[])
        function changeActive(event){
            document.querySelectorAll(".link-item").forEach((e)=>{
                console.log(e)
                e.classList.remove("active")
            })
            event.currentTarget.classList.add("active")
        }
    

    function activeNav(e){
        let navHeader = document.querySelector(".nav-header")
        navHeader.classList.forEach((ele)=>{
            if(ele == "open"){
                navHeader.classList.remove("open")
                e.currentTarget.src = `./assets/shared/icon-hamburger.svg`
            }else{
                navHeader.classList.add("open")
                e.currentTarget.src = `./assets/shared/icon-close.svg`
            }
        })
    }


    return(
        <Container>
            <div className="header-container">
                <Link className="logo" to="/">
                    <img src="./assets/shared/logo.svg" alt="space tourism logo"/>
                </Link>
                <div className="bars m-7">
                    <img src="./assets/shared/icon-hamburger.svg" alt="navbar toggle" id="symbolBar" onClick={activeNav}/>
                </div>
                <nav className="nav-header lg:mt-6 md:ml-auto lg:px-24 sm:ml-auto mt-0">
                    <ul className="header_nav_list_item">
                        <li className="link-item active" onClick={changeActive}>
                            <span>00</span>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="link-item" onClick={changeActive}>
                            <span>01</span>
                            <Link to="destination">Destination</Link>
                        </li>
                        <li className="link-item" onClick={changeActive}>
                            <span>02</span>
                            <Link to="crew">Crew</Link>

                        </li>
                        <li className="link-item"onClick={changeActive}>
                            <span>03</span>
                            <Link to="technology">Technology</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    </Container>
    )
}
const Container = styled.header`
    .nav-header ul li{
        margin : 28px 21px;
    margin-right : 0;
    padding-top : 8px;
    padding-bottom : 8px;
    letter-spacing: 4.75px;
    font-family: 'Barlow', sans-serif;
    text-transform: uppercase;
    color :rgba(255, 255, 255, 0.649);
    transition: all .3s ease 20ms;
        border-right : 2px solid transparent;
        @media (min-width : 385px) {
            display: inline-block;
            margin : 0px 12px;
            padding : 28px 0px;
            border-right : none;
            border-bottom : 2px solid transparent;
        }
        &:hover{
            border-color : rgb(255,255,255,0.455);
        }
        &.active{
            border-color : rgb(255,255,255);
            color : rgb(255,255,255);
        }
    }
`


export default Header;