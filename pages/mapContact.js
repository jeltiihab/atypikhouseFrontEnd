import React, { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
import ReactMapGl from '@urbica/react-map-gl';


function MapContact() {

    const [viewport, setViewport] = useState({
        with: "80%",
        height: "100%",
        latitude: 48.866667,
        longitude: 2.333333,
        zoom: 11
      });
      
    return (
        <div className='relative h-32 w-32' >
            <div className='absolute inset-x-20 inset-y-20 inset-z-20 bottom-0 right-0 h-16'>
            <ReactMapGl 
                mapStyle="mapbox://styles/atypikhousezahi/ckwo3njja7ply14ocxtfk04bs"
                accessToken="pk.eyJ1IjoiYXR5cGlraG91c2V6YWhpIiwiYSI6ImNrd28zN2x2MTJycnMydnF2aTI3ajh2Z3kifQ.8F-onlitjd-leyTdUH41uw"
                {...viewport}
            >
            </ReactMapGl>
            </div>
        </div>
    )
}

export default MapContact
