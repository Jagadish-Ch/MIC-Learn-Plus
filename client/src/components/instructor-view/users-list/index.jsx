import React, { useEffect, useState } from 'react'
import TableComponent from '../common-table/TableComponent'
import CommonTable from '../common-table/commonTable';
import CommonTableCard from '../common-table/CommonTableCard';

const StudentsList = () => {

    // const [usersListData, setUsersListData] = useState([])

    const usersListData = [
      {
        dateTime: "3/2/2025 - (10:54 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        studentBranch: "CSE",
        studentSEM: "8",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        studentEnrolledCourses: 3,
        own: 1,
        youtube: 2,
      },
      {
        dateTime: "3/2/2025 - (10:53 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        studentBranch: "CSE",
        studentSEM: "8",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        studentEnrolledCourses: 3,
        own: 1,
        youtube: 2,
      },
      {
        dateTime: "1/1/2025 - (10:53 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        studentBranch: "CSE",
        studentSEM: "8",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        studentEnrolledCourses: 3,
        own: 1,
        youtube: 2,
      },
      {
        dateTime: "1/1/2025 - (10:52 AM)",
        rollNo: "21H71A0581",
        studentName: "Ch.Jagadish",
        studentBranch: "CSE",
        studentSEM: "8",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        studentEnrolledCourses: 3,
        own: 1,
        youtube: 2,
      },
      {
        dateTime: "1/1/2025 - (10:52 AM)",
        rollNo: "21H71A0582",
        studentName: "Ch.Jagadish",
        studentBranch: "CSE",
        studentSEM: "8",
        emailId: "jagadishch581@gmail.com",
        mobileNo: "90xxxxxxxx",
        studentEnrolledCourses: 3,
        own: 1,
        youtube: 2,
      },

      {
        dateTime: "2/2/2025 - (10:54 AM)",
        rollNo: "21H71A0582",
        studentName: "Jagadish",
        studentBranch: "CSE",
        studentSEM: "7",
        emailId: "jagadishch582@gmail.com",
        mobileNo: "90xxxxxxxx",
        studentEnrolledCourses: 2,
        own: 1,
        youtube: 1,
      },  
    ];
  
    // const usersListConfig = [
    //     {
    //       label: "Registered Date-Time",
    //       value: "dateTime",
    //     },
    //     {
    //       label: "Student Roll.No",
    //       value: "rollNo",
    //     },
    //     {
    //       label: "Student Name",
    //       value: "studentName",
    //     },
    //     {
    //       label: "Branch",
    //       value: "studentBranch",
    //     },
    //     {
    //       label: "SEM",
    //       value: "studentSEM",
    //     },
    //     {
    //       label: "Email-Id",
    //       value: "emailId",
    //     },
    //     {
    //       label: "Mobile.No",
    //       value: "mobileNo",
    //     },
    //     {
    //       label: "Total Courses Enrolled",
    //       value: "studentEnrolledCourses",
    //     },
    //     {
    //       label: "Own",
    //       value: "own",
    //     },
    //     {
    //       label: "YouTube",
    //       value: "youtube",
    //     },
    // ];


    const usersListConfig = [
        {
          name: "dateTime",
          label: "Registered Date-Time",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "rollNo",
          label: "Student Roll.No",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "studentName",
          label: "Student Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "studentBranch",
          label: "Branch",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "studentSEM",
          label: "SEM",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "emailId",
          label: "Email-Id",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "mobileNo",
          label: "Mobile.No",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "studentEnrolledCourses",
          label: "Total Courses Enrolled",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "own",
          label: "Own",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "youtube",
          label: "YouTube",
          options: {
            filter: true,
            sort: true,
          },
        },
    ];

  return (
    // <TableComponent 
    //     location={"UsersList"}
    //     title={"Registered"}
    //     config={usersListConfig}
    //     data={usersListData}
    // />
    <CommonTableCard
      title={"Registered"}
      rowClickable={true}
      location={"UsersList"}
      columns={usersListConfig}
      data={usersListData}
    />
  )
}

export default StudentsList;
