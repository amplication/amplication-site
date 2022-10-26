/* eslint no-useless-escape: 0 */
const helpers = {
  isValidUrl: string => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  },
  /**
   * @param {string} string
   * @param {{[key: string]: boolean}} options
   * @returns {string}
   */
  removeMarkdown: (string, options) => {
    options = options || {
      stripListLeaders: true,
      listUnicodeChar: true,
      gfm: true,
      useImgAltText: true,
    };
    string = string.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '');

    try {
      if (options.stripListLeaders) {
        if (options.listUnicodeChar)
          string = string.replace(
            /^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,
            options.listUnicodeChar + ' $1'
          );
        else string = string.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, '$1');
      }
      if (options.gfm) {
        string = string
          // Header
          .replace(/\n={2,}/g, '\n')
          // Fenced codeblocks
          .replace(/~{3}.*\n/g, '')
          // Strikethrough
          .replace(/~~/g, '')
          // Fenced codeblocks
          .replace(/`{3}.*\n/g, '');
      }
      string = string
        // Remove headers
        .replace(/#/g, '')
        // Remove HTML tags
        .replace(/<[^>]*>/g, '')
        // Remove setext-style headers
        .replace(/^[=\-]{2,}\s*$/g, '')
        // Remove footnotes?
        .replace(/\[\^.+?\](\: .*?$)?/g, '')
        .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
        // Remove images
        .replace(
          /\!\[(.*?)\][\[\(].*?[\]\)]/g,
          options.useImgAltText ? '$1' : ''
        )
        // Remove inline links
        .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
        // Remove blockquotes
        .replace(/^\s{0,3}>\s?/g, '')
        // Remove reference-style links?
        .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
        // Remove atx-style headers
        .replace(
          /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
          '$1$2$3'
        )
        // Remove emphasis (repeat the line to remove double emphasis)
        .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
        .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
        // Remove code blocks
        .replace(/(`{3,})(.*?)\1/gm, '$2')
        // Remove inline code
        .replace(/`(.+?)`/g, '$1')
        // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
        .replace(/\n{2,}/g, '\n\n')
        // Remove double spaces
        .replace(/\s+/g, ' ');
    } catch (e) {
      console.error(e);
    }
    return string;
  },

  /**
   * @param {string} path
   * @returns {string}
   */
  getCanonical: path => new URL(path, process.env.NEXT_PUBLIC_SITE).toString(),

  getPostSlug: slug => `/blog/${slug}`,

  getPostDate: date => {
    const d = new Date(date || 'Dec 27, 2022');

    return `${d
      .toLocaleString('en-US', {month: 'long'})
      .substring(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
  },

  getPostPerPage: () => {
    return 9;
  },
};

export default helpers;
