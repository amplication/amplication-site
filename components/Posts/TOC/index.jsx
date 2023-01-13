import PropTypes from 'prop-types';
import helpers from '../../../helpers';
import styles from './style.module.css';

/** @typedef {{level: number, id: string, title: string: children?: Heading[]}} Heading */

const TOC = props => {
  /** @type {Heading[]} */
  const headings = [];
  const headingsParsed = props.markdown
    .split('\n')
    .filter(line => line.match(/^#{1,3}\s/));

  for (const line of headingsParsed) {
    const [, level, title] = line.match(/^(#{1,3})\s(.*)/);
    const heading = {
      level: level.length,
      id: helpers.slugify(title),
      title,
    };

    if (heading.level === 1 || heading.level === 2) {
      headings.push({...heading, children: []});
    } else if (heading.level === 3 && headings.length === 0) {
      headings.push({children: [heading]});
    } else if (heading.level === 3) {
      headings[headings.length - 1].children.push(heading);
    }
  }

  return (
    <details open={props.open}>
      <summary className="w-full text-white text-2xl font-poppins font-semibold text-left mb-2">
        Jump to
      </summary>
      <ul className={styles.toc}>
        {headings.map((h, i) => (
          <li key={i} className={styles.toc__element}>
            {h.title ? <a href={'#' + h.id}>{h.title}</a> : ''}
            {h.children.length > 0 ? (
              <ul className={styles.toc}>
                {h.children.map((c, i) => (
                  <li key={i} className={styles.toc__element}>
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
    </details>
  );
};

TOC.propTypes = {
  markdown: PropTypes.string,
  open: PropTypes.bool,
};

export default TOC;
