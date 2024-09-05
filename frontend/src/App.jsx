import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// Import other components and pages...

import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";
import { ACCOUNT_TYPE } from "./utils/constants";
import { HiArrowNarrowUp } from "react-icons/hi";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import SignupForm from "./components/core/Auth/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings/Settings";
import Instructor from "./components/core/Dashboard/Instructor";
import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import VideoDetailsSidebar from "./components/core/ViewCourse/VideoDetailsSidebar";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import PageNotFound from "./pages/PageNotFound";

// Custom Theme
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

function App() {
  const { user } = useSelector((state) => state.profile);

  const location = useLocation();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleArrow = () => {
      if (window.scrollY > 500) {
        setShowArrow(true);
      } else setShowArrow(false);
    };

    window.addEventListener("scroll", handleArrow);
    return () => {
      window.removeEventListener("scroll", handleArrow);
    };
  }, [showArrow]);

  return (
    <ChakraProvider theme={theme}>
      <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar />

        {/* go upward arrow */}
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={`bg-yellow-25 hover:bg-pink-50 hover:scale-110 p-3 text-lg text-black rounded-2xl fixed right-3 z-10 duration-500 ease-in-out ${
            showArrow ? "bottom-6" : "-bottom-24"
          } `}
        >
          <HiArrowNarrowUp />
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="catalog/:catalogName" element={<Catalog />} />
          <Route path="courses/:courseId" element={<CourseDetails />} />
          {/* Define other routes */}
          <Route path="signup" element={<OpenRoute><Signup /></OpenRoute>} />
          <Route path="login" element={<OpenRoute><Login /></OpenRoute>} />
          <Route path="forgot-password" element={<OpenRoute><ForgotPassword/></OpenRoute>} />
          <Route path="verify-email" element={<OpenRoute><VerifyEmail /></OpenRoute>} />
          <Route path="update-password/:id" element={<OpenRoute><UpdatePassword /></OpenRoute>} />
          <Route element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/Settings" element={<Settings />} />
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )}
            {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
              </>
            )}
          </Route>
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetailsSidebar />} />
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
