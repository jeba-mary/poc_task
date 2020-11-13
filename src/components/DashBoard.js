import React from 'react';
import { Link } from 'react-router-dom';

class DashBoard extends React.Component {
  render () {
    return (
      <div className="dash container-fluid">
        <div className="header text-center">
          <h5>Employee Home</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Link to="/info" className="user-name" style={{textDecoration: 'none'}}><h4>Hi, Jeba</h4></Link>
              <p>A warm welcome to the Ramco System's Family!!</p>
            </div>
            <div className="col-md-4">
              <img src="./assets/images/user1.jpeg" alt="user" className="profile" />
            </div>
          </div>
        </div>

        <div className="container">
          <div class="about jumbotron">
            <h5>About Ramco</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        

        <div class="container">
            <h5>Videos</h5>
            <div class="row blog">
              <div class="col-md-12">
                <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#blogCarousel" data-slide-to="1"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-sm-3 col-xs-6">
                          <a href="#">
                            <img src="./assets/images/book.jpeg" alt="Image" className="img" />
                          </a>
                         </div>
                        <div class="col-sm-3 col-xs-6">
                          <a href="#">
                          <img src="./assets/images/book.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                        <div class="col-sm-3 col-xs-6">
                          <a href="#">
                          <img src="./assets/images/book.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                        <div class="col-sm-3 col-xs-6">
                          <a href="#">
                          <img src="./assets/images/book.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-3">
                          <a href="#">
                          <img src="./assets/images/book2.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                          <img src="./assets/images/book2.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                          <img src="./assets/images/book2.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                          <img src="./assets/images/book2.jpeg" alt="Image" className="img" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className=" todo container">
            <h4>ToDo</h4>
            <div className="container text-center">
              <div class="row">
                <div class="col-sm-3">
                  <i class="fa fa-lock" aria-hidden="true" ></i>              
                  <p >Confidentiality Agreement</p>
                </div>
                <div class="col-sm-3">
                  <i class="fa fa-address-card-o" aria-hidden="true"></i>              
                  <p >GDPR</p>
                </div>
                <div class="col-sm-3">
                  <i class="fa fa-shield" aria-hidden="true"></i>             
                  <p>Desktop Security Agreement</p>
                </div>
                <div class="col-sm-3">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                  <p>Code Of Conduct</p>
                </div>
              </div>
            </div>
        </div>

          <div className="footer container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="row list-unstyled">
                  <li class="col-sm-12">
                    <div class="row content">       
                      <div className="col-sm-3">
                        <img src="./assets/images/checklist.png" alt="check" className="checkimg"  />
                      </div>
                      <div className="col-sm-6">
                        <p>Fill in your personel Details</p>
                      </div>
                      <div className="col-sm-3">
                        <span className="details">0%</span>
                      </div>
                    </div>
                  </li>
                  <li class="col-sm-12">
                    <div class="row content">       
                      <div className="col-sm-3">
                        <img src="./assets/images/pdf.png" alt="pdf" className="pdfimg" />                      </div>
                      <div className="col-sm-6">
                        <p>Instruction GuideLines</p>
                      </div>
                      <div className="col-sm-3">
                        <i class="fa fa-download" aria-hidden="true" ></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
           </div>
      </div>
    )
  }
}

export default DashBoard;