import React from 'react';

function BlogsContainer() {
    // const changePage = ({ selected }) => {
    //     axios({
    //       method: "get",
    //       url: `https://tascerp.com/api/v1/blogs?page=${selected + 1}`,
    //     }).then((res) => {
    //       setPostsArr(res.data.data.items);
    //     });
    //   };
  return <div className='blog_container pl pr'>
            {/* <Container fluid className="p-0 m-0">
        <Row>{displayUsers}</Row>
      </Container>
<ReactPaginate
        previousLabel={
          currentLocal.language === "English" ? (
            <img src={leftArrow} alt="leftArrow" />
          ) : (
            <img src={rightArrow} alt="rightArrow" />
          )
        }
        nextLabel={
          currentLocal.language === "English" ? (
            <img src={rightArrow} alt="rightArrow" />
          ) : (
            <img src={leftArrow} alt="leftArrow" />
          )
        }
        pageCount={pageCount}
        breakLabel={"none"}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}

  </div>;
}

export default BlogsContainer;
