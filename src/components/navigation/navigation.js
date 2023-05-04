import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/home/home/home'
import PricingPage from '../../pages/pricing/pricing'
import NavBar from './navbar/navbar'
import WebsitesPage from '../../pages/pricing/websites/websites'
import ContactPage from '../../pages/contact/contact'
import MinecraftHostingPage from '../../pages/pricing/minecraft hosting/mchosting'
import WebsiteHostingPage from '../../pages/pricing/website hosting/webhosting'
function Navigator() {
  return (
    <Router>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/webhosting" element={<WebsiteHostingPage />} />
            <Route path="/minecrafthosting" element={<MinecraftHostingPage />} />
            <Route path="/discordbots" element={<PricingPage />} />
            <Route path="/brandidentitydesigns" element={<PricingPage />} />
            <Route path="/graphics" element={<ContactPage />} />
        </Routes>
    </Router>
  )
}

export default Navigator