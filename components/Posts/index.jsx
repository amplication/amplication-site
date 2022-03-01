import React, { useState, useEffect } from 'react';
import Post from "./Post";
import { gql } from '@apollo/client';
import client from '../../services';

const Posts = ({ posts, tagList }) => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        getServerSideProps()
            .then(data => {
                console.log(data.props.posts)
                //setPostsList(data.props.posts || []);
            })
            .catch(error => {
                console.error(error)
            });
        // storePosts.getList()
        //     .then(data => {
        //         console.log(data.props.posts)
        //         setPostsList(data.props.posts || []);
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     });
    }, []);

    if ( postsList ) {
        console.log(posts);
        return (
            <div className={'w-full hidden laptop:flex space-x-8 max-w-container m-container p-container py-12 bg-dark-black-100'}>
                { postsList.map((post, i) => {
                    return (<Post data={posts} key={i} />)
                })}
            </div>
        )
    }
}

export default Posts

export const getServerSideProps = async () => {
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
};
