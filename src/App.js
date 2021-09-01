import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Loader } from "./Loader/Loader";
import ReactPaginate from "react-paginate";
import _ from "lodash";
import { Table } from "./Table/Table";
import { DetailRowView } from "./Table/DetailRowView/DetailRowView";
import { useSortTableData } from "./Table/useSortTableData";
import { ModeSelector } from "./Table/ModeSelector/ModeSelector";
import { TableSearch } from "./Table/TableSearch/TableSearch";

export const App = () => {
  const [data, setData] = React.useState([]);

  const [isLoading, setLoading] = React.useState(false);

  const [isModeSelected, setModeSelected] = React.useState(false);

  const [row, setRow] = React.useState(null);

  const [currentPage, setCurrentPage] = React.useState(0);

  const [search, setSearch] = React.useState("");

  const { items, requestSort, sortConfig } = useSortTableData(data);

  async function fetchData(url) {
    let response = await fetch(url);
    response = await response.json();
    setData(response);
    setLoading(false);
  }
  const pageSize = 50;

  const modeSelector = (url) => {
    setLoading(true);
    setModeSelected(true);
    fetchData(url);
  };
  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getFilteredData = () => {
    if (!search) {
      return items;
    }
    return items.filter((item) => {
      return (
        item["first_name"].toLowerCase().includes(search.toLowerCase()) ||
        item["last_name"].toLowerCase().includes(search.toLowerCase())
      );
    });
  };
  const filteredData = getFilteredData();

  const pageCount = Math.ceil(filteredData.length / pageSize);

  const displayData = _.chunk(filteredData, pageSize)[currentPage];
  
  if (!isModeSelected) {
    return <ModeSelector onSelect={modeSelector} />;
  }
  const searchHandler = (search) => {
    setSearch(search);
    setCurrentPage(0);
  };

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TableSearch onSearch={searchHandler} />
          <Table
            data={displayData}
            setRow={setRow}
            items={displayData}
            requestSort={requestSort}
            sortConfig={sortConfig}
          />
        </>
      )}
      {data.length > pageSize ? (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pageChangeHandler}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextLinkClassName={"page-link"}
          forcePage={currentPage}
        />
      ) : null}

      {row ? <DetailRowView person={row} /> : null}
    </div>
  );
};
