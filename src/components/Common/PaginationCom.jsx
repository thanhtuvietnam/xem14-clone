import * as React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';

const PaginationCom = ({ pageActive, setPageActive, totalPages }) => {
  const handleChange = (e, newPage) => {
    setPageActive(newPage);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageActive]);

  return (
    <>
      <Stack>
        <Pagination
          shape='rounded'
          count={totalPages}
          showFirstButton
          showLastButton
          color='secondary'
          onChange={handleChange}
          // onChange={(e, newPage) => setPageActive(newPage)}
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
