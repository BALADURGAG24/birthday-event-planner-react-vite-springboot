import React from 'react';
import Gallery from 'react-photo-gallery';
import Footer from './Footer';
import Navbar from './Navbar';

const photos = [
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery1.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery2.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery3.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery4.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery5.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery6.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery7.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery8.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery9.webp',  width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery10.webp', width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery11.webp', width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery12.webp', width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery13.webp', width: 4, height: 3 },
  { src: 'https://www.bambooevents.co.in/images/gallery/gallery14.webp', width: 4, height: 3 },
];
function GalleryComponent() {
  return (
    <div className="gallery-container">
      <Navbar />
      <br />
      <br />
      <h1>Image Gallery</h1>
      <Gallery photos={photos} />
      <Footer />
    </div>
  );
}

export default GalleryComponent;
