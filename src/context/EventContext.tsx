"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';


interface Event {
  eventName: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
}


interface EventContextType {
  event: Event | null;
  createEvent: (eventData: Event) => void;
}


const EventContext = createContext<EventContextType | null>(null);


export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};


interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps): JSX.Element => {
  const [event, setEvent] = useState<Event | null>(null);

  
  const createEvent = (eventData: Event) => {
    setEvent(eventData);
  };

  return (
    <EventContext.Provider value={{ event, createEvent }}>
      {children}
    </EventContext.Provider>
  );
};
