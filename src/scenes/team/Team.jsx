import { useTheme } from "../../theme/ThemeContext"
import { DataGrid } from '@mui/x-data-grid'
import { mockDataTeam } from "../../data/mockData"
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined  } from "@mui/icons-material"
import { Header } from "../../components"

const Team = () => {
  const { theme } = useTheme()

  const colors = theme.palette

  const columns = [
    {field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return(
          <div className={` flex items-center h-full `}>
            <div className={`flex items-center mx-auto w-32 h-10 p-[5px] justify-center bg-green-900 rounded `} >
              { access === 'admin' && <AdminPanelSettingsOutlined /> }
              { access === 'manager' && <SecurityOutlined /> }
              { access === 'user' && <LockOpenOutlined /> }
              <p>{access}</p>
            </div>
          </div>
        )
      }
    },
  ]

  return (
    <div className={``} >
      <Header title="TEAM" subtitle='Managing the Team Members' />
      <div className={`mt-10 text-blue-800 `}>
        <DataGrid
        checkboxSelection
        rows={mockDataTeam}
        columns={columns}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color: theme.dataGrid.text,
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
        />
      </div>
    </div>
  )
}

export default Team