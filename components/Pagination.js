const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="flex justify-center">
          {pageNumbers.map(number => (
            <li key={number} className="px-2">
              <a onClick={() => paginate(number)} href="#" className="text-blue-500">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  