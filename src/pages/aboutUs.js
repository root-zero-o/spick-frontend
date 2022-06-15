import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"
import KwagDonkwan from "../images/KwagDongKwan.jpg"
import KangSeokwoo from "../images/Kangseokwoo.jpg"
import ChoYoongsang from "../images/Choyoonsang.jpg"
import KimKyunkwan from "../images/kimkyukwan.jpg"
import Kimgeunyoung from "../images/Kimgeunyoung.jpg"
import { Link } from 'react-router-dom';

const AboutUs = () => {

    useEffect(() => {
        AOS.init();
      })
      const colors = [
        '#6868ac',
        '#d3927d',
        '#894b5d',
        '#859f94',
        '#cdb97d',
        '#a0838f',
        '#e2c1be',
        '#000000',
    ]


    
    //const [colorIndex, setColorIndex] = useState(0);
    const [color,setColor]=useState(0);
   
    let backgroundColor = colors[color]
    
    const scroll = (event) => {
        
       let value = window.scrollY*0.01;
       
       console.log("value : " +value)
       console.log("colorIndex : "+color)
        let colorIndex=0;
        if(value<=10){
            colorIndex=0;
        }
       
        else if(10<value&&value<=26){
            colorIndex=1;
        }
        else if(26<value&&value<=40){
             colorIndex=2;
        }
        else if(40<value&&value<=59){
              colorIndex=3;
        }
        else if(59<value&&value<=72){
               colorIndex=4;
        }
        else if(72<value&&value<=82){
             colorIndex=5;
        }
        else if(82<value&&value<120){
              colorIndex=6;
        }
        else{
            colorIndex=0;
        }
        setColor(colorIndex);
    }
    

  return (
    
   
   <Box onWheel={scroll} backgroundColor={backgroundColor}>
    <Test4/>   
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <Test data-aos="fade-up">About Us</Test>  
    <Test4/>
    <Test1 data-aos="fade-up">Team NoSleep</Test1>
    <Test4/>  
    <Test2 data-aos="fade-right">Team Member</Test2>
    <Test4/>
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">Front End</Test2>
    <Test4/>
    <>
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">FrontEnd Beauty</Test2>
     <Test3/>
    <Name data-aos="fade-right"
     data-aos-anchor-placement="top-center">Kim GeunYeong</Name>
     <Img src={Kimgeunyoung} data-aos="fade-right"
     data-aos-anchor-placement="top-center"/>
     <Test5/>
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">FrontEnd Cutie</Test2>
    <Test3/>
    <Name data-aos="fade-right"
     data-aos-anchor-placement="top-center">Kang seokwoo</Name>
     <Img src={KangSeokwoo} data-aos="fade-right"
     data-aos-anchor-placement="top-center"/>
     </>
    <Test5/>  
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">Back End</Test2>
    <Test4/>
    <>
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">BackEnd EMPEROR</Test2>
    <Test3/>
    <Name data-aos="flip-up"
     data-aos-anchor-placement="top-center">Kwag DongKwan</Name>
     <Img src={KwagDonkwan} data-aos="flip-up"
     data-aos-anchor-placement="top-center"/>
    <Test5/>
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">BackEnd God</Test2>
    <Test3/>
    <Name data-aos="slide-up"
     data-aos-anchor-placement="top-center">Kim kyu kwan</Name>
     <Img src={KimKyunkwan} data-aos="slide-up"
     data-aos-anchor-placement="top-center"/>
     <Test5/>
    <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">BackEnd Master</Test2>
     <Test3/>
    <Name data-aos="slide-left"
     data-aos-anchor-placement="top-center">Cho yoonsang</Name>
     <Img src={ChoYoongsang} data-aos="slide-left"
     data-aos-anchor-placement="top-center"/>
     </>
     <Test5/>
     <Contact>
        <Title>Contact Us!</Title>
        <A>💁‍♀️ Click 하시면 깃허브로 이동!</A>
        <Address>
            <Back>
                Team NoSleep🌙
            </Back>
            <Ad href='https://github.com/team-NoSleep-hh99'>
            <span>
            Team repository
                </span>
            </Ad>
        </Address>
        <Address>
            <Back1 >
                김근영  FE
            </Back1>
            <Ad1 href='https://github.com/yyeonggg'>
                <span>
             yyeonggg
             </span>
            </Ad1>
        </Address>
        <Address>
            <Back1>
                강석우 FE
            </Back1>
            <Ad1 href='https://github.com/Seokwoodang'>
            Seokwoodang
            </Ad1>
        </Address>
        <Address>
            <Back1>
                곽동관 BE
            </Back1>
            <Ad1 href='https://github.com/DKKwag'>
                DKKwag
            </Ad1>
        </Address>
        <Address>
            <Back1>
                김규관 BE
            </Back1>
            <Ad1 href='https://github.com/kwan97'>
                <span>
                kwan97
                </span>
            </Ad1>
        </Address>
        <Address>
            <Back1>
                조윤상 BE
            </Back1>
            <Ad1 href='https://github.com/bapunn'>
            bapunn
            </Ad1>
        </Address>
        <StLink to={"/"}><Home>홈으로 이동</Home></StLink>
        <></>
     </Contact>
     <Test5/>
     <Test2 data-aos="fade-right"
     data-aos-anchor-placement="top-center">Thanks for Scrolling</Test2>
     <Test5/>
    </Box>
  )
}

