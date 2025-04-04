import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchBar/SearchBar.jsx'

function homePage() {
    return (
        <div className='homePage' >
            {/* text for the left side */}
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get your Dream Place
                    </h1>

                    <p className="title_message">
                        This is a text example for the items the will be on the home HomePage
                        of the website. This is just a text message, it contain no important
                        message that can be used for the website.
                    </p>

                    <SearchBar/>

                    {/* boxes on the front page */}
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        
                        <div className="box">
                            <h1>200+</h1>
                            <h2>Award Gained</h2>
                        </div>
                        
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>

                </div>
            </div>

            {/* image container for right */}
            <div className="imgContainer">
                <img src="bg.png" />
            </div>
            
        </div>
    )
}

export default homePage
