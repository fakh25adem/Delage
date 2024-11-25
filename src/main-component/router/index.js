import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Adjointe from '../Adjointe/Adjointe'
import Conjointe from '../Conjointe/Conjointe'
import Orthodontique from '../Orthodontique/Orthodontique'


import HomePage2 from '../HomePage2/HomePage2';
import Histoire from '../Histoire/Histoire';
import Produit from '../Produit/Produit';
import Travaille from '../TeamPage/TeamPage';
import Acceuil from '../TeamSinglePage/TeamSinglePage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import FaqPage from '../FaqPage/FaqPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import ServicePages from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft' 
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Acceuil />} />
          <Route path="orthodontiques" element={<Orthodontique />} />
          <Route path="adjointes" element={<Adjointe />} />
          <Route path="conjointes" element={<Conjointe />} />
          <Route path="histoire" element={<Histoire />} />
          <Route path="produit" element={<Produit />} />
          <Route path="travaille" element={<Travaille />} />
          <Route path='contact' element={<ContactPage />} /> 

           {/* <Route path="shop" element={<ShopPage />} />
          <Route path='shop-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path="faq" element={<FaqPage/>} />
          <Route path="services" element={<ServicePages/>} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage/>} />
          <Route path="project-single/:slug" element={<ProjectSingle />} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />  */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
