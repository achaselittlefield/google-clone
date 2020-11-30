import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from "@material-ui/core"
import Search from '../components/Search'

function Home() {
    return (
        <div>

            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>

                </div>
                <div className='home__headerRight'>
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppsIcon />
                <Avatar />
                    
                
                </div>

            </div>

            <div className='home__body'>
            <img src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            alt=""
            />

            <div className="home__inputContainer">
                <Search />
                {/*hideButtons */} 
            </div>


            </div>
        </div>
    )
}

export default Home

