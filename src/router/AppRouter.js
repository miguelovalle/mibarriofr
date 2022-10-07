import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddressModal } from '..//components/address/AddressModal';
import { Login } from '../components/auth/Login';
import { Registro } from '../components/auth/Registro';
import { ProductList } from '../components/comercio/ProductList';
import { ShopList } from '../components/comercio/ShopList';
import Gmap from '../components/GoogleMap/Gmap';
import { HeaderBar } from '../components/header/HeaderBar';
import { LandingScreen } from '../components/landing/LandingScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/map" element={<Gmap />} />
        <Route path="/regaddress" element={<AddressModal />} />
        <Route path="products" element={<ProductList />} />
      </Routes>

      <Routes>
        <Route path="/" element={<HeaderBar />}>
          <Route index element={<ShopList />} />
          <Route path="shops" element={<ShopList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
