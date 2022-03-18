import React, { useState } from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import Cards from "../Cards";
import {ITEMS_PER_PAGE} from "../../utils/constants"
import { Container } from "react-bootstrap";

export default function Pagination({ items }) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = ITEMS_PER_PAGE;
  const pagesVisited = pageNumber * itemsPerPage;
  var displayItems =[];
  var pageCount=1;
  
  if(items){
     displayItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);
    pageCount = Math.ceil(items.length / itemsPerPage);
  }
  

  const changePage = ({selected}) => {
      setPageNumber(selected)
  };

  return (
    <div className="pagination">
        <Container>
            <Cards cards={displayItems} />
        </Container>
      <ReactPaginate
        previusLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
