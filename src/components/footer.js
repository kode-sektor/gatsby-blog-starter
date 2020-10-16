import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const footer = () => {
    return (
        <div className="site-footer">
            <h4 className="text-center">
                Code Blog
            </h4>
            <p className="text-center">Follow us on social media</p>
            <div className="footer-social-links">
                <ul className="social-links-list">
                    <li>
                        <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF></FaFacebookF>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className="facebook" target="_blank" rel="noopener noreferrer">
                            <FaTwitter></FaTwitter>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" className="facebook" target="_blank" rel="noopener noreferrer">
                            <FaInstagram></FaInstagram>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" className="facebook" target="_blank" rel="noopener noreferrer">
                            <FaGoogle></FaGoogle>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default footer
