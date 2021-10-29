import SanityClient from "@sanity/client";

export const client = SanityClient({
	projectId: "8bvty42v",
	dataset: "production",
	apiVersion: '2021-08-31',
	useCdn: false,
	withCredentials: false
});
