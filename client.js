import SanityClient from "@sanity/client";

export const client = SanityClient({
	projectId: "8bvty42v",
	dataset: "production",
	useCdn: false,
	withCredentials: false
});
