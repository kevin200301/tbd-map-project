import Mapbox, { MapView } from "@rnmapbox/maps";

const AccessToken = 'pk.eyJ1Ijoia2V2aW4yMDAzMDEiLCJhIjoiY204emtoeHIyMGNkbDJycHRjc3c2dDhvaSJ9.4s57nNoafmaQBTPnc0MaXw';
Mapbox.setAccessToken(AccessToken);

export default function Map() {
    return <MapView style={{ flex: 1}}/>;

}