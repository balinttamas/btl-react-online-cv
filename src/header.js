import React from 'react';
import Typed from 'react-typed';
import FbIcon from '@material-ui/icons/Facebook';
import GitIcon from '@material-ui/icons/GitHub';
import YbIcon from '@material-ui/icons/YouTube';


const Header = () => {
    return (
        <div className="header-wraper" id="header">
            <div className="main-info">
                <h1>Bálint Tamás - Lajos's Online Portfolio</h1>
                <Typed
                className="typed-text"
                strings={["Web Design", "Web Development"]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                <div className="icons">
                    <a href="https://www.facebook.com/tomi.balint/" target="blank" rel="noopener noreferrer" className="icon i-facebook">
                        <FbIcon />
                    </a>
                    <a href="https://github.com/balinttamas" target="blank" rel="noopener noreferrer" className="icon i-github">
                        <GitIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCbR4IEQYBYFlDU9bAvlv6Rw" target="blank" rel="noopener noreferrer" className="icon i-youtube">
                        <YbIcon />
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Header;