import React from 'react';
import ProfileSettings from '../profile-settings/ProfileSettings';

export const InstructorProfileData = 
{
    img: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    name: "Ch.Jagadish",
    role: "Instructor",
    emailId: "jagadishch@gmail.com",
    mobileNo: "90xxxxxxxx",
    deptName: "CSE",
    providedCourses: "8",
    youtubeCourses: "6/8",
    ownCourses: "2/8",
}

export const InstructorProfileConfig = [
    {
        id:"full-name",
        type:"text",
        label: "Full Name",
        value: "name",
        placeholder: "Enter Full Name",
    },
    {
        id:"role",
        type:"text",
        label: "Role",
        value: "role",
        placeholder: "Student",
    },
    {
        id:"email-id",
        type:"text",
        label: "Email-Id",
        value: "emailId",
        placeholder: "Enter Email-Id",
    },
    {
        id:"mobile-no",
        type:"text",
        label: "Mobile.No",
        value: "mobileNo",
        placeholder: "Enter Mobile.No",
    },
    {
        id:"dept-name",
        type:"text",
        label: "Dept.Name",
        value: "deptName",
        placeholder: "Enter Dept.Name",
    },
    {
        id:"provided-courses",
        type:"text",
        label: "No.of Provided Courses",
        value: "providedCourses",
        placeholder: "",
    },
    {
        id:"youtube-courses",
        type:"text",
        label: "YouTube Courses",
        value: "youtubeCourses",
        placeholder: "",
    },
    {
        id:"own",
        type:"text",
        label: "Own Courses",
        value: "ownCourses",
        placeholder: "",
    },
];

const InstructorProfile = () => {

  return (
    <ProfileSettings
      role={"instructorProfile"}
      ProfileConfig={InstructorProfileConfig}
      ProfileData={InstructorProfileData}
    />
  )
}

export default InstructorProfile;
