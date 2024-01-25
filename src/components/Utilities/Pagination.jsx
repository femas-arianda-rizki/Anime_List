const Pagination = ({ page, lastpage }) => {
  const scrollTop = () => {
    scrollTop({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className="transition-all text-color-accent"
      >
        Prev
      </button>
      <p>
        {page} of {lastpage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all text-color-accent"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
