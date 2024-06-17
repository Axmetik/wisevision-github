function Pagination({ totalRepos, reposPerPage, currentPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            className={`${index + 1 === currentPage ? "active" : " "}`}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
