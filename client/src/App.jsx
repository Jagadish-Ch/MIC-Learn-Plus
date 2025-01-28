import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/route-guard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardpage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomePage from "./pages/student/home";
import NotFoundPage from "./pages/not-found";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";
import ExtractYouTubeVideoPlaylistId from "./components/instructor-view/courses/add-new-course/ExtractYouTubeVideoPlaylistId";
import CourseRecommendationForm from "./pages/student/student-course-recommendation";
import CertificateGenerator from "./components/certificate-generator/CertificateGenerator";
import AdminPanel from "./components/certificate-generator2/AdminPanel";
import CertificatePage from "./components/certificate-generator2/CertificatePage";
// import CanvasComponent from "./components/certificate-generator/Components/CanvasComponent";


function App() {
  const { auth } = useContext(AuthContext);
  
  const [theme, setTheme] = useState("light");

  useEffect(()=> {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(()=> {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    
    console.log('theme', theme==="dark"?"light":"dark");
    setTheme(theme==="dark"?"light":"dark");
    
    
  }

  return (
    <div>
      <button className="bg-red-700" onClick={handleThemeSwitch}>{theme==="dark"?"light":"dark"}</button>
    <Routes>
      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardpage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route path="/certificate-generator" element={<CertificateGenerator/>} />
      <Route path="/admin-page" element={<AdminPanel/>} />
      <Route path="/user-page" element={<CertificatePage/>} />
      {/* <Route path="/upload-youtube-playlist" element={<ExtractYouTubeVideoPlaylistId/>}/> */}
      {/* <Route path="/course-recommendation-form" element={<CourseRecommendationForm/>}/>
      <Route path="/progress" element={<StudentViewCourseProgressPage/>}/> */}
      <Route
        path="/instructor/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/edit-course/:courseId"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout/>}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route
          path="course/details/:id"
          element={<StudentViewCourseDetailsPage />}
        />
        <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} />
        <Route
          path="course-progress/:id"
          element={<StudentViewCourseProgressPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </div>
  );
}

export default App;
