export function isFloat(val: string | number): boolean {
	return Number(val) % 1 !== 0;
}
/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
export const isNil = (children: any) =>
	children === null || children === undefined || (Array.isArray(children) && children.length === 0);

/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
interface GetElementTypeProps {
	href?: string;
	[prop: string]: any;
}
export function getElementType(
	Component: React.ComponentType<{ as: string }>,
	props: GetElementTypeProps,
	getDefault?: any,
) {
	const { defaultProps = {} } = Component;

	// ----------------------------------------
	// user defined "as" element type

	if (props.as && props.as !== defaultProps.as) {
		return props.as;
	}

	// ----------------------------------------
	// computed default element type

	if (getDefault) {
		const computedDefault = getDefault();
		if (computedDefault) {
			return computedDefault;
		}
	}

	// ----------------------------------------
	// infer anchor links

	if (props.href) {
		return "a";
	}

	// ----------------------------------------
	// use defaultProp or 'div'

	return defaultProps.as || "div";
}

/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
export const getUnhandledProps = (Component: any, props: any) => {
	// Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
	const { handledProps = [] } = Component;

	return Object.keys(props).reduce((acc: any, prop: any) => {
		if (prop === "childKey") {
			return acc;
		}
		if (handledProps.indexOf(prop) === -1) {
			acc[prop] = props[prop];
		}
		return acc;
	}, {});
};

/**
 * Add Commas into number
 * @method addCommas
 * @param   {Number}  number [Number, like: 300000]
 * @return  {String}  		 [Returned String, like: 30,000]
 */
const addCommas = (num: number | string | null | undefined): string | undefined => {
	if (!num) {
		return;
	}

	const commaNum = "" + num;

	return commaNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export default addCommas;
