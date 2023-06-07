import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
      loggedOut: false,
    };
  }

  handleLogout = () => {
    this.setState({ loggedOut: true });
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }

  render() {
    const { items, loading, loggedOut } = this.state;

    if (loggedOut) {
      return <Navigate to="/" />;
    }

    if (!loading) {
      return (
        <div className="container align-items-center justify-content-center" >
          <div className="spinner-border" role="status"></div>
        </div>
      );
    } else {
      return (
        <div className="container" style={{backgroundColor: '#66a3ff'}}>
          <div>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block m-3"
              onClick={this.handleLogout}
            >
              LOG OUT
            </button>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-4 px-4">
              {items.map((item) => (
                <div className="col mb-4" key={item.login.uuid}>
                  <div className="card h-100" style={{  backgroundColor: '#0052cc' , borderRadius: "20px 20px 20px 0px"}}>
                  <div className="card-body">
                      <h4 className="card-title" style={{color:"white"}}>{item.name.first}</h4>
                    </div>
                    <img
                      src={item.picture.medium}
                      alt={item.name.first}
                      className="card-img-top"
                      style={{ height: '300px', width: '225px' }}
                    />
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
