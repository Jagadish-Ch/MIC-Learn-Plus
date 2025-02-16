import { useEffect, useRef, useState } from "react";

import { 
  Chart as ChartJS,
  BarElement,
  CategoryScale,  // x
  LinearScale,  // y
  Tooltip,
  Legend
 } from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";

import arrowLeft from '../../../../public/fast-backward.gif'

ChartJS.register(
  BarElement,
  CategoryScale,  // x
  LinearScale,  // y
  Tooltip,
  Legend
);

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IndianRupeeIcon, DollarSign, Users, BookOpenText, ChevronLeft, ChevronRight } from "lucide-react";
import { useDarkMode } from "@/context/dark-mode-context/DarkModeContext";


function InstructorDashboard({ listOfCourses }) {
  const [hideFiltersTab, setHideFiltersTab] = useState(true);
  console.log("Filters Hide :", hideFiltersTab)

  const {darkMode} = useDarkMode();
  console.log(darkMode?"dark":"light")

  function calculateTotalStudentsAndProfit() {
    const { totalStudents, totalProfit, studentList } = listOfCourses.reduce(
      (acc, course) => {
        const studentCount = course.students.length;
        acc.totalStudents += studentCount;
        acc.totalProfit += course.pricing * studentCount;
        console.log("Course: ", course);
        course.students.forEach((student) => {
          acc.studentList.push({
            courseTitle: course.title,
            // studentId: student.studentRollNo,
            studentName: student.studentName,
            studentEmail: student.studentEmail,
          });
        });

        return acc;
      },
      {
        totalStudents: 0,
        totalProfit: 1250,
        studentList: [],
      }
    );

    return {
      totalProfit,
      totalStudents,
      studentList,
    };
  }

  console.log(calculateTotalStudentsAndProfit());

  const config = [
    {
      icon: Users,
      label: "Total Registrations",
      value: calculateTotalStudentsAndProfit().totalStudents,
    },
    {
      icon: BookOpenText,
      label: "Total Provided Courses",
      value: calculateTotalStudentsAndProfit().totalStudents,
    },
    {
      icon: IndianRupeeIcon,
      label: "Total Revenue on Courses",
      value: calculateTotalStudentsAndProfit().totalProfit+"/-",
    },
  ];

  const barChart1Data = {
    labels: ["ECE", "AIDS", "CSE", "AIML"],
    datasets: [{
      label: "Students",
      data: [30,60,100,39.69],
      borderColor: darkMode?"rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
      backgroundColor: ['gray', 'orange', 'aqua', 'red'],
      borderWidth: 1,
      links: ["1","2","3","4"],
    }]
  };

  const options1 = {
    // responsive: true, // Ensures responsiveness
    // maintainAspectRatio: false, // Allows the chart to resize correctly
    plugins: {
      legend: {
        display: true,
        position: "top", //  Position the Legend at the Top
        align: "center", //  Align Center
        labels: {
          color: darkMode ? "white" : "black",
          font: {
            size: 14, //  Legend Label Font Size
          },
          padding: 20, // Adjust Spacing Between Legend Labels
        },
        title: {
          display: true,
          text: "Registrations", // Legend Title (Above Labels)
          color: darkMode ? "#DAA520" : "black",
          font: {
            size: 16, // 🎯 Font Size for Legend Title
            weight: "bold",
          },
          padding: 10, // ✅ Add Padding Below the Legend Title
        },
      },
    },
    // layout: {
    //   padding: {
    //     top: 0, // ✅ Adds Extra Space Above the Legend
    //   },
    // },
    scales: {
      x: {
        title: {
          display: true,
          text: "Branches in B.Tech",
          color: darkMode ? "white" : "black",
          font: { size: 14, weight: "bold" },
        },
        ticks: {
          color: darkMode ? "white" : "black",
        },
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Registered Students",
          color: darkMode ? "white" : "black",
          font: { size: 14, weight: "bold" },
        },
        ticks: {
          color: darkMode ? "white" : "black",
        },
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };
  
  const barChart2Data = {
    labels: ["Registered", "Enrolled", "Not-Enrolled"],
    datasets: [{
      label: "Students",
      data: [80,39, 41],
      borderColor: darkMode?"rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
      backgroundColor: ['green', 'orange', 'red'],
      borderWidth: 1,
      links: ["link-1","link-2","link-3"],
    }]
  };

  const options2 = {
    // responsive: true, // Ensures responsiveness
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top", //  Position the Legend at the Top
        align: "center", //  Align Center
        labels: {
          color: darkMode ? "white" : "black",
          font: {
            size: 14, //  Legend Label Font Size
          },
          padding: 20, // Adjust Spacing Between Legend Labels
        },
        title: {
          display: true,
          text: "Overall Enrollments", //  Legend Title (Above Labels)
          color: darkMode ? "#DAA520" : "black",
          font: {
            size: 16, //  Font Size for Legend Title
            weight: "bold",
          },
          padding: 10, //  Add Padding Below the Legend Title
        },
      },
    },
    layout: {
      padding: {
        top: 0, //  Adds Extra Space Above the Legend
      },
    },
    scales: {
      x: {
        // title: {
        //   display: true,
        //   text: "Months",
        //   color: darkMode ? "white" : "black",
        //   font: { size: 14, weight: "bold" },
        // },
        ticks: {
          color: darkMode ? "white" : "black",
        },
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "No.of Students",
          color: darkMode ? "white" : "black",
          font: { size: 14, weight: "bold" },
        },
        ticks: {
          color: darkMode ? "white" : "black",
        },
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };
  

  const chartRef = useRef();
  // const chartRef2 = useRef();

  const onClickChart1 = (event) => {
    
    if(getElementAtEvent(chartRef.current, event)){
      console.log(getElementAtEvent(chartRef.current, event))
      const datasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      console.log(barChart1Data.datasets[datasetIndex].links[dataPoint]);
    }
  }
  

  const onClickChart2 = (event) => {
    
    if(getElementAtEvent(chartRef.current, event)){
      console.log(getElementAtEvent(chartRef.current, event))
      const datasetIndex = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      console.log(barChart1Data.datasets[datasetIndex].links[dataPoint]);
    }

  }

  return (
    <div className="flex gap-4 justify-between">
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {config.map((item, index) => (
          <Card key={index} className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between flex-wrap gap-4">
            <span>Students List</span>
            <input 
              type="search" 
              placeholder="Search" 
              className="p-2 dark:bg-transparent border-2 w-full max-w-[300px] rounded-md"
              onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
          </CardTitle>
          
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Student Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {calculateTotalStudentsAndProfit().studentList.filter((item)=>{
                  return search.toLowerCase() ==='' 
                  ? item
                  : Object.values(item).some((value) =>
                    value.toString().toLowerCase().includes(search.toLowerCase())
                  )
                }).map(
                  (studentItem, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {studentItem.courseTitle}
                      </TableCell>
                      <TableCell>{studentItem.studentName}</TableCell>
                      <TableCell>{studentItem.studentEmail}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card> */}
      <section className="">
      <Card className="mb-4 p-4 justify-items-center w-full max-h-[300px]">
      <Bar
        data={barChart1Data}
        redraw={true}
        options={options1}
        onClick={onClickChart2}
        ref={chartRef}
      >
      </Bar>
      </Card>

      <Card className="p-4 justify-items-center w-full max-h-[300px]">
      <Bar
        redraw={true}
        data={barChart2Data}
        options={options2}
        onClick={onClickChart1}
        ref={chartRef}
      >
      </Bar>
      </Card>
      
      </section>
      
    </div>
    <aside >
      <section className="h-full">
        <Card className={`${hideFiltersTab?"nav-inactive":"nav-active"} flex max-w-[50%] fixed top-60 -right-[2rem] dark:bg-slate-950 border-2 animate-trans-left`}
          // style={hideFiltersTab?{width:"35px"}:{width:"100%"}}
        >
          <CardHeader className="p-0" onClick={()=>setHideFiltersTab(!hideFiltersTab)}>
            
            <Button className="w-full flex p-1 justify-start max-w-[30px] break-all border-r bg-gradient-to-t from-[#000000] to-[#434343] bg-grays-700 h-[100%] text-white dark:text-yellow-600">
              {hideFiltersTab?<ChevronLeft size={300} strokeWidth={5} />:<ChevronRight size={300} strokeWidth={5}/>}
              <CardTitle className="text-center font-bold text-wrap text-xl ">Filters</CardTitle>
            </Button>

          </CardHeader>
          {/* { !hideFiltersTab && */}
           <CardContent className={`${hideFiltersTab?"invisible transition-[2s]":"visible"} py-2`}>
            <ul>
              <li>
                <label htmlFor="B.Tech">
                  <input type="checkbox" id="B.Tech" value="B.Tech" />
                  {" "}B.Tech
                </label>
              </li>
              <li>
                <label htmlFor="Diploma">
                  <input type="checkbox" id="Diploma" value="Diploma" />
                  {" "}Diploma
                </label>
              </li>
              <li>
                <label htmlFor="MCA">
                  <input type="checkbox" id="MCA" value="MCA" />
                  {" "}MCA
                </label>
              </li>
              <li>
                <label htmlFor="Others">
                  <input type="checkbox" id="Others" value="Others" />
                  {" "}Others
                </label>
              </li>
            </ul>
          </CardContent>
          {/* } */}
        </Card>
      </section>
    </aside>
    </div>
  );
}

export default InstructorDashboard;
