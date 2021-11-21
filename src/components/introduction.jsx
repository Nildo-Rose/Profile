import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/FB_IMG_1560432584286.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Nildo Rose</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/19Mp-m4Z7aw1aaAexzFJY0YsimU4o5GCi/edit?usp=sharing&ouid=109382084220726064089&rtpof=true&sd=true">View CV<i className="icon-download4" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1TF54d7fy0e_-HTxBkWj1Zu9fkcaXM-Dk/edit?usp=sharing&ouid=109382084220726064089&rtpof=true&sd=true">View CoverLatter<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/FB_IMG_1543091434193.jpg'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love solving <br /> PROBLEMS !!</h1>
                          <h2>I also love building <br /> THINGS !!</h2>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/Nildo-Rose" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
           {/*    <li style={{backgroundImage: 'url(images/FB_IMG_1543091434193.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
