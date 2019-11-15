import * as React from "react";

interface MaybeProps {
	children: React.ReactElement;
	condition?: boolean;
}

// eslint-disable-next-line no-extra-boolean-cast
const Maybe: React.FC<MaybeProps> = ({ children, condition }) => (Boolean(condition) ? children : null);

export default Maybe;
