"use client";

import React from "react";
import Header from "@/components/Header";
import Homepage from "@/components/Homepage";
import SearchBar from "@/components/SearchBar";
import { EventProvider } from '@/context/EventContext';

const HomePage = () => {
  return (
    <div>
      <EventProvider>
      <Header />
      <Homepage />
      <SearchBar />
      </EventProvider>
    </div>
  );
};

export default HomePage;
