import "./styles.css";
import Banner from "./img/Banner.jpg";
import Sky from "./img/Sky.jpg";
import scuba from "./img/Scuba.jpg";
import bungee from "./img/Bungee.jpg";

export default function App() {
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat"
        }}
      >
        <h1 className="main-title">Universal Adventures</h1>
      </section>
      <section className="card-sec">
        <div className="card-wrapper">
          <div
            className="card1"
            style={{
              backgroundImage: `url(${Sky})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="title">Sky Diving</span>
          </div>
          <div className="card2">
            <div className="row1">
              <div className="img-container">
                <img src={scuba} alt="card1" className="img-fluid" />
              </div>
              <div className="card-container">
                <div className="card-title">
                  <h1>Scuba Diving in Grande island ,Goa</h1>
                </div>

                <div className="location">
                  <span className="loby">
                    <i class="ri-timer-2-line"></i>
                    <span>8 hour</span>
                  </span>
                  <span className="loby">
                    <i class="ri-map-pin-fill"></i>
                    <span>Goa ,India</span>
                  </span>
                </div>
                <hr />

                <div className="feature">
                  <div className="facilities">
                    <div className="blob">
                      <i class="ri-restaurant-2-fill"></i>
                      <span>Snacks</span>
                    </div>
                    <div className="blob">
                      <i class="ri-truck-fill"></i>
                      <span>Transport</span>
                    </div>
                    <div className="blob">
                      <i class="ri-camera-fill"></i>
                      <span>Photo/videos</span>
                    </div>
                    <div className="blob">
                      <i class="ri-building-3-fill"></i>
                      <span>Activities</span>
                    </div>
                  </div>

                  <div className="btn-grp">
                    <button>Long tail boat ride</button>
                    <button>Under water photo and video</button>
                  </div>
                </div>
              </div>
              <div className="card-rating">
                <div className="rating">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <span>4.7</span>
                </div>

                <div className="review">36 Reviews</div>

                <div className="price-card">
                  <h4>Starting From</h4>
                  <h3>$ 17000</h3>
                  <button className="btn">View Details</button>
                </div>
              </div>
            </div>
            <div className="row1">
              <div className="img-container">
                <img src={bungee} alt="card1" className="img-fluid" />
              </div>
              <div className="card-container">
                <div className="card-title">
                  <h1>Bungee Jumping in Goa</h1>
                </div>

                <div className="location">
                  <span className="loby">
                    <i class="ri-timer-2-line"></i>
                    <span>30 min</span>
                  </span>
                  <span className="loby">
                    <i class="ri-map-pin-fill"></i>
                    <span>Goa ,India</span>
                  </span>
                </div>
                <hr />

                <div className="feature">
                  <div className="facilities">
                    <div className="blob">
                      <i class="ri-camera-fill"></i>
                      <span>Photo/videos</span>
                    </div>
                    <div className="blob">
                      <i class="ri-building-3-fill"></i>
                      <span>Activities</span>
                    </div>
                  </div>

                  <div className="btn-grp">
                    <button>61 meter height</button>
                    <button>Jump photo and video</button>
                  </div>
                </div>
              </div>
              <div className="card-rating">
                <div className="rating">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <span>4.7</span>
                </div>

                <div className="review">36 Reviews</div>

                <div className="price-card">
                  <h4>Starting From</h4>
                  <h3>$ 2800</h3>
                  <button className="btn">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
