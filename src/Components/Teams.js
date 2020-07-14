import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Teams = () => {
  const data = useContext(GlobalContext);
  if (data.loading) {
    return <p>hello</p>;
  }
    return (
        <section id="team" className="section-bg">
        <div className="container">
          <div className="section-header">
            <h3>Team</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>
          <div className="row">
            {data.data.team.map((u,i)=>{
                return <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
                <div className="member">
                  <img src={u.image} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>{u.title}</h4>
                      <span>{u.post}</span>
                      <div className="social">
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    )
}

export default Teams
