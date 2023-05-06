import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/home/home/home'
import PricingPage from '../../pages/pricing/pricing'
import NavBar from './navbar/navbar'
import WebsitesPage from '../../pages/pricing/websites/websites'
import ContactPage from '../../pages/contact/contact'
import TopHeader from './topheader/topheader'
import DiscordHostingPage from '../../pages/pricing/discordhosting/discordhosting'
import WebsiteHostingPage from '../../pages/pricing/website hosting/webhosting'
import DiscordBotsPage from '../../pages/pricing/discord bots/discordbots'
import FourOFourPage from '../../pages/404/404'
import GrabPanelPage from '../../pages/grabpanel/grabpanel'
function Navigator() {
  return (
    <Router basename='/'>
      <TopHeader/>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/webhosting" element={<WebsiteHostingPage />} />
          <Route path="/discordhosting" element={<DiscordHostingPage />} />
          <Route path="/discordbots" element={<DiscordBotsPage />} />
          <Route path="/brandidentitydesigns" element={<PricingPage />} />
          <Route path="/graphics" element={<ContactPage />} />
          <Route path="/grabpanel" element={<GrabPanelPage />} />
          <Route path="*" element={<FourOFourPage/>} />
      </Routes>
    </Router>
  )
}

export default Navigator