const Body = () => {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://bravaland.com/cdn/shop/files/DSC00058_CAROUSEL_1_1440x650_crop_center.jpg?v="
              className="d-block w-100"
              alt="..."
            />
                <div className="carousel-caption d-none d-md-block  text-start">
                    <h1 className="display-3" style={{ fontFamily: 'YourCustomFont', fontSize: '5rem', fontWeight: 'bold' }}>Heritahe Hoodies</h1>
                    <a className="btn btn-light btn-lg" href="https://bravaland.com/collections/heritage-hoodies" style={{ fontFamily: 'YourCustomFont', fontSize: '1.25rem' }}>Shop Now</a>
                </div>

          </div>
          <div className="carousel-item">
            <img
              src="https://bravaland.com/cdn/shop/files/DSC09802_carousel_1440x650_crop_center.jpg?v=1691318279"
              className="d-block w-100"
              alt="..."
            />
                <div className="carousel-caption d-none d-md-block  text-start">
                    <h1 className="display-3" style={{ fontFamily: 'YourCustomFont', fontSize: '5rem', fontWeight: 'bold' }}>heritage Tees</h1>
                    <a className="btn btn-light btn-lg" href="https://bravaland.com/collections/heritage-tees" style={{ fontFamily: 'YourCustomFont', fontSize: '1.25rem' }}>Shop Now</a>
                </div>

          </div>
          <div className="carousel-item">
            <img
              src="https://bravaland.com/cdn/shop/files/DSC09179_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279"
              className="d-block w-100"
              alt="..."
            />
                <div className="carousel-caption d-none d-md-block  text-start">
                    <h1 className="display-3" style={{ fontFamily: 'YourCustomFont', fontSize: '5rem', fontWeight: 'bold' }}>Premium Tees</h1>
                    <a className="btn btn-light btn-lg" href="https://bravaland.com/collections/heritage-tees" style={{ fontFamily: 'YourCustomFont', fontSize: '1.25rem' }}>Shop Now</a>
                </div>

          </div>
          <div className="carousel-item">
            <img
              src="https://bravaland.com/cdn/shop/files/DSC00198_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318278"
              className="d-block w-100"
              alt="..."
            />
                <div className="carousel-caption d-none d-md-block  text-start">
                    <h1 className="display-3" style={{ fontFamily: 'YourCustomFont', fontSize: '5rem', fontWeight: 'bold' }}>Premium Zip Hoodies</h1>
                    <a className="btn btn-light btn-lg" href="/collections/premium-tees" style={{ fontFamily: 'YourCustomFont', fontSize: '1.25rem' }}>Shop Now</a>
                </div>

          </div>
          <div className="carousel-item">
            <img
              src="https://bravaland.com/cdn/shop/files/DSC09618_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279"
              className="d-block w-100"
              alt="..."
            />
                <div className="carousel-caption d-none d-md-block  text-start">
                    <h1 className="display-3" style={{ fontFamily: 'YourCustomFont', fontSize: '5rem', fontWeight: 'bold' }}>Heritage Women Tanks</h1>
                    <a className="btn btn-light btn-lg" href="https://bravaland.com/collections/heritage-tees" style={{ fontFamily: 'YourCustomFont', fontSize: '1.25rem' }}>Shop Now</a>
                </div>

          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default Body;
  