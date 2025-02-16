import InstructorCourses from "@/components/instructor-view/courses";
import InstructorRevenueOnCourses from "@/components/instructor-view/courses-revenue";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import StudentsList from "@/components/instructor-view/users-list";
import InstructorProfile from "@/components/profile/instructor-profile";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { useDarkMode } from "@/context/dark-mode-context/DarkModeContext";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import {
  BarChart,
  Book,
  ChevronLeft,
  CircleUserRound,
  IndianRupee,
  IndianRupeeIcon,
  LogOut,
  Menu,
  Moon,
  Sun,
  Users,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);
  const { darkMode, setDarkMode } = useDarkMode();
  const [hideSidebar, setHideSideBar] = useState(false);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "Dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Create Courses",
      value: "Create Courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: IndianRupee,
      label: "Revenue on Courses",
      value: "Revenue on Courses",
      component: (
        <InstructorRevenueOnCourses listOfCourses={instructorCoursesList} />
      ),
    },
    {
      icon: Users,
      label: "Users List",
      value: "Users List",
      component: <StudentsList listOfCourses={instructorCoursesList} />,
    },
    {
      icon: CircleUserRound,
      label: "Profile",
      value: "Profile",
      component: <InstructorProfile listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  console.log(instructorCoursesList, "instructorCoursesList");

  return (
    <div className="flex-1 md:flex flex-wrap bg-gray-100 dark:bg-slate-900 animate-appear duration-500">
      <aside
        className={`${
          hideSidebar ? "md:nav-inactive" : "h-full md:h-auto md:nav-active"
        } w-[100%] md:max-w-full absolute md:sticky z-10 top-0 left-0 md:overflow-x-hidden md:visible bg-white dark:bg-slate-950 shadow-md`}
      >
        <div
          className={`${
            hideSidebar ? "h-16 md:h-full" : "h-full"
          } p-4 sticky overflow-hidden`}
        >
          <span className="flex items-center justify-between">
            {/* {!hideSidebar && */}
            <h1
              className={`${
                hideSidebar ? "visible md:hidden" : ""
              } text-2xl font-bold text-center`}
            >
              ADMIN VIEW
            </h1>
            {/* } */}
            <Menu onClick={() => setHideSideBar(!hideSidebar)} />
          </span>

          <nav className={`mt-4 top-10`}>
            {menuItems.map((menuItem) =>
              !hideSidebar ? (
                <Button
                  className="w-full justify-start mb-2 dark:text-yellow-600 hover:text-yellow-600 hover:bg-gradient-to-r from-[#000000] to-[#434343] animate-appear duration-1000"
                  key={menuItem.value}
                  variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                  onClick={
                    menuItem.value === "logout"
                      ? handleLogout
                      : () => setActiveTab(menuItem.value)
                  }
                >
                  <menuItem.icon className="mr-2 h-4 w-4 my-6" />
                  {menuItem.label}
                </Button>
              ) : (
                <menuItem.icon
                  onClick={
                    menuItem.value === "logout"
                      ? handleLogout
                      : () => setActiveTab(menuItem.value)
                  }
                  className="mr-2 h-4 w-4 my-6 dark:hover:text-yellow-700"
                />
              )
            )}
            {
              !hideSidebar ? (
                <Button
                  className="w-full bg-inherit text-black dark:bg-white justify-start mb-2 dark:text-yellow-600 hover:text-yellow-600 hover:bg-gradient-to-r from-[#000000] to-[#434343] animate-appear duration-1000"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {/* <DarkModeSwitch
                style={darkMode?{color:"white"}:{color:"black"}}
                id='dark-mode'
                checked={darkMode}
                size={20}
              /> */}
                  {darkMode ? <Sun /> : <Moon />}
                  &nbsp;
                  <span>
                    {darkMode ? "Enable Light Mode  " : "Enable Dark Mode  "}
                  </span>
                </Button>
              ) : darkMode ? (
                ""
              ) : (
                ""
              )
              // {/*<Sun/>:<Moon/>*/}
            }
          </nav>
        </div>
      </aside>
      <main className="flex-1 min-h-screen p-8 md:overflow-y-auto md:max-w-7xl mt-10 md:m-0 md:mx-auto">
        <h1 className="text-3xl text-center bg-gradient-to-bl from-[#000000] to-[#434343] text-yellow-600 border p-2 rounded-2xl break-words font-bold mb-8 dark:text-yellow-600">
          {activeTab}
        </h1>
        <div className="w-full md:w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem, index) => (
              <div>
                <TabsContent key={index} value={menuItem.value}>
                  {menuItem.component !== null ? menuItem.component : null}
                </TabsContent>
              </div>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
