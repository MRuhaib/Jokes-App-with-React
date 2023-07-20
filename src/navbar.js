import { useState } from "react";

const Navbar = () => {
    let styles = document.getElementById('styles');
    const [name, setName] = useState('../src/light.css');
    styles.setAttribute('href', name)
    const handleClick = () =>{
        let themeChange = document.getElementById('themeChange');
        //let styles = document.getElementById('style');
        
        if (themeChange.innerText === 'click here for dark mode!'){
        themeChange.innerText = 'click here for light mode!'
        setName('../src/dark.css')   
        } else {
        setName('../src/light.css')
        themeChange.innerText = 'click here for dark mode!'
        }   
    }

    return (
        
        <nav className="navbar">
            <div className="settings">
            <button id="themeChange" onClick={handleClick}>click here for dark mode!</button>
            <hr></hr>
            </div>
        </nav>
     );

     
}

export default Navbar;