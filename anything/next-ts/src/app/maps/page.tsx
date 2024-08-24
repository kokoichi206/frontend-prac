"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const LATITUDE = 35.64632896507365;
const LONGITUDE = 139.7481202994743;
const ZOOM = 15;

const center = {
  lat: LATITUDE,
  lng: LONGITUDE,
};

const Maps: React.FC = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "";

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={ZOOM}
      />
    </LoadScript>
  );
};

export default Maps;
