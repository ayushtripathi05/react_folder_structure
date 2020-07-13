import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import AppSection from './AppSection'
import CardSection from './CardSection'
const App = ()=>{

    return (
        <div>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <AppSection></AppSection>
            <CardSection></CardSection>
            <Footer></Footer>
        </div>
    )

}

export default App;