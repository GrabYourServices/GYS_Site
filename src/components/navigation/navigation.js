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
            <Route path="/GYS_Site/build/" element={<HomePage />} />
            <Route path="/GYS_Site/build/websites" element={<WebsitesPage />} />
            <Route path="/GYS_Site/build/webhosting" element={<WebsiteHostingPage />} />
            <Route path="/GYS_Site/build/minecrafthosting" element={<MinecraftHostingPage />} />
            <Route path="/GYS_Site/build/discordbots" element={<PricingPage />} />
            <Route path="/GYS_Site/build/brandidentitydesigns" element={<PricingPage />} />
            <Route path="/GYS_Site/build/graphics" element={<ContactPage />} />
        </Routes>
    </Router>
  )
}

export default Navigator