// import React, { Component } from "react";
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import mapStyles from "./mapStyles";
import SideBar from "./../../common/SideBar/SideBar";

class MapView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     stores: [
  //       {
  //         sid: 1,
  //         storeName: "StarBucks",
  //         latitude: 47.49855629475769,
  //         longitude: -122.14184416996333,
  //       },
  //       {
  //         sid: 2,
  //         storeName: "Mc Donalds",
  //         latitude: 47.359423,
  //         longitude: -122.021071,
  //       },
  //       {
  //         sid: 3,
  //         storeName: "Cafe Coffee Day",
  //         latitude: 47.2052192687988,
  //         longitude: -121.988426208496,
  //       },
  //       {
  //         sid: 4,
  //         storeName: "Costco",
  //         latitude: 47.6307081,
  //         longitude: -122.1434325,
  //       },
  //       {
  //         sid: 5,
  //         storeName: "Seven Eleven",
  //         latitude: 47.3084488,
  //         longitude: -122.2140121,
  //       },
  //       {
  //         sid: 6,
  //         storeName: "Mexican Tacos",
  //         latitude: 47.5524695,
  //         longitude: -122.0425407,
  //       },
  //     ],
  //     activeMarker: {
  //       sid: 6,
  //       storeName: "Mexican Tacos",
  //       latitude: 47.5524695,
  //       longitude: -122.0425407,
  //     },
  //     showingInfoWindow: true,
  //   };
  // }
  // toggleInfo = (markerId) => {
  //   var stores = [...this.state.stores];
  //   console.log(stores[markerId]);
  // };
  // onInfoWindowClose = () => {
  //   this.setState({
  //     activeMarker: null,
  //     showingInfoWindow: false,
  //   });
  //   console.log("closed");
  // };
  // onMapClicked = () => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       activeMarker: null,
  //       showingInfoWindow: false,
  //     });
  //   }
  //   console.log(this.state);
  // };
  // onMarkerClick = (index) => {
  //   var stores = [...this.state.stores];
  //   let marker = stores[index];
  //   this.setState({
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //   });
  //   console.log(this.state);
  //   this.displayIndfoWindow();
  // };
  // displayMarkers = () => {
  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         id={index}
  //         position={{
  //           lat: store.latitude,
  //           lng: store.longitude,
  //         }}
  //         // onClick={() => this.toggleInfo(index)}
  //         onClick={() => this.onMarkerClick(index)}
  //       />
  //     );
  //   });
  // };
  // displayIndfoWindow = () => {
  //   console.log(this.state.activeMarker);
  //   <InfoWindow
  //     marker={this.state.activeMarker}
  //     onClose={this.onInfoWindowClose}
  //     visible={this.state.showingInfoWindow}
  //   >
  //     <div>
  //       <h4>{this.state.activeMarker.storeName}</h4>
  //     </div>
  //   </InfoWindow>;
  // };
  // render() {
  //   const mapStyles = {
  //     width: "100%",
  //     height: "700px",
  //   };
  //   return (
  //     <div>
  //       <h1>Map View</h1>
  //       <Map
  //         google={this.props.google}
  //         zoom={8}
  //         style={mapStyles}
  //         initialCenter={
  //           // { lat: 30.7333, lng: 76.7794 }
  //           { lat: 47.444, lng: -122.176 }
  //         }
  //         onClick={this.onMapClicked}
  //       >
  //         {/* <Marker position={{ lat: 30.7333, lng: 76.7794 }} /> */}
  //         {this.displayMarkers()}
  //       </Map>
  //     </div>
  //   );
  // }

  state = {
    stores: [
      {
        sid: 1,
        storeName: "StarBucks",
        latitude: 47.49855629475769,
        longitude: -122.14184416996333,
      },
      {
        sid: 2,
        storeName: "Mc Donalds",
        latitude: 47.359423,
        longitude: -122.021071,
      },
      {
        sid: 3,
        storeName: "Cafe Coffee Day",
        latitude: 47.2052192687988,
        longitude: -121.988426208496,
      },
      {
        sid: 4,
        storeName: "Costco",
        latitude: 47.6307081,
        longitude: -122.1434325,
      },
      {
        sid: 5,
        storeName: "Seven Eleven",
        latitude: 47.3084488,
        longitude: -122.2140121,
      },
      {
        sid: 6,
        storeName: "Mexican Tacos",
        latitude: 47.5524695,
        longitude: -122.0425407,
      },
    ],
  };
  displayMarkers = () => {
    let iconMarker = new window.google.maps.MarkerImage(
      "https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300",
      null /* size is determined at runtime */,
      null /* origin is 0,0 */,
      null /* anchor is bottom center of the scaled image */,
      new window.google.maps.Size(60, 60)
    );
    return this.state.stores.map((mark, index) => {
      return (
        <Marker
          key={mark.sid}
          id={index}
          position={{ lat: mark.latitude, lng: mark.longitude }}
          onClick={() => console.log("You clicked me!", { index })}
          icon={iconMarker}
        />
      );
    });
  };
  render() {
    return (
      <>
        <SideBar />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "1100px",
          }}
          className="map"
        >
          <Map
            google={this.props.google}
            zoom={13}
            styles={mapStyles.styles}
            initialCenter={{ lat: 47.5524695, lng: -122.0425407 }}
            disableDefaultUI={true}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </>
    );
  }
}

// export default MapView;

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapView);
