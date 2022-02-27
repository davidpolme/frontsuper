import React, { useState } from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import Cards from "../Cards";

export default function Pagination({ items, children }) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 2;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = items.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  console.log({"InPaginationItems":items});
  return    <Cards cards={displayItems}></Cards>;
  
}
