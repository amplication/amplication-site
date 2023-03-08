import {useCallback} from 'react';
import Author from '../PostCard/Author';
import Tags from '../PostCard/Tags';
import Title from '../PostCard/Title';
import Thumbnail from '../PostCard/Tumbnail';
import helpers from '../../../helpers';
import Link from 'next/link';
import * as analytics from '../../../lib/analytics';
import PropTypes from 'prop-types';

const PostHot = props => {
  const post = props.data;

  const handleClick = useCallback(() => {
    analytics.event({
      action: 'featuredBlogItemClicked',
      params: {
        slug: post.slug,
      },
    });
  });

  const abridgedContent = helpers
    .removeMarkdown(post?.content ?? '')
    .substring(0, 200);
  if (Object.keys(post).length) {
    return (
      <Link href={helpers.getPostSlug(post.slug)} passHref>
        <a onClick={handleClick}>
          <div className="flex flex-col-reverse relative rounded-2xl cursor-pointer overflow-hidden bg-light-blue shadow-hot-post laptop:flex-row laptop:mb-[100px] group border border-transparent transition-all duration-1000 hover:border-lite">
            <div className="absolute top-0 left-0 ml-6 laptop:ml-8 bg-[#8DD9B9] text rounded-bl-lg rounded-br-lg w-[91px] py-2 laptop:py-[6px] text-center text-sm font-poppins font-semibold text-dark-100">
              Hot News
            </div>
            <div className="w-full flex justify-center flex-col py-[30px] px-6 laptop:w-1/2 laptop:px-8 laptop:py-0">
              <Author
                className="!mt-0"
                avatar={post.author?.profileImage}
                name={post.author?.firstName + ' ' + post.author?.lastName}
                date={post.publishedAt}
              />
              <Tags list={post.tags} className="!mt-6" />
              <Title
                level={2}
                className="text-lg text-white leading-[27px] laptop:text-2xl laptop:leading-9 font-medium my-6"
              >
                <span className="text-white">{post.title}</span>
              </Title>
              {abridgedContent.length ? (
                <div className="text-[15px] text-white line-clamp-2 laptop:text-base leading-6">
                  {abridgedContent}
                </div>
              ) : null}
            </div>
            <div className="w-full overflow-hidden laptop:w-1/2 rounded-t-2xl laptop:rounded-l-none overflow-hidden laptop:min-h-[360px]">
              <div className="laptop:h-full">
                <Thumbnail
                  alt={post.title}
                  className="aspect-hot-normal !rounded-l-none laptop:aspect-hot laptop:h-full"
                  src={
                    helpers.isValidUrl(post.featuredImage)
                      ? post.featuredImage
                      : ''
                  }
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
};

PostHot.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostHot;
