import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import {searchData} from "../search-data/searchData"
import { InstructorContext } from "@/context/instructor-context";
import { Delete, SquareArrowOutUpRight, Trash2 } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function InstructorCourses({ listOfCourses }) {
  const navigate = useNavigate();
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  const [search, setSearch] = useState("")

  const tableData = [
    {
      _id: "1",
      name: "name-1",
      rollNo: "2xxxxxxxx",
      emailId: "jxxxxx@gmail.com",
      mobileNo: "90xxxxxxxxx",
      category: "Web Development",
      courseName:"Introduction to Web development",
      description: "This is about of the course",
      lectures: [{}, {}, {}],
      contentType: "YouTube"
    },
    {
      _id: "2",
      name: "name-2",
      rollNo: "2xxxxxxxx",
      emailId: "jxxxxx@gmail.com",
      mobileNo: "91xxxxxxxxx",
      category: "Software Development",
      courseName:"Introduction to Web development",
      description: "This is about of the course",
      lectures: [{}, {}, {}],
      contentType: "YouTube"
    },
  ]

  const handleRemove = (index) => {
    alert(`Removing row-${index+1}`)
  }

  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
        <Button
          onClick={() => {
            setCurrentEditedCourseId(null);
            setCourseLandingFormData(courseLandingInitialFormData);
            setCourseCurriculumFormData(courseCurriculumInitialFormData);
            navigate("/instructor/create-new-course");
          }}
          className="p-6"
        >
          Create New Course
        </Button>
      </CardHeader>

      {/* <CardContent>
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
      </CardContent> */}

      <CardHeader>
        <CardTitle className="border-t-2 p-2 border-black dark:border-white text-2xl font-extrabold text-center text-yellow-600">Recommended Courses</CardTitle>
      </CardHeader>

      <CardHeader>
        <CardTitle className=" text-2xl font-extrabold justify-items-center">
          <Input type="search" placeholder="Search" className="border-2 border-black tracking-widest" onChange={(e)=> setSearch(e.target.value)}/>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          {/* <Table>
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
          </Table> */}
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead>Roll.No</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Email-Id</TableHead>
                <TableHead>Mobile.No</TableHead>
                <TableHead>Course Category</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>No.of Lectures</TableHead>
                {/* <TableHead>
                  <TableHead className="text-center" colSpan={3}>Recommended Courses</TableHead>
                  <TableRow  className="border-none">
                    <TableHead>Category</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>No.of Lectures</TableHead>
                  </TableRow>
                </TableHead> */}
                <TableHead>Content Type</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData && tableData.length > 0
                ? tableData.filter((item)=>{
                  return search.toLowerCase() ==='' 
                  ? item
                  : Object.values(item).some((value) =>
                    value.toString().toLowerCase().includes(search.toLowerCase())
                  )
                }).map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {user?.rollNo}
                      </TableCell>
                      <TableCell>{user?.name}</TableCell>
                      <TableCell>
                        {user?.emailId}
                      </TableCell>
                      <TableCell>{user?.mobileNo}</TableCell>
                      
                        <TableCell>{user?.category}</TableCell>
                        <TableCell>{user?.courseName}</TableCell>
                        <TableCell>{user?.lectures?.length}</TableCell>
                        
                      <TableCell>{user?.contentType}</TableCell>
                      <TableCell className="text-center dark:text-black">
                        <Button
                          onClick={() => {
                            navigate(`/instructor/edit-course/${user?._id}`);
                          }}
                          variant="ghost"
                          size="sm"
                          className="m-2 hover:text-green-700"
                        >
                          <SquareArrowOutUpRight className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="sm" className="m-2 hover:text-red-700" 
                          onClick={() => handleRemove(index)}
                        >
                          <Trash2 className="h-6 w-6" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : <TableCell colSpan={4} className="font-bold text-xl p-4">No Reccomendations...!</TableCell>}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default InstructorCourses;
