// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import snackbar from "node-snackbar/dist/snackbar";
import "node-snackbar/dist/snackbar.css";

type NotifyPosition = "bottom-right" | "bottom-center" | "bottom-left" | "top-right" | "top-center" | "top-left";
interface INotify {
	text?: string;
	textColor: string;
	width: string | number;
	showAction: boolean;
	actionText: string;
	actionTextColor: string;
	backgroundColor: string;
	pos: NotifyPosition;
	duration: number;
	customClass: string;
	onClose: (element: HTMLDivElement) => void;
	onActionClick: (element: HTMLDivElement) => void;
	[setting: string]: any;
}
type Notify = Partial<INotify>;
export const showNotify = (settings: Notify | Error): void => {
	if (settings) {
		return snackbar.show({
			customClass: "snakbarify",
			actionText: "Close",
			showAction: false,
			pos: "bottom-center",
			...settings,
		} as Notify);
	}
};

export const closeNotify = (): void => snackbar.close();

export default showNotify;
