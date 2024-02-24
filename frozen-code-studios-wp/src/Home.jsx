import './index.css'
import React from 'react';
import TopBar from './TopBar';

export const Home = () => {

    return (
        <>
            <TopBar />

            <div className="main-content">
                <div className="video-container">
                    <video
                        width="100%"
                        height="100%"
                        controls="auto"
                        style={{ objectFit: "cover" }} >
                        <source src="videos/frozen-code-studios.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h1>&emsp; To-do on Home</h1>
                <p>Festured Trailer. </p>
                <p>Launch/Advent Timer.</p>
                <p>Studio Blog.</p>
                <p>Upcoming Advents.</p>
                <p>Interactive Polls.</p>
                <p>Donations. </p>
            </div>

            <footer>
                <ct>&copy; Frozen Code Studios 2024</ct>
            </footer>
        </>
    );
}

export default Home;