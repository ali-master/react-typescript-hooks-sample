import * as React from "react";

interface Props {
	condition?: boolean;
}

// eslint-disable-next-line no-extra-boolean-cast
const Maybe: React.FC<Props> = ({ children, condition }) => (Boolean(condition) ? children : null);

export default Maybe;
