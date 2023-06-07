import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
      loggedOut: false,
      showLoadingBar: false,
    };
    this.lastScrollPosition = 0;
    this.scrollThreshold = 100;
  }

  handleLogout = () => {
    this.setState({ loggedOut: true });
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=500')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > this.lastScrollPosition + this.scrollThreshold) {
      this.lastScrollPosition = scrollPosition;
      this.showLoadingBar();
    }
  };

  showLoadingBar = () => {
    this.setState({ showLoadingBar: true });
    setTimeout(() => {
      this.setState({ showLoadingBar: false });
    }, 2000);
  };

  render() {
    const { items, loading, loggedOut, showLoadingBar } = this.state;

    if (loggedOut) {
      return <Navigate to="/focus" />;
    }

    if (!loading) {
      return (
        <div className="container align-items-center justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    } else {
      return (
        <div className="container" style={{ backgroundColor: '#66a3ff' }}>
          <div>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block m-3"
              onClick={this.handleLogout}
            >
              LOG OUT
            </button>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-4 px-4">
              {items.map((item, index) => {
                if ((index + 1) % 10 === 0) {
                  return (
                    <>
                      <div className="col mb-4" key={item.login.uuid}>
                        <div
                          className="card h-100"
                          style={{
                            backgroundColor: '#0052cc',
                            borderRadius: '20px 20px 20px 0px',
                          }}
                        >
                          <div className="card-body">
                            <h4 className="card-title" style={{ color: 'white' }}>
                              {item.name.first}
                            </h4>
                          </div>
                          <img
                            src={item.picture.medium}
                            alt={item.name.first}
                            className="card-img-top"
                            style={{ height: '300px', width: '225px' }}
                          />
                        </div>
                      </div>
                      {showLoadingBar && (
                        <div
                          className="col mb-4 d-flex align-items-center justify-content-center"
                          style={{ height: '300px' }}
                          key={`loading-${index}`}
                        >
                          <div className="spinner-border" role="status"></div>
                        </div>
                      )}
                    </>
                  );
                } else {
                  return (
                    <div className="col mb-4" key={item.login.uuid}>
                      <div
                        className="card h-100"
                        style={{
                          backgroundColor: '#0052cc',
                          borderRadius: '20px 20px 20px 0px',
                        }}
                      >
                        <div className="card-body">
                          <h4 className="card-title" style={{ color: 'white' }}>
                            {item.name.first}
                          </h4>
                        </div>
                        <img
                          src={item.picture.medium}
                          alt={item.name.first}
                          className="card-img-top"
                          style={{ height: '300px', width: '225px' }}
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
