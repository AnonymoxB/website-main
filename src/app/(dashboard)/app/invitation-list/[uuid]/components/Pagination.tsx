import {
  IconNavigateBefore,
  IconNavigateNext,
} from "../../../../../../../public/assets/iconSVG";

interface PaginationPropsType {
  dataPerPage: number;
  totalData: number;
  paginate: any;
  currentPage: number;
}

export const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  currentPage,
}: PaginationPropsType) => {
  const pageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPaginationNumbers = () => {
    const adjacentNumbers = 2; // Jumlah angka yang tampil di sekitar halaman aktif

    if (pageNumbers.length <= 5) {
      return pageNumbers.map((number: number) => (
        <li key={number} className="text-base font-normal">
          <button
            className={`p-[8px] ${
              number === currentPage ? "text-sky-500" : "text-gray-800"
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ));
    }
    const visibleNumbers = pageNumbers.slice(
      Math.max(currentPage - adjacentNumbers, 0),
      Math.min(currentPage + adjacentNumbers, pageNumbers.length)
    );

    return (
      <>
        {visibleNumbers[0] > 1 && (
          <li>
            <button className="p-[8px]" onClick={() => paginate(1)}>
              1
            </button>
          </li>
        )}
        {visibleNumbers[0] > 2 && (
          <li>
            <div className="p-[8px]">...</div>
          </li>
        )}
        {visibleNumbers.map((number: number) => (
          <li key={number}>
            <button
              className={`p-[8px] ${
                number === currentPage ? "text-sky-500" : "text-gray-800"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        {visibleNumbers[visibleNumbers.length - 1] < pageNumbers.length - 1 && (
          <li>
            <div className="p-[8px]">...</div>
          </li>
        )}
        {visibleNumbers[visibleNumbers.length - 1] < pageNumbers.length && (
          <li>
            <button
              className="p-[8px]"
              onClick={() => paginate(pageNumbers.length)}
            >
              {pageNumbers.length}
            </button>
          </li>
        )}
      </>
    );
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(totalData / dataPerPage)) {
      paginate(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-center mt-4 text-gray-800">
      <ul className="flex space-x-2">
        <li>
          <button className="p-[8px] bg-white" onClick={handlePrevClick}>
            <IconNavigateBefore />
          </button>
        </li>
        {renderPaginationNumbers()}
        <li>
          <button className="p-[8px]" onClick={handleNextClick}>
            <IconNavigateNext />
          </button>
        </li>
      </ul>
    </div>
  );
};
