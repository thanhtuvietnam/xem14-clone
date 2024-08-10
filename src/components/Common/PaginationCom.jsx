import * as React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const PaginationCom = ({ currentPage, setCurrentPage, totalPages, routePath }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
    navigate(`${routePath}?page=${newPage}`); // Cập nhật URL với trang mới
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Stack>
        <Pagination
          shape='rounded'
          count={totalPages}
          showFirstButton
          showLastButton
          color='secondary'
          page={currentPage}
          onChange={handleChangePage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
          }}
        />
      </Stack>
    </>
  );
};

export default PaginationCom;
