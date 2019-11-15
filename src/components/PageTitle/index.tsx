import * as React from "react";
import { Helmet } from "react-helmet";

interface IContentItem {
	summary: string;
	smallIconUrl: string;
	title: string;
	contentUrl: string;
}
interface IProps {
	title?: string;
	description?: string;
	contentItem?: IContentItem | null;
}

const PageTitle: React.FC<IProps> = ({ title, description, contentItem }: IProps) => {
	return (
		<Helmet>
			<title itemProp="name">{title}</title>
			{description && !contentItem && <meta name="description" content={description} />}
			{contentItem && [
				<meta key="description" name="description" content={contentItem.summary} />,
				<meta key="og:description" property="og:description" content={contentItem.summary} />,
				<meta key="og:image" property="og:image" content={contentItem.smallIconUrl} />,
				<meta key="og:title" property="og:title" content={contentItem.title} />,
				<meta key="og:type" property="og:type" content="website" />,
				<meta key="twitter:site" name="twitter:site" content="@react-test" />,
				<meta key="twitter.title" name="twitter:title" content={contentItem.title} />,
				<meta key="twitter:url" name="twitter:url" content={contentItem.contentUrl} />,
				<meta key="twitter:description" name="twitter:description" content={contentItem.summary} />,
				<meta key="twitter:image" name="twitter:image" content={contentItem.smallIconUrl} />,
			]}
		</Helmet>
	);
};

export default PageTitle;
