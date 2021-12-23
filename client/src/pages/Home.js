import { geolocated } from "react-geolocated";
import Title from '../components/Title'; 
const Home = (props) => {
    console.log(props.coords)
    return (
        <div>
            {!props.isGeolocationAvailable && <h5>Your browser does not support Geolocation, please a different browser</h5>}

            {!props.isGeolocationEnabled && <h5>Enable Location to Continue</h5>}


            {props.coords ? 
                <>
                    <Title /> 
                    <p>{`Latitude: ${props.coords.latitude}`}</p>
                    <p>{`Latitude: ${props.coords.longitude}`}</p>
                </>

            :   <>
                    <h5> Getting Location </h5>
                </>
            
            }
        </div>
    )
};

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(Home);