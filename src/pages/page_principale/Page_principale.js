import React from 'react'
import './page_principale.css'
import Header from './Component/header/Header'
import Section1 from './Component/Sections/Section1'
import Section2 from './Component/Sections/Section2'
import Section3 from './Component/Sections/Section3'
import Skils from './Component/Sections/Skils'
import Avis from './Component/Sections/Avis'
import Formulaire from './Component/Sections/Formulaire'
import Footer from './Component/Footer/Footer'
import Container from './Component/Container/Container'
function Page_principale() {
  return (
    <div className='Body'>
      <Header/>
      <Section1/>
      <Section2/>
      <Skils/>
      <Container/>
      <Section3/>
      <Avis/>
      <Formulaire/>
      <Footer/>
    </div>
  )
}

export default Page_principale