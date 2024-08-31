import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onborading from "./pages/Onborading";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import Myjobs from "./pages/Myjobs";
import { ThemeProvider } from "./components/theme-provider";
import Protectedroute from "./components/Protectedroute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <Protectedroute>
            <Onborading />,
          </Protectedroute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Protectedroute>
            <JobListing />,
          </Protectedroute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <Protectedroute>
            <JobPage />,
          </Protectedroute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <Protectedroute>
            <PostJob />,
          </Protectedroute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <Protectedroute>
            <SavedJobs />,
          </Protectedroute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <Protectedroute>
            <Myjobs />,
          </Protectedroute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
