import React from 'react'

const CTA = () => {
    return (
        <section id="call-to-action" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-left">
              <h3 className="cta-title">Call To Action</h3>
              <p className="cta-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <button className="cta-btn align-middle" >
                Call To Action
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CTA
