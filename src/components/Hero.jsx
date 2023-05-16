import { Button } from "react-bootstrap";
function Hero() {
  return (
    <div className="hero-view" id="#hero">
      <div className="text-center" id="hero">
        <div className="container px-3 mt-5">
          <div className="row mb-md-0 mb-5">
            <div className="col-lg-6 py-lg-5">
              <div className="hero-content py-5">
                <h1 className="text-lg-start fw-bold main-title">
                  Sipenting <span className="singkatan">Sistem Pencegahan Stunting</span>
                </h1>
                <p className="text-lg-start mt-lg-2 main-content fs-5">SIPENTING merupakan layanan konsultasi stunting, cek stunting dan edukasi yang bertujuan untuk pencegahan stunting pada masyakarat Indonesia.</p>

                <div className="mt-4 text-lg-start">
                  <Button variant="success">Coba Cek IMT</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center text-lg-start mt-6">
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/hero_e6ssza.png" className="hero-img img-fluid" alt="Hero" width="500" height="500" />
              </div>
            </div>
            <hr className="bg-white mt-sm-5 pt-sm-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
