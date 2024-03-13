import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import Banner from '../assets/Images/banner.mp4'
// import Office from '../assets/Images/boxoffice.png'

const Home = () => {
  return (
    <div>
        {/*Section - 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white max-w-maxContent justify-between'>
            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                                transition-all duration-200 hover:scale-105 w-fit'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all 
                                    duration-200 group-hover:bg-richblack-900    '>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
                Empower Your Future with
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-5 '>
                With our online coding courses,you can lear at your own pace,from anywhere in the world, and get access to a <br/>
                wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                <CTAButton active={false} linkto={"/signup"}>Book a Demo</CTAButton>
            </div>

            <div className="mx-3 my-7 mt-[80px] shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                <video muted loop autoPlay className="shadow-[20px_20px_rgba(255,255,255)]"><source src={Banner} type='video/mp4'/></video>
            </div>

            {/* Code Section - 1 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={<div className='text-4xl font-bold'>Unlock your 
                                    <HighlightText text={"coding potential"}/> {" "} <br/>
                                    with our online courses.
                            </div>}
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                    ctabtn1={
                        {
                            btnText:"Try it Yourself",
                            linkto:"/signup",
                            active:true
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More",
                            linkto:"/login",
                            active:false
                        }
                    }

                    codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head> <title>Example</title>\n<link rel="stylesheet"href="styles.css">
                                </head>\n<body>\n<h1><a href="/">Header</a></h1>
                                <nav>\n<a href="one/">One</a>\n<a href="two/">Two</a>\n</nav>`}
                    codeColor={"text-yellow-25"}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                />
            </div>

            {/* Code Section - 2 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse mr-[-325px]"}
                    heading={
                        <div className="w-[100%] text-4xl font-semibold lg:w-[40%] ">Start
                            <HighlightText text={"coding in seconds"} />
                        </div>
                            }
                    subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                    ctabtn1={
                        {
                            btnText:"Continue Lesson",
                            linkto:"/signup",
                            active:true
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More",
                            linkto:"/login",
                            active:false
                        }
                    }

                    codeColor={"text-white"}
                    codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>


        </div>
        {/*Section - 2 */}
        {/*Section - 3 */}
        {/*Footer */}

    </div>
  )
}

export default Home