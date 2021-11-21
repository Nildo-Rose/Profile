import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Education</span>
                    <h2 className="colorlib-heading animate-box fadeInUp animated">Educational Background</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="fancy-collapse-panel">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="collapsed">Advanced Diploma In Information Technology(Software Development)
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse" role="radio" aria-labelledby="headingOne" aria-checked="false" style={{height: '0px'}}>
                                     <div className="panel-body">
                                        <div className="row">
                                              <div className="col-md-6">
                                                  <p>Nelson Mandela University, Eastern Cape, Port Elizabeth </p>
                                              </div>
                                              <div className="col-md-6">
                                                  <p>Port Elizabeth is a city on Algoa Bay in South Africa's Eastern Cape Province. A major port, it's also known for its numerous beaches. The Donkin Heritage Trail takes in the Old Hill neighbourhood's Victorian landmarks. Coastal boat tours spot whales and rare seabirds, while wildlife reserves outside the metropolitan area are home to elephants, rhinos and other big game </p>
                                              </div>
                                          </div>
                                     </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">National Diploma In Information Technology(Software Development) 
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="radio" aria-labelledby="headingTwo" aria-checked="false">
                                  
                                <div className="panel-body">
                                        <div className="row">
                                              <div className="col-md-6">
                                                  <p>Nelson Mandela University, Eastern Cape, Port Elizabeth </p>
                                              </div>
                                              <div className="col-md-6">
                                                  <p>Port Elizabeth is a city on Algoa Bay in South Africa's Eastern Cape Province. A major port, it's also known for its numerous beaches. The Donkin Heritage Trail takes in the Old Hill neighbourhood's Victorian landmarks. Coastal boat tours spot whales and rare seabirds, while wildlife reserves outside the metropolitan area are home to elephants, rhinos and other big game </p>
                                              </div>
                                          </div>
                                     </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">National Higher Certificate In Information Technology 
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="radio" aria-labelledby="headingThree" aria-checked="false">
                                <div className="panel-body">
                                        <div className="row">
                                              <div className="col-md-6">
                                                  <p>Nelson Mandela University, Eastern Cape, Port Elizabeth </p>
                                              </div>
                                              <div className="col-md-6">
                                                  <p>Port Elizabeth is a city on Algoa Bay in South Africa's Eastern Cape Province. A major port, it's also known for its numerous beaches. The Donkin Heritage Trail takes in the Old Hill neighbourhood's Victorian landmarks. Coastal boat tours spot whales and rare seabirds, while wildlife reserves outside the metropolitan area are home to elephants, rhinos and other big game </p>
                                              </div>
                                          </div>
                                     </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFour">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">CISCO CCNA Certificate
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse" role="radio" aria-labelledby="headingFour" aria-checked="false">
                                    <div className="panel-body">
                                        <p>Cisco Academy</p>	
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFive">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> National Senior Certificate 
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse" role="radio" aria-labelledby="headingFive"aria-checked="false" style={{height: '0px'}}>
                                    <div className="panel-body">
                                        <p>Mashishing Secondary School, Mpumalanga - Lydenburg</p>	
                                    </div>
                                </div>
                            </div>
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
