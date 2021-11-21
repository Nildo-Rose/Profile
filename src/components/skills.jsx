import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
        <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">My Specialty</span>
                    <h2 className="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <p>This are the are the programming languages that I know very well</p>
                </div>
                <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="progress-wrap">
                    <div className="desc">
                        <h3>C#</h3></div>
                        <div className="progress">
                             <div className="progress-bar color-1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={({width:'75%'})}>
                            <span>100%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                    <div className="progress-wrap">
                        <h3>React</h3>
                        <div className="progress">
                             <div className="progress-bar color-2" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                            <span>80%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="progress-wrap">
                        <h3>HTML5</h3>
                        <div className="progress">
                             <div className="progress-bar color-3" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
                            <span>100%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                    <div className="progress-wrap">
                        <h3>CSS3</h3>
                        <div className="progress">
                             <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                            <span>90%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="progress-wrap">
                        <h3>Asp.NetCore</h3>
                        <div className="progress">
                             <div className="progress-bar color-5" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                            <span>100%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                    <div className="progress-wrap">
                        <h3>PHP</h3>
                        <div className="progress">
                             <div className="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                            <span>80%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                    <div className="progress-wrap">
                        <h3>SQL</h3>
                        <div className="progress">
                             <div className="progress-bar color-6" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                            <span>100%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                    <div className="progress-wrap">
                        <h3>REACT</h3>
                        <div className="progress">
                             <div className="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                            <span>80%</span>
                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                    <div className="progress-wrap">
                        <h3>JAVASCRIPT</h3>
                        <div className="progress">
                             <div className="progress-bar color-6" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                            <span>100%</span>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
