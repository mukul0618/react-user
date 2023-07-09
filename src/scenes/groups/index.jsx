import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataGroups } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Group = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "grouptype",
      headerName: "GroupType",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "grouplicence",
      headerName: "Group Licence",
      align: "left",
    },
    {
      field: "groupname",
      headerName: "Group Name",
      flex: 1,
    },
    {
      field: "groupcontact",
      headerName: "Group Contact",
      flex: 1,
    },
    {
      field: "groupemail",
      headerName: "Group Email",
      flex: 1,
    },
    {
      field: "grouparea",
      headerName: "Group Area",
      flex: 1,
    },
    {
      field: "datecreated",
      headerName: "Date Created",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="GROUPS" subtitle="Existing Groups" />
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
        <DataGrid checkboxSelection rows={mockDataGroups} columns={columns} />
      </Box>
    </Box>
  );
};

export default Group;
