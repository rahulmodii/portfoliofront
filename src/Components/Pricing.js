import React,{useContext} from "react";
import { GlobalContext } from '../context/GlobalState';
const Pricing = () => {
  const data = useContext(GlobalContext);
  
  if (data.loading) {
    return <p>hello</p>;
  }
  return (
    <div>
      <section id="pricing" className="wow fadeInUp section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Pricing</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </header>
          <div className="row flex-items-xs-middle flex-items-xs-center">
            {data.data.pricing.map((u,i)=>{
              return<div className="col-xs-12 col-lg-4" key={i}>
              <div className="card">
                <div className="card-header">
                  <h3>
                    <span className="currency">$</span>{u.amount}
                    <span className="period">/month</span>
                  </h3>
                </div>
                <div className="card-block">
                  <h4 className="card-title">{u.title}</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                     {u.description}
                    </li>
                    <li className="list-group-item">24/7 Support System</li>
                  </ul>
                  <button href="#" className="btn">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            })}

            
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
