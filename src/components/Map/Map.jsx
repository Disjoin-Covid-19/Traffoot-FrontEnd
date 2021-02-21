import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        {
          sid: 1,
          storeName: "StarBucks",
          latitude: 47.49855629475769,
          longitude: -122.14184416996333,
          isOpen: false,
        },
        {
          sid: 2,
          storeName: "Mc Donalds",
          latitude: 47.359423,
          longitude: -122.021071,
          isOpen: false,
        },
        {
          sid: 3,
          storeName: "Cafe Coffee Day",
          latitude: 47.2052192687988,
          longitude: -121.988426208496,
          isOpen: false,
        },
        {
          sid: 4,
          storeName: "Costco",
          latitude: 47.6307081,
          longitude: -122.1434325,
          isOpen: false,
        },
        {
          sid: 5,
          storeName: "Seven Eleven",
          latitude: 47.3084488,
          longitude: -122.2140121,
          isOpen: false,
        },
        {
          sid: 6,
          storeName: "Mexican Tacos",
          latitude: 47.5524695,
          longitude: -122.0425407,
          isOpen: false,
        },
      ],
    };
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // If shouldComponentUpdate returns false,
    // then render() will be completely skipped until the next state change.
    // In addition, componentWillUpdate and componentDidUpdate will not be called.
    // return false;
    return this.state.stores !== nextState.stores;
  }

  handleToggleOpen = (markerId) => {
    var stores = [...this.state.stores];
    var store = stores[markerId];
    store.isOpen = true;
    this.setState({
      stores,
    });
    // console.log(this.state);
  };

  handleToggleClose = (markerId) => {
    // console.log(markerId);
    var stores = [...this.state.stores];
    var store = stores[markerId];
    store.isOpen = false;
    this.setState({
      stores,
    });
    // console.log(this.state);
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => this.handleToggleOpen(index)}
        >
          {store.isOpen && (
            <InfoWindow onCloseClick={() => this.handleToggleClose(index)}>
              <div>
                <h3>{store.storeName}</h3>
                <p>Store Info / Foot Crowd / Traffic</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      );
    });
  };

  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 47.444, lng: -122.176 }}
        defaultZoom={10}
      >
        {this.displayMarkers()}
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `758px`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