const StLink = styled(Link)`
    text-decoration: none;
`;

const Home = styled.div`
    width:15rem;
    height:5rem;
    color : white;
    background-color: black;
    font-family: Aboutus;
    font-size : 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 5rem 0 0 0;
    border-radius: 1rem;
    &:hover{   
        background-color: white;
        color:black
        
    }
    cursor: pointer;
`;

const A = styled.div`
    font-size: 2rem;
    font-family: Aboutus;
    margin : 1rem 0 1rem 0;
`;

const Ad1 = styled.a`
    background-color: white;
    color: black;
    height: 8rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: Aboutus;
    padding: 1rem;
    margin : 0 0 1rem 0;
    text-decoration: none;
`;

const Ad = styled.a`
    background-color: white;
    color: black;
    height: 8rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: Aboutus;
    padding: 1rem;
    margin : 0 0 1rem 0;
    text-decoration: none;
`;

const Back1 = styled.div`
    background-color: black;
    color: white;
    height: 8rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-family: Aboutus;
    padding: 1rem;
    margin : 0 0 1rem 0;
`;

const Back = styled.div`
    background-color: black;
    color: white;
    height: 8rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-family: Aboutus;
    padding: 1rem;
    margin:0 0 1rem 0;
`;

const Address = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-size: 7rem;
    font-family: Aboutus;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;


const Img = styled.img`
    width: 40rem;
    height:40rem;

`;

const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    transition: background-color 0.8s;
    background-color: ${props => props.backgroundColor};
`;

const Test5 =styled.div`
width : 100vw;
 height: 40vh;
`;


const Test4 = styled.div`
 width : 100vw;
 height: 20vh;

`;


const Test = styled.div`
 width : 100vw;
 height: 50vh;
 font-size: 10rem;
 font-family:Aboutus;
 text-align: center;
 color:white;
`;

const Test1 = styled.div`
 width : 100vw;
 height: 50vh;
 font-size: 10rem;
 font-family:Aboutus;
 text-align: center;
 color:white;
`;

const Name = styled.div`
 width : 100vw;
 height: 40vh; 
 font-size: 9rem;
 font-family:Aboutus;
 text-align: center;
 color:white;
`;

const Test2 = styled.div`
 width : 100vw;
 height: 30vh; 
 font-size: 9rem;
 font-family:Aboutus;
 text-align: center;
 color:white;
`;

const Test3 = styled.div`
 width : 100vw;
 height: 10vh; 
 font-size: 10rem;
`;


export default AboutUs