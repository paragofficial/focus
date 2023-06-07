import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import {Navigate} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      loggedIn: false, 
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('form submitted ✅');
    const { first, last } = this.state;
    if (first === "foo" && last==="bar") {
      console.log('same value');
      this.setState({ loggedIn: true }); // Set loggedIn state to true
    } else {
      console.log('not same');
    }
  };

  handleFirstChange = event => {
    this.setState({ first: event.target.value });
  };

  handleLastChange = event => {
    this.setState({ last: event.target.value });
  };

  render() {
    const { first, last, loggedIn } = this.state;

    if (loggedIn) {
      return <Navigate to="/focus/home" />; 
    }


 
    
    return (
      <section className="vh-100" style={{backgroundColor: '#66a3ff'}}>
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '1rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ backgroundColor: '#0052cc'}}>
                    <div className="card-body p-4 p-lg-5 text-black" style={{color: "white"}}>
                      <form >
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                          <span className="h1 fw-bold mb-0" style={{color: "white"}}>Logo</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px' ,color: "white"}}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input type="text" id="first" name="first" value={first} onChange={this.handleFirstChange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17" style={{color: "white"}}>Username</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="last" name="last" value={last} onChange={this.handleLastChange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example27" style={{color: "white"}}>Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={this.handleSubmit}>Login</button>
                        </div>
                        
                        <a href="#!" className="small text-muted" >Terms of use.</a>
                        <a href="#!" className="small text-muted" >Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

