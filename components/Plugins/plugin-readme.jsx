import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import helpers from '../../helpers';

const PluginReadme = ({ plugin }) => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const rawUrl = helpers.convertToRawGitHubUrl(plugin.github);

    fetch(`${rawUrl}/README.md`)
      .then((response) => response.text())
      .then((text) => {
        setReadmeContent(text);
      })
      .catch((err) => console.error(err));
  }, [plugin.github]);

  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        source={plugin.readme}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
};

PluginReadme.propTypes = {
  PluginReadme: PropTypes.object.isRequired,
};

export default PluginReadme;
