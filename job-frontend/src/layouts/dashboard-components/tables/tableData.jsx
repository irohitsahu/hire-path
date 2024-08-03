import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-table components
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";


function DataTable({ table }) {
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    tableInstance;

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      <Table {...getTableProps()}>
        <Box component="thead">
          {headerGroups.map((headerGroup, key) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Box
                  key={key}
                  component="th"
                  width="auto"
                  py={1.5}
                  px={3}
                  sx={({ palette: { light }, borders: { borderWidth } }) => ({
                    borderBottom: `${borderWidth[1]} solid ${light.main}`,
                  })}
                >
                  <Box
                    position="relative"
                    textAlign="center"
                    color="secondary"
                    opacity={0.7}
                    sx={({ typography: { size, fontWeightBold } }) => ({
                      fontSize: size.xxs,
                      fontWeight: fontWeightBold,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      userSelect: "none",
                    })}
                  >
                    {column.render("Header")}
                  </Box>
                </Box>
              ))}
            </TableRow>
          ))}
        </Box>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow key={key} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Box
                    key={key}
                    component="td"
                    textAlign="center"
                    py={1.5}
                    px={3}
                    sx={({ palette: { light } }) => ({
                      borderBottom: `solid ${light.main}`,
                    })}
                  >
                    <Box
                      display="inline-block"
                      width="max-content"
                      color="text"
                      sx={{ verticalAlign: "middle" }}
                    >
                      {cell.render("Cell")}
                    </Box>
                  </Box>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Typechecking props for the DataTable
DataTable.propTypes = {
  table: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default DataTable;
