import React from 'react';

const Announcement = () => (
  <div className='bg-warning pt-3 pb-3' style={{ fontFamily: 'Arial, sans-serif', color: '#333', textAlign: 'center' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, textTransform: 'uppercase' }}>
      Visit Us on TikTok <a href="mailto:bravaland@example.com" style={{ color: '#e44d26', textDecoration: 'underline' }}>@bravaland.com</a>
    </h1>
    <p style={{ fontSize: '16px', margin: '8px 0', color: '#555' }}>
      Explore exclusive content and updates!
    </p>
  </div>
);

export default Announcement;
