// Import React
import React from 'react';

// ProductCard component
const ProductCard = ({ name, imageUrl, link, backgroundColor }) => {
  return (
    <div className='m-5' style={{ display: 'inline-block', margin: '5px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopLeftRadius: '70px', borderBottomLeftRadius: '70px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', width: '300px', padding: '10px', backgroundColor }}>
        <div style={{ flex: 1 }}>
          <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={imageUrl} alt={`${name} Logo`} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', textAlign: 'right', paddingRight: '10px' }}>
          <h5 style={{ alignSelf: 'flex-start' }}>{name}</h5>
          <a style={{ color: 'white', textDecoration: 'none' }} href={link}><button className='btn btn-light text-dark'>SHOP NOW</button></a>
        </div>
      </div>
    </div>
  );
};

// MarqueFlow component
const MarqueFlow = () => {
  const products = [
    {
      name: '$hosky',
      imageUrl: '//bravaland.com/cdn/shop/files/Logo_375x_crop_center.png?v=1684399074',
      link: 'https://bravaland.com/collections/hosky',
      backgroundColor: 'blue',
    },
    {
      name: '$bitfins',
      imageUrl: 'https://bravaland.com/cdn/shop/files/FEcb3_Fr_400x400_adfb82ab-decb-4bd3-b9aa-a7b95da5b399_375x_crop_center.jpg?v=1691533767',
      link: 'https://bravaland.com/collections/bitfins',
      backgroundColor: 'purple',
    },
    {
      name: '$danketsu',
      imageUrl: 'https://bravaland.com/cdn/shop/files/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f.jpg?v=1691536003',
      link: 'https://bravaland.com/collections/bitfins',
      backgroundColor: 'black',
    },
    {
      name: '$future fest',
      imageUrl: 'https://bravaland.com/cdn/shop/files/Future_Fest_Profile_Picture_2.png?v=1684398899',
      link: 'https://bravaland.com/collections/future-fest',
      backgroundColor: 'black',
    },
  ];

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {/* Use the marquee tag for scrolling effect */}
      <marquee style={{ display: 'inline-block', animation: 'marquee 20s linear infinite' }}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </marquee>
    </div>
  );
};

export default MarqueFlow;

