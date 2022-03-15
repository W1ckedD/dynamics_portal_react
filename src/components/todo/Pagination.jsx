import cx from 'classnames';

export default function Pagination({
  length,
  itemsPerPage,
  current,
  setCurrent,
}) {
  const pagesNumber = Math.ceil(length / itemsPerPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={cx("page-item", { disabled: current === 0 })}>
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => current > 0 && setCurrent(current - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {Array.from({ length: pagesNumber }, (x, i) => (
          <li key={i} className={cx('page-item', { active: i === current })}>
            <a className="page-link" href="#" onClick={() => setCurrent(i)}>
              {i + 1}
            </a>
          </li>
        ))}

        <li className={cx("page-item", { disabled: current === pagesNumber - 1 })}>
          <a
            className="page-link"
            aria-label="Next"
            href="#"
            onClick={() => current < pagesNumber - 1 && setCurrent(current + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
