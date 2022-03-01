
import { gql } from '@apollo/client';
import client from '../services/index';

const storePosts = {
    getList: async () => {
        const { data } = await client.query({
            query: gql`
			query {
				posts(orderBy: { createdAt: Desc }) {
					id
					title
					content
					featuredImage
					tags {
						id
						name
					}
					author {
						id
						firstName
						lastName
						profileImage
					}
					createdAt
				}
				tags {
					id
					name
				}
			}
		`,
        });

        return {
            props: {
                posts: data.posts,
                tagList: data.tags,
            },
        };
    },
};

export default storePosts;
