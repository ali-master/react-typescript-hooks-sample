import { useState, useEffect } from "react";

interface IUseOffline {
	isOffline: boolean;
	setOffline: (status: boolean) => void;
}

function useOffline(): IUseOffline {
	const [isOffline, setOffline] = useState(false);

	useEffect(() => {
		window.addEventListener("online", () => {
			setOffline(false);
		});
		window.addEventListener("offline", () => {
			setOffline(true);
		});

		return () => {
			window.removeEventListener("online", () => {
				setOffline(false);
			});
			window.removeEventListener("offline", () => {
				setOffline(true);
			});
		};
	});

	return { isOffline, setOffline };
}

export default useOffline;
