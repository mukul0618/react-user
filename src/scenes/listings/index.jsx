import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataListings } from "../../data/mockData";
import Header from "../../components/Header";

const Listings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "listingname",
      headerName: "ListingName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "pricerange",
      headerName: "priceRange",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.pricerange}
        </Typography>
      ),
    },
    {
      field: "datecreated",
      headerName: "Date Created",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "streetaddress",
      headerName: "Street Address",
      flex: 1,
    },
    {
      field: "postcode",
      headerName: "PostCode",
      flex: 1,
    },
    {
      field: "region",
      headerName: "Region",
      flex: 1,
    },{
      field: "landsize",
      headerName: "Landsize",
      flex: 1,
    },{
      field: "developer",
      headerName: "Developer",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "commission",
      headerName: "Commission",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="Property Listings" subtitle="Listings Data" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataListings}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
        
      </Box>
    </Box>
  );
};

export default Listings;
