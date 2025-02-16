import React from 'react'
import ProfileSettings from '../profile-settings/ProfileSettings';

export const StudentProfileData = 
{
    img: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    name: "Ch.Jagadish",
    role: "Student",
    rollNo: "21H71A0581",
    degree: "B.Tech",
    branchName: "CSE",
    emailId: "jagadishch@gmail.com",
    mobileNo: "90xxxxxxxx",
    enrolledCourses: "8",
    youtubeContent: "6/8",
    collegeContent: "2/8",
}
export const StudentProfileConfig = [
    {
        id:"full-name",
        type:"text",
        label: "Full Name",
        value: "name",
        placeholder: "Enter Full Name",
    },
    {
        id:"role",
        readOnly: true,
        type:"text",
        label: "Role",
        value: "role",
        placeholder: "",
    },
    {
        id:"roll-no",
        readOnly: true,
        type:"text",
        label: "Roll.No",
        value: "rollNo",
        placeholder: "",
    },
    {
        id:"degree",
        readOnly: true,
        type:"text",
        label: "Degree",
        value: "degree",
        placeholder: "",
    },
    {
        id:"branch-name",
        readOnly: true,
        type:"text",
        label: "Branch Name",
        value: "branchName",
        placeholder: "Enter Branch Name",
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
        id:"enrolled-courses",
        readOnly: true,
        type:"text",
        label: "Enrolled Courses",
        value: "enrolledCourses",
        placeholder: "",
    },
    {
        id:"youtube-content",
        readOnly: true,
        type:"text",
        label: "YouTube Content",
        value: "youtubeContent",
        placeholder: "",
    },
    {
        id:"college-content",
        readOnly: true,
        type:"text",
        label: "College Content",
        value: "collegeContent",
        placeholder: "",
    },
];

const StudentProfile = () => {
    
  return (
    <ProfileSettings
        role={"user"}
        ProfileConfig={StudentProfileConfig}
        ProfileData={StudentProfileData}
    />
  )
}

export default StudentProfile;
