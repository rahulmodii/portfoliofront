import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
const Services = () => {
  const data = useContext(GlobalContext);
  if (data.loading) {
    return <p>hello</p>;
  }
    return (
        <section id="services" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Services</h3>
            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No
              vel partiendo abhorreant vituperatoribus.
            </p>
          </header>
          <div className="row">
            {data.data.services.map((u,i)=>{
             return <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
              key={i}
            >
              <div className="box">
                <div className="icon" style={{ background: "#fceef3" }}>
                  <i
                    className="ion-ios-analytics-outline"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 className="title">
                  <a href="#">{u.servicetext}</a>
                </h4>
                <p className="description">
                {u.servicetitle}
                </p>
              </div>
            </div>
            })}
            

          </div>
        </div>
      </section>
    )
}

export default Services
