import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import "../styles/main.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Header />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
