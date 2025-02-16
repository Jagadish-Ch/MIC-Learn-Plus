import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BookOpenText, Delete, Edit, IndianRupeeIcon } from 'lucide-react';
import React, { useState } from 'react'
import TableComponent from '../common-table/TableComponent';
import CommonTable from '../common-table/commonTable';
import CommonTableCard from '../common-table/CommonTableCard';

const InstructorRevenueOnCourses = ({ listOfCourses }) => {
    

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
          totalProfit: 0,
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

    const cardConfig = [
        {
          icon: BookOpenText,
          label: "Total Provided Courses",
          // value: calculateTotalStudentsAndProfit().totalStudents,
        },
        {
          icon: IndianRupeeIcon,
          label: "Total Revenue on Courses",
          // value: calculateTotalStudentsAndProfit().totalProfit+"/-",
        },
    ];

    // const RevenueOnEachCourseData = [
    //   {
    //     courseName: "DSA",
    //     instructorName: "Girish",
    //     courseCategory:"Web Development Engineering",
    //     coursePrice: 4,
    //     enrolledTotalStudents: 8,
    //     totalEarnOnCourse: 32,
    //     contentType: "YouTube",
    //   },
    //   {
    //     courseName: "DSA",
    //     instructorName: "Girish",
    //     courseCategory:"Web Development Engineering",
    //     coursePrice: 4,
    //     enrolledTotalStudents: 8,
    //     totalEarnOnCourse: 32,
    //     contentType: "Own",
    //   },
    // ];

    // const RevenueOnEachCourseConfig = [      
    //   {
    //     label: "Course Name",
    //     value: "courseName",
    //   },
    //   {
    //     label: "Instructor Name",
    //     value: "instructorName",
    //   },
    //   {
    //     label: "Category",
    //     value: "courseCategory",
    //   },
    //   {
    //     label: "Course Price",
    //     value: "coursePrice",
    //   },
    //   {
    //     label: "Enrolled Total Students",
    //     value: "enrolledTotalStudents",
    //   },
    //   {
    //     label: "Total Earn on Course",
    //     value: "totalEarnOnCourse",
    //   },
    //   {
    //     label: "Content Type",
    //     value: "contentType",
    //   },
    // ];

    // const AllCoursesBuyersData = [
    //   {
    //     dateTime: "3/2/2025 - (10:54 AM)",
    //     rollNo: "21H71A0581",
    //     studentName: "Ch.Jagadish",
    //     courseName: "Web Development using MERN Stack",
    //     emailId: "jagadishch581@gmail.com",
    //     mobileNo: "90xxxxxxxx",
    //     courseCategory: "Web Development",
    //     coursePrice: 190,
    //     contentType: "Own",
    //   },
    //   {
    //     dateTime: "2/2/2025 - (10:54 AM)",
    //     rollNo: "21H71A0581",
    //     studentName: "Ch.Jagadish",
    //     courseName: "React.js Full Course",
    //     emailId: "jagadishch581@gmail.com",
    //     mobileNo: "90xxxxxxxx",
    //     courseCategory: "Frontend Development",
    //     coursePrice: 0,
    //     contentType: "YouTube",
    //   },
    // ];

    // const AllCoursesBuyersConfig = [
    //   {
    //     label: "Course Enrolled Date-Time",
    //     value: "dateTime",
    //   },
    //   {
    //     label: "Student Roll.No",
    //     value: "rollNo",
    //   },
    //   {
    //     label: "Student Name",
    //     value: "studentName",
    //   },
    //   {
    //     label: "Course Name",
    //     value: "courseName",
    //   },
    //   {
    //     label: "Email-Id",
    //     value: "emailId",
    //   },
    //   {
    //     label: "Mobile No",
    //     value: "mobileNo",
    //   },
    //   {
    //     label: "Category",
    //     value: "courseCategory",
    //   },
    //   {
    //     label: "Course Price",
    //     value: "coursePrice",
    //   },
    //   {
    //     label: "Content Type",
    //     value: "contentType",
    //   },
    // ];

    const RevenueOnEachCourseData = [
      {
        courseName: "DSA",
        instructorName: "Girish",
        courseCategory:"Web Development Engineering",
        coursePrice: 4,
        enrolledTotalStudents: 8,
        totalEarnOnCourse: 32,
        contentType: "YouTube",
      },
      {
        courseName: "DSA",
        instructorName: "Girish",
        courseCategory:"Software Development Engineering",
        coursePrice: 4,
        enrolledTotalStudents: 7,
        totalEarnOnCourse: 32,
        contentType: "YouTube",
      },
      {
        courseName: "DSA",
        instructorName: "Girish",
        courseCategory:"Web Development Engineering",
        coursePrice: 4,
        enrolledTotalStudents: 9,
        totalEarnOnCourse: 32,
        contentType: "Own",
      },
    ];

    const RevenueOnEachCourseConfig = [      
      {
        name: "courseName",
        label: "Course Name",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "instructorName",
        label: "Instructor Name",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "courseCategory",
        label: "Category",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "coursePrice",
        label: "Course Price",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "enrolledTotalStudents",
        label: "Enrolled Total Students",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "totalEarnOnCourse",
        label: "Total Earn on Course",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "contentType",
        label: "Content Type",
        options: {
          filter: true,
          sort: true,
        }
      },
    ];

    const AllCoursesBuyersData = [
      {
        dateTime: "3/2/2025 - (10:54 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        courseName: "Web Development using MERN Stack",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        courseCategory: "Web Development",
        coursePrice: 190,
        contentType: "Own",
      },
      {
        dateTime: "3/2/2025 - (10:54 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        courseName: "Web Development using MERN Stack",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        courseCategory: "Web Development",
        coursePrice: 190,
        contentType: "Own",
      },
      {
        dateTime: "2/2/2025 - (10:54 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        courseName: "React.js Full Course",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        courseCategory: "Frontend Development",
        coursePrice: 0,
        contentType: "YouTube",
      },
    ];

    // const AllCoursesBuyersConfig = [
    //   {
    //     name: "Course Enrolled Date-Time",
    //     selector: (row) => row.dateTime,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Student Roll.No",
    //     selector: (row) => row.rollNo,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Student Name",
    //     selector: (row) => row.studentName,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Course Name",
    //     selector: (row) => row.courseName,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Email-Id",
    //     selector: (row) => row.emailId,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Mobile No",
    //     selector: (row) => row.mobileNo,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Category",
    //     selector: (row) => row.courseCategory,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Course Price",
    //     selector: (row) => row.coursePrice,
    //     sortable: true,
    //     reorder: true,
    //   },
    //   {
    //     name: "Content Type",
    //     selector: (row) => row.contentType,
    //     sortable: true,
    //     reorder: true,
    //   },
    // ];
    
    const AllCoursesBuyersConfig = [
      {
        name: "dateTime",
        label: "Course Enrolled Date-Time",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "rollNo",
        label: "Student Roll.No",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "studentName",
        label: "Student Name",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "courseName",
        label: "Course Name",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "emailId",
        label: "Email-Id",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "mobileNo",
        label: "Mobile No",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "courseCategory",
        label: "Category",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "coursePrice",
        label: "Course Price",
        options: {
          filter: true,
          sort: true,
        }
      
      },
      {
        name: "contentType",
        label: "Content Type",
        options: {
          filter: true,
          sort: true,
        }
      
      },
    ];

  return (
    <div className='w-full'>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {cardConfig.map((item, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {item.label}
                  </CardTitle>
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value|| 80}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <CommonTableCard
            pageLocation={"RevenueOnEachCourses"}
            // rowClickable={true}
            title={"Revenue On Each Course"}
            columns={RevenueOnEachCourseConfig}
            data={RevenueOnEachCourseData}
          />
          <CommonTableCard 
            location={"AllCoursesBuyers"}
            rowClickable={true}
            title={"ALL COURSES BUYERS"} 
            columns={AllCoursesBuyersConfig}
            data={AllCoursesBuyersData}
          />
          {/* <Card>
            <CardHeader>

            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listOfCourses && listOfCourses.length > 0
                    ? listOfCourses.map((course, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {course?.title}
                          </TableCell>
                          <TableCell>{course?.students?.length}</TableCell>
                          <TableCell>
                            ${course?.students?.length * course?.pricing}
                          </TableCell>
                          <TableCell className="text-right dark:text-black">
                            <Button
                              onClick={() => {
                                navigate(`/instructor/edit-course/${course?._id}`);
                              }}
                              variant="ghost"
                              size="sm"
                            >
                              <Edit className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Delete className="h-6 w-6" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            </CardContent>
          </Card> */}
          
          {/* <Card>
            <CardHeader>
              <CardTitle>
                <h2 className='text-center text-xl mb-4'>Students List</h2>
                <div className="flex justify-between flex-wrap gap-4">
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
        </div>
    </div>
  )
}

export default InstructorRevenueOnCourses;
