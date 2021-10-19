import Layout from "../components/layout/layout";
import "../main.scss"


function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
