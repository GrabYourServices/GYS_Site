import React from 'react'
import {HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/home/home/home'
import PricingPage from '../../pages/pricing/pricing'
import NavBar from './navbar/navbar'
import WebsitesPage from '../../pages/pricing/websites/websites'
import ContactPage from '../../pages/contact/contact'
import TopHeader from './topheader/topheader'
import GameHostingPage from '../../pages/pricing/gamehosting/gamehosting'
import AppHostingPage from '../../pages/pricing/apphosting/apphosting'
import DiscordBotsPage from '../../pages/pricing/discord bots/discordbots'
import FourOFourPage from '../../pages/404/404'
import GrabPanelPage from '../../pages/grabpanel/grabpanel'
import GraphicsPage from '../../pages/pricing/graphics/graphics'
function Navigator() {
  return (
    <Router basename='/'>
      <TopHeader/>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/apphosting" element={<AppHostingPage />} />
          <Route path="/gamehosting" element={<GameHostingPage />} />
          <Route path="/discordbots" element={<DiscordBotsPage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/grabpanel" element={<GrabPanelPage />} />
          <Route path="*" element={<FourOFourPage/>} />
      </Routes>
    </Router>
  )
}

export default Navigator