import { useTheme } from "../../theme/ThemeContext"
import { DataGrid } from '@mui/x-data-grid'
import { mockDataInvoices } from "../../data/mockData"
import { Header } from "../../components"

const Invoices = () => {
  const { theme } = useTheme()

  const columns = [
    {field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
        field: 'cost',
        headerName: 'Cost',
        flex: 1,
        renderCell: (params) => {
            <p className={`${theme.text}`} >
                {`$${params.row.cost}`}
            </p>
        }
    },
    {
        field: 'date',
        headerName: 'Date',
        flex: 1,
    },
  ]

  return (
    <div className={``} >
      <Header title="INVOICES" subtitle='List of Invoice Balances' />
      <div className={`mt-10 text-blue-800 `}>
        <DataGrid
        checkboxSelection
        rows={mockDataInvoices}
        columns={columns}
        />
      </div>
    </div> 
  )
}

export default Invoices