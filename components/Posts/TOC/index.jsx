import PropTypes from 'prop-types';
import styles from './style.module.css';

/**
 * @param {{headings: Heading[], open: boolean}} props
 */
const TOC = (props) => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const header = document.getElementById(id);
    const offset =
      header.getBoundingClientRect().top + window.pageYOffset - 150;
    history.replaceState(undefined, undefined, `#${id}`);
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return props.headings.length === 0 ? (
    ''
  ) : (
    <details open={props.open}>
      <summary className="w-full text-white text-2xl font-poppins font-semibold text-left mb-2">
        Jump to
      </summary>
      <ul className={styles.toc}>
        {props.headings.map((h, i) => (
          <li key={i} className={styles.toc__element}>
            {h.title ? (
              <a
                onClick={(e) => smoothScroll(e)}
                data-id={h.id}
                href={'#' + h.id}
              >
                {h.title}
              </a>
            ) : (
              ''
            )}
            {h.children.length > 0 ? (
              <ul className={styles.toc}>
                {h.children.map((c, i) => (
                  <li key={i} className={styles.toc__element}>
                    <a
                      onClick={(e) => smoothScroll(e)}
                      data-id={c.id}
                      href={'#' + c.id}
                    >
                      {c.title}
                    </a>
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
  open: PropTypes.bool,
  headings: PropTypes.arrayOf(PropTypes.object),
};

export default TOC;
