import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Portfolio = () => {
  const data = useContext(GlobalContext);
  if (data.loading) {
    return <p>hello</p>;
  }
  return (
    <section id="portfolio" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>
        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">

        {data.data.portfolio.map((u,i)=>{
          return   <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={u} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>
                <a href="#">App 1</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href={u}
                  data-lightbox="portfolio"
                  data-title="App 1"
                  className="link-preview"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>
        })}

        
          
          
          

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
