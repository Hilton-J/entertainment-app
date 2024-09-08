import { Pagination } from "@mui/material";
import PropTypes from 'prop-types'

const CustomPagination = ({ setCurrentPage, numberOfPages = 10 }) => {


  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="w-full flex justify-center mt-7">
      <Pagination count={numberOfPages} onChange={(e) => handlePageClick(e.target.textContent)}
        hideNextButton
        hidePrevButton
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '1rem', // Adjusts the text size
            height: '35px',     // Adjusts the height
            minWidth: '35px',   // Adjusts the width to maintain the shape
            lineHeight: '35px', // Centers the text vertically
            color: '#0f172a',
            '&.Mui-selected': {
              backgroundColor: '#0f172a',  // Changes the background color when selected
              color: 'white',          // Changes the text color when selected
            },
          },
        }}
        className="space-x-2" />

    </div>
  )
};

CustomPagination.propTypes = {
  setCurrentPage: PropTypes.func,
  numberOfPages: PropTypes.number
};

export default CustomPagination