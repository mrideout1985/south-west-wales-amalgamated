import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const getUniqueCampaigns = (campaigns) => {
  const slugs = new Set();
  return campaigns.filter((campaign) => {
    if (slugs.has(campaign.slug)) {
      return false;
    } else {
      slugs.add(campaign.slug);
      return true;
    }
  });
}

const postFields = `
  _id,
  name,
  title,
   'date': publishedAt,
  excerpt,
  'slug': slug.current,
  body,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}      
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(
    `*[_type == "post"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllCampaignDataWithSlug() {
  const data = await client.fetch(
    `*[_type == "campaigns"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllPostsForCampaign(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "campaigns"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniqueCampaigns(results);
}

export async function getCampaignsAndMoreCampaigns(slug, preview) {
  const curClient = getClient(preview);
  const [campaigns, moreCampaigns] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "campaigns" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "campaigns" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { campaigns, moreCampaigns: getUniquePosts(moreCampaigns) };
}


export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}


export async function getHomeData() {
  const data = await client.fetch(
    `*[_type == "home"]{
  header,
  info,		
  slug,
  image{
            asset->{
                _id,
                url
            },
            alt
  }
  
    }`
  );
  return data;
}

export async function getAboutData() {
  const data = await client.fetch(
    `*[_type=="about"]{
			title, 
			slug,
			body,
			secondBody,
			image{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
  );
  return data;
}

// export async function getCampaignsData() {
//   const data = await client.fetch(`*[_type == "campaigns"]{
//     title,
//     slug,
//     body,
//     mainImage{
//               asset->{
//                   _id,
//                   url
//               },
//               alt
//     }

//   }`);
//   return data
// }

export async function getAgreementsData(props) {
  const data = await client.fetch(`*[_type == 'agreements' && "${props}" in categories[]._ref]`);
  return data
}

export async function getRepData() {
  const data = await client.fetch(
    `*[_type == "reps"]{
  name,
  slug,
  mainImage{
            asset->{
                _id,
                url
            },
            alt
  }
        ,
        bio,

}`
  )
  return data
}



export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
          _type == "comment" && 
          post._ref == ^._id && 
          approved == true] {
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
          }
        }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
            ${postFields}
            body,
          }[0...2]`,
      { slug }
    ),
  ]);

  return { post, morePosts: getUniquePosts(morePosts) };
}
