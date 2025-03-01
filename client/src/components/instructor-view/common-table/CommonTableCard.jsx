import React from "react";
import MUIDataTable from "mui-datatables";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "@/context/dark-mode-context/DarkModeContext";


const sampleTitle = "Table Title"

const sampleColumns = [
 {
  name: "name",
  label: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "company",
  label: "Company",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "city",
  label: "City",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "state",
  label: "State",
  options: {
   filter: true,
   sort: false,
  }
 },
];

const sampleData = [
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];


const CommonTableCard = ({ pageLocation, title, columns, data, rowClickable }) => {

  const { darkMode } = useDarkMode();

  const getMUITheme = () => 
    createTheme({
      typography: {
        fontFamily: "Poppins",
      },

      palette: {
        background: {
          paper: darkMode? "#0F172A" : "white", // TableBgColor
          // default: darkMode?"#18181B":"white", // TableFilterBgColor
        },
        mode: darkMode?"dark":"light"
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px 4px",
              background: "#0F172A",
              color: "white",
              default: "white"
            },
            body: {
              padding: "7px 15px",
              
            },
            footer:{
              padding: "3px 1px",
            }
          },
        },
      },
    });

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    onRowClick: (rowData) => {
      if(rowClickable && pageLocation!=="CreateCourse" && pageLocation!=="RevenueOnEachCourses") {
        console.log("Clicked ", rowData)
        window.open("http://localhost:5173/instructor/info/"+rowData[0])
      }
      else if(rowClickable && (pageLocation=="CreateCourse" || pageLocation=="RevenueOnEachCourses")) {
        console.log("Clicked ", rowData)
        window.open("http://localhost:5173/instructor/edit-course/"+rowData[0])
      }
      else {
        console.log("Click Disabled")
      }
    },
    selectableRowsHideCheckboxes: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5,10,15,100],
    filterType: "dropdown",
    responsive: "standard",
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  return (
    <Card className="p-6 mt-2">
    <ThemeProvider theme={getMUITheme()}>
    <MUIDataTable
        title={title}
        data={data || sampleData}
        columns={columns || sampleColumns}
        options={options}
    />
    </ThemeProvider>      
    </Card>
  )
}

export default CommonTableCard