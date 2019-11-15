import { createBrowserHistory, Location, History } from "history";
import qs from "qs";

interface ILocation extends Location {
	query: {
		[query: string]: string;
	};
	state: {
		[state: string]: string;
	};
}
interface IHistoryProps extends History {
	location: ILocation;
}

const history = createBrowserHistory() as IHistoryProps;

history.location = {
	...history.location,
	query: qs.parse(history.location.search.substr(1)),
	state: {},
};
history.listen(() => {
	history.location = {
		...history.location,
		query: qs.parse(history.location.search.substr(1)),
		state: history.location.state || {},
	};
});

const getRedirectPath = (router = window) => encodeURIComponent(`${router.location.pathname}${router.location.search}`);
const { go, goBack, push, replace } = history;

export { go, goBack, push, replace, getRedirectPath };
export default history;
