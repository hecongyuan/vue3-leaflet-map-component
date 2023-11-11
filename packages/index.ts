import LsMap from './ls-map';
import LsMapDivMarker from './ls-map-divmarker';
import LsMapGeo from './ls-map-geo';
import LsMapMarker from './ls-map-marker';
import LsMapPopup from './ls-map-popup';

//按需引入
export { LsMap, LsMapDivMarker, LsMapGeo, LsMapMarker, LsMapPopup };

const components = [LsMap,LsMapDivMarker,LsMapGeo,LsMapMarker,LsMapPopup];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default {
	install,
};

