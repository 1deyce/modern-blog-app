"use client";
import React, { useEffect, useState } from "react";
import { Layout } from '../components/index';
import '../styles/globals.scss';
import "tailwindcss/tailwind.css";

export const metadata = {
  title: 'Splattr',
  description: 'Generated by create next app',
}
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;