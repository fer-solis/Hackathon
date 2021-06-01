import React from 'react';
import GoogleMaps from 'simple-react-google-maps';
const Maps = () => {
        return(
            <div>
                <div className='container'>
                    <GoogleMaps
                    apiKey={'AIzaSyAKEyJXo3HxVTw4y8VKrNEz5bARXVPSEvk'}
                    style={{ height: '630px', width:'350px' }}
                    zoom={15}
                    center={{
                        lat: 19.427384847566692,
                        lng: -99.16754034140608
                    }}
                    markers={[
                        { lat: 19.425401422243592, lng:-99.16973568895239},
                        { lat: 19.427546660301132, lng:-99.16976273767368},
                        { lat: 19.42916072718926, lng:-99.16476757233319},
                        { lat: 19.42717173310868, lng:-99.20509326197146},
                        { lat: 19.422935306892068, lng:-99.17049915826021}
                    ]}
                    
                    
                    />
                </div>
            </div>
        );
    }
    export default Maps;