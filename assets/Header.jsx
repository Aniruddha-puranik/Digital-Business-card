import React from "react"
export default function Header() {
    return (
        <header className="header-el">
            <img src="./images/Profile.jpg" alt="profile-pictuer" className="img-el"/>
            <h2>Aniruddha Puranik</h2>
            <h3>Frontend-Developer</h3>
            <h4>+91 8319498115</h4>
            <a href="" target="blank"><button className="resume"><i class="fa-solid fa-file"></i> Resume</button></a>
            <a href="https://www.linkedin.com/in/aniruddha-puranik/" target="blank"><button className="linkdin"><i class="fa-brands fa-linkedin"></i> Linkdin</button></a>
        </header>
    )
}