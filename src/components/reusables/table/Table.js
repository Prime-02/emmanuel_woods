"use client";

import { useLocalState } from "@/app/[id]/LocalStateProvider";
import { Textinput } from "@/components/inputs/Textinput";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo } from "react";

const Table = ({
  columns,
  data,
  itemsPerPage = 20,
  className,
  search = false,
  header,
  hiddenColumns = [],
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const {selectedId, setSelectedId} = useLocalState(null); // New state for selected ID

  // Filter out hidden columns
  const visibleColumns = useMemo(() => {
    return columns.filter((col) => !hiddenColumns.includes(col.key));
  }, [columns, hiddenColumns]);

  // Search Filtering
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      visibleColumns.some((col) =>
        String(row[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery, visibleColumns]);

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleRowClick = (id) => {
    setSelectedId(id); // Update the selected ID state
  };

  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-xl font-bold text-start coloured_text">{header}</h1>
      {search && (
        <div className="w-full flex items-center justify-end">
          <Textinput
            type="text"
            label="Search..."
            value={searchQuery}
            changed={(e) => setSearchQuery(e)}
            className=" p-2 mb-3 border-b w-44"
            labelStyle={"bg-transparent"}
          />
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr>
            {visibleColumns.map((col) => (
              <th
                key={col.key}
                className="border-b p-2 coloured_text text-start cursor-pointer"
                onClick={() => handleSort(col.key)}
              >
                {col.label}{" "}
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? <ChevronUp/>
                    : <ChevronDown/>
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${selectedId === row.id ? "card " : ""}`} // Highlight selected row
              onClick={() => handleRowClick(row.id)} // Handle row click
            >
              {visibleColumns.map((col) => (
                <td key={col.key} className="cursor-pointer p-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-x-12 items-center mt-3">
        <button
          className="p-2 coloured_text"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 coloured_text"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
