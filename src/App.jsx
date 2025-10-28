import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import NotFoundPage from './pages/notFoundPage/NotFoundPage.jsx';
import Footer from './components/footer/Footer.jsx';
import PostPage from "@/pages/postPage/PostPage.jsx";
import AllPosts from "@/pages/allPosts/AllPosts.jsx";
import Contacts from "@/pages/contacts/Contacts.jsx";
import useScrollToTop from "@/hooks/useScrollToTop.jsx";
import ServicesPage from "@/pages/servicesPage/ServicesPage.jsx";



import './App.css'

function App() {
  useScrollToTop()
  return (
    <>
      <Header />
      <main  >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main >
      <Footer />
    </>
  )
}

export default App
