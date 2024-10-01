import { useTheme } from "../../theme/ThemeContext"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from "../../data/mockData"
import { Header } from "../../components"

const Invoices = () => {
  const { theme } = useTheme()

  const columns = [
    {field: "id", headerName: "ID", flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
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
        field: 'address',
        headerName: 'Address',
        flex: 1,
    },
    {
        field: 'city',
        headerName: 'City',
        flex: 1,
    },
  ]

  return (
    <div className={``} >
      <Header title="CONTACTS" subtitle='List of Contacts for Future Reference' />
      <div className={`mt-10 text-blue-800 `}>
        <DataGrid
        rows={mockDataContacts}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        />
      </div>
    </div>
  )
}

export default Invoices