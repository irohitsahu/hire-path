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

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";

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
        <MDBox component="thead">
          {headerGroups.map((headerGroup, key) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <MDBox
                  key={key}
                  component="th"
                  width="auto"
                  py={1.5}
                  px={3}
                  sx={({ palette: { light }, borders: { borderWidth } }) => ({
                    borderBottom: `${borderWidth[1]} solid ${light.main}`,
                  })}
                >
                  <MDBox
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
                  </MDBox>
                </MDBox>
              ))}
            </TableRow>
          ))}
        </MDBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow key={key} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <MDBox
                    key={key}
                    component="td"
                    textAlign="center"
                    py={1.5}
                    px={3}
                    sx={({ palette: { light } }) => ({
                      borderBottom: `solid ${light.main}`,
                    })}
                  >
                    <MDBox
                      display="inline-block"
                      width="max-content"
                      color="text"
                      sx={{ verticalAlign: "middle" }}
                    >
                      {cell.render("Cell")}
                    </MDBox>
                  </MDBox>
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
