import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEvent } from '../../context/EventContext'; 

interface Event {
  eventName: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
}


const validationSchema = Yup.object({
  eventName: Yup.string().required('Event name is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  location: Yup.string().required('Location is required'),
  maxParticipants: Yup.number()
    .required('Max participants is required')
    .positive('Must be a positive number')
    .integer('Must be an integer'),
});

const EventForm = () => {
  const { createEvent } = useEvent();

  const initialValues: Event = {
    eventName: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxParticipants: 0,
  };

  const handleSubmit = (values: Event) => {
    createEvent(values); 
    console.log('Event Created:', values);
  };

  return (
    <div>
      <h1>Create Event</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="eventName">Event Name</label>
            <Field id="eventName" name="eventName" type="text" />
            <ErrorMessage name="eventName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field id="description" name="description" type="text" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <Field id="date" name="date" type="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="time">Time</label>
            <Field id="time" name="time" type="time" />
            <ErrorMessage name="time" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <Field id="location" name="location" type="text" />
            <ErrorMessage name="location" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="maxParticipants">Max Participants</label>
            <Field id="maxParticipants" name="maxParticipants" type="number" />
            <ErrorMessage name="maxParticipants" component="div" className="error" />
          </div>

          <button type="submit">Create Event</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EventForm;
