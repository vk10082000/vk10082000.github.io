import React from 'react';
import "../Styles/project.css";
import tarvtok from "../Images/tarvtok.jpg"
import quickloan from "../Images/quickloan.jpg"
import furniture from "../Images/furnitureandhomedecors.jpg"
import lensmart from "../Images/lensmart.png"
import recipeHub from "../Images/recipeHub.png"
import htmlimg from "../Images/mini-icons/icons8-html.svg"
import nodejs from "../Images/icons8-node-js.svg"
import mongodb from "../Images/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
import express from "../Images/icons8-express-js.svg"
import Cssimg from "../Images/mini-icons/icons8-css.svg"
import Javascriptimg from "../Images/mini-icons/icons8-javascript.svg"
import reactimg from "../Images/mini-icons/icons8-react-native.svg"
import reduximg from "../Images/mini-icons/icons8-redux.svg"
import chakraui from "../Images/mini-icons/icons8-chakra-ui.svg"
import { Tooltip } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";


const Projects = () => {

const quicklonelink = ()=>{
   window.open("https://quickloan-app.vercel.app/");
}
const quicklonegithublink = ()=>{
   window.open("https://github.com/vk10082000/parsimonious-clover-8073");
}

const travtoklink = ()=>{
   window.open("https://travtok.netlify.app/")
}
const travtokgithublink = ()=>{
   window.open("https://github.com/abhipathak1/TravTok")
}

const furnitureHomedecroslink = ()=>{
   window.open("https://wonderful-cat-6e8ed4.netlify.app/")
}
const furnitureHomedecrosgithublink = ()=>{
   window.open("https://github.com/vk10082000/-vestal-trouble-683")
}
const lensmartslink = ()=>{
   window.open("https://6516e70d27a23d05f952ecee--snazzy-kashata-86b065.netlify.app/")
}
const lensmartgithublink = ()=>{
   window.open("https://github.com/Lakshmiguru12/lensmart")
}
const recipeHublink=()=>{
   window.open("https://concerned-picture-9849-frontend.vercel.app/")
}
const recipeHubgithublink=()=>{
   window.open("https://github.com/AyushmaanRajput/concerned-picture-9849")
}




   return (
      <div className='Projects-maindiv' id='projects'>
         <div className='heading project-title-div'>
            <button className='heading-textbtn'>
               <h1 className='mainheading'>My <span style={{ color: "#0e4166" }}>Projects</span></h1>
            </button>
         </div>


         <div className='Projectcards-div'>
            {/* RecipeHub website */}


            <div className="card project-card">
               <div>
                  <img className='projectimage' src={recipeHub} alt="RecipeHub" />
                  <div className='btnhover'>


                     <button className="Btn project-deployed-link" onClick={recipeHublink}>
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                        <div className="text">Live</div>
                     </button>


                     <button className="Btn project-github-link" onClick={recipeHubgithublink}>
                        <div className="gitnubicon">
                           <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                        </div>
                        <div className="text">Github</div>
                     </button>





                  </div>

                  <div className='Tabscreenbtns'>
                     <button  onClick={recipeHublink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={recipeHubgithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>


               </div>
               <div className="content">
                  <p className="heading project-title">RecipeHub</p>
                 


                  <p className="para project-description">
                     
RecipeHub is an inclusive culinary platform where users explore diverse recipes, save favorites, and curate personalized feeds based on tastes. Connect with fellow foodies through a messaging system, exchanging tips and ideas. A highlight is the ability to showcase your culinary creations with images, instructions, and ingredients, making RecipeHub a vibrant space for sharing and discovering recipes.
                  </p>
                  <div className='project-tech-stack techstacks'>
                     <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={reactimg} alt="react" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Redux" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={reduximg} alt="redux" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Node.JS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={nodejs} alt="react" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Express" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-backgroundforexpress'>
                           <img className='iconimg'  src={express} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Mongodb" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-backgroundforexpress'>
                           <img className='iconimg'  src={mongodb} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Chakra-UI" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={chakraui} alt="chakraui" />
                        </div>
                     </Tooltip>
                     <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={htmlimg} alt="html" />
                        </div>
                     </Tooltip>
                     <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Cssimg} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Javascriptimg} alt="javascript" />
                        </div>
                     </Tooltip>

                  </div>
               </div>
               <div className='smallscreenbtns'>
                  <button onClick={recipeHublink}>
                     <div>
                        <VscLiveShare />
                        <p>Live</p>
                     </div>
                  </button>
                  <button onClick={recipeHubgithublink}>
                     <div className='mobilegitbtn'>
                        <AiFillGithub />
                        <p>Github</p>
                     </div>
                  </button>
               </div>

            </div>

            {/* QuickLoan project */}

            <div className="card project-card">
               <div>
                  <img className='projectimage' src={quickloan} alt="quickloan" />
                  <div className='btnhover'>


                     <button className="Btn project-deployed-link" onClick={quicklonelink}>
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                        <div className="text">Live</div>
                     </button>


                     <button className="Btn project-github-link" onClick={quicklonegithublink}>
                        <div className="gitnubicon">
                           <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                        </div>
                        <div className="text">Github</div>
                     </button>





                  </div>

                  <div className='Tabscreenbtns'>
                     <button  onClick={quicklonelink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={quicklonegithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>


               </div>
               <div className="content">
                  <p className="heading project-title">QuickLoan</p>
                 


                  <p className="para project-description">
                  Enhance online loan platform with ReactJS & Redux for flexible loans. Partnered with top lenders for tailored options, featuring competitive rates. Backend on JSON server.
                  </p>
                  <div className='project-tech-stack techstacks'>
                     <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={reactimg} alt="react" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Redux" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={reduximg} alt="redux" />
                        </div>
                     </Tooltip>
                     <Tooltip label="Chakra-UI" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={chakraui} alt="chakraui" />
                        </div>
                     </Tooltip>
                     <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={htmlimg} alt="html" />
                        </div>
                     </Tooltip>
                     <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Cssimg} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Javascriptimg} alt="javascript" />
                        </div>
                     </Tooltip>

                  </div>
               </div>
               <div className='smallscreenbtns'>
                  <button onClick={quicklonelink}>
                     <div>
                        <VscLiveShare />
                        <p>Live</p>
                     </div>
                  </button>
                  <button onClick={quicklonegithublink}>
                     <div className='mobilegitbtn'>
                        <AiFillGithub />
                        <p>Github</p>
                     </div>
                  </button>
               </div>

            </div>


            {/* TravTok Project */}

            <div className="card project-card">
               <div>
                  <img className='projectimage' src={tarvtok} alt="tarvtok" />
                  <div className='btnhover'>


                     <button className="Btn project-deployed-link" onClick={travtoklink}>
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                        <div className="text">Live</div>
                     </button>


                     <button className="Btn project-github-link" onClick={travtokgithublink}>
                        <div className="gitnubicon">
                           <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                        </div>
                        <div className="text">Github</div>
                     </button>





                  </div>

                  <div className='Tabscreenbtns'>
                     <button onClick={travtoklink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={travtokgithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>


               </div>
               <div className="content">
                  <p className="heading project-title">TravTok
                  </p><p className="para project-description">
                  TravTok its was user-friendly travel website. Discover the world's hidden gems and embark on unforgettable adventures with our travel website. Plan your dream vacation effortlessly with our user-friendly travel website
                  </p>
                  <div className='project-tech-stack techstacks-fashion'>

                     <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={htmlimg} alt="html" />
                        </div>
                     </Tooltip>
                     <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Cssimg} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Javascriptimg} alt="javascript" />
                        </div>
                     </Tooltip>

                  </div>
               </div>
               <div className='smallscreenbtns'>
                  <button onClick={travtoklink}>
                     <div>
                        <VscLiveShare />
                        <p>Live</p>
                     </div>
                  </button>
                  <button onClick={travtokgithublink}>
                     <div className='mobilegitbtn'>
                        <AiFillGithub />
                        <p>Github</p>
                     </div>
                  </button>
               </div>

            </div>


            {/* furniture and Home decors Kart */}

            <div className="card project-card">
               <div>
                  <img className='projectimage' src={furniture} alt="furniture and Home Decors" />
                  <div className='btnhover'>


                     <button className="Btn project-deployed-link" onClick={furnitureHomedecroslink}>
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                        <div className="text">Live</div>
                     </button>


                     <button className="Btn project-github-link" onClick={furnitureHomedecrosgithublink}>
                        <div className="gitnubicon">
                           <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                        </div>
                        <div className="text">Github</div>
                     </button>





                  </div>

                  <div className='Tabscreenbtns'>
                     <button onClick={furnitureHomedecroslink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={furnitureHomedecrosgithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>


               </div>
               <div className="content">
                  <p className="heading project-title">Furniture and Home Decors
                  </p><p className="para project-description">
                     Furniture and Home Decors is a cloned website of urbanload , a popular e-commerce platform enabling users to buy and sell products. This collaborative project utilizes HTML, CSS, and JavaScript for the frontend development, while the backend is supported by a JSON server.
                  </p>
                  <div className='project-tech-stack techstacks-fashion'>

                     <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={htmlimg} alt="html" />
                        </div>
                     </Tooltip>
                     <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Cssimg} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Javascriptimg} alt="javascript" />
                        </div>
                     </Tooltip>

                  </div>
               </div>
               <div className='smallscreenbtns' onClick={furnitureHomedecroslink}>
                  <button>
                     <div>
                        <VscLiveShare />
                        <p>Live</p>
                     </div>
                  </button>
                  <button onClick={furnitureHomedecrosgithublink}>
                     <div className='mobilegitbtn'>
                        <AiFillGithub />
                        <p>Github</p>
                     </div>
                  </button>
               </div>

            </div>

            {/* Lencart */}
            <div className="card project-card">
               <div>
                  <img className='projectimage' src={lensmart} alt="furniture and Home Decors" />
                  <div className='btnhover'>


                     <button className="Btn project-deployed-link" onClick={lensmartslink}>
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                        <div className="text">Live</div>
                     </button>


                     <button className="Btn project-github-link" onClick={lensmartgithublink}>
                        <div className="gitnubicon">
                           <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                        </div>
                        <div className="text">Github</div>
                     </button>





                  </div>

                  <div className='Tabscreenbtns'>
                     <button onClick={lensmartslink}>
                        <div>
                           <VscLiveShare />
                           <p>Live</p>
                        </div>
                     </button>
                     <button onClick={lensmartgithublink}>
                        <div className='mobilegitbtn'>
                           <AiFillGithub />
                           <p>Github</p>
                        </div>
                     </button>
                  </div>


               </div>
               <div className="content">
                  <p className="heading project-title">Lensmart
                  </p><p className="para project-description">
                  Lensmart is a leading e-commerce company that maintains an online optical store packed with both classic and trendy eyeglasses, lenses and more at affordable prices. These glasses can be easily ordered online by the customers, who will get them delivered with many discounts that come and go.

                  </p>
                  <div className='project-tech-stack techstacks-fashion'>

                     <Tooltip label="HTML" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={htmlimg} alt="html" />
                        </div>
                     </Tooltip>
                     <Tooltip label="CSS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Cssimg} alt="css" />
                        </div>
                     </Tooltip>
                     <Tooltip label="JavaScript" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                        <div className='icon-background'>
                           <img className='iconimg' src={Javascriptimg} alt="javascript" />
                        </div>
                     </Tooltip>

                  </div>
               </div>
               <div className='smallscreenbtns' onClick={lensmartslink}>
                  <button>
                     <div>
                        <VscLiveShare />
                        <p>Live</p>
                     </div>
                  </button>
                  <button onClick={lensmartgithublink}>
                     <div className='mobilegitbtn'>
                        <AiFillGithub />
                        <p>Github</p>
                     </div>
                  </button>
               </div>

            </div>




           

         </div>

      </div>
   )
}

export default Projects;