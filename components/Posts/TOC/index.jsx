import PropTypes from 'prop-types';
import helpers from '../../../helpers';

/** @typedef {{level: number, id: string, title: string: children?: Heading[]}} Heading */

const TOC = props => {
  /** @type {Heading[]} */
  const headings = [];
  const headingsParsed = props.markdown
    .split('\n')
    .filter(line => line.match(/#{2,3}\s/));

  for (const line of headingsParsed) {
    const [, level, title] = line.match(/(#{2,3})\s(.*)/);
    const heading = {
      level: level.length,
      id: helpers.slugify(title),
      title,
    };

    if (heading.level === 2) {
      headings.push({...heading, children: []});
    } else if (heading.level === 3 && headings.length === 0) {
      headings.push({children: [heading]});
    } else if (heading.level === 3) {
      headings[headings.length - 1].children.push(heading);
    }
  }

  return (
    <ul className="toc">
      {headings.map((h, i) => (
        <li key={i} className={`toc__element toc__level-${h.level}`}>
          {h.title ? <a href={'#' + h.id}>{h.title}</a> : ''}
          {h.children.length > 0 ? (
            <ul className="toc">
              {h.children.map((c, i) => (
                <li key={i} className={`toc__element toc__level-${c.level}`}>
                  <a href={'#' + c.id}>{c.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  );
};

TOC.propTypes = {
  markdown: PropTypes.string,
};

export default TOC;
