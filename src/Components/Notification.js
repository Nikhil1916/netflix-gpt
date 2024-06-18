import React from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () =>{
  const message = useSelector((app)=>app.config.notify);
  if(!message) {
    return;
  }
  const notify = (message) => toast(message);
  notify(message);
  return (
    <div>
      <ToastContainer position="bottom-left"/>
    </div>
  );
};
export default Notification;
