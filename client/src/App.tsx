// client/src/App.tsx
import { Route, Switch } from "wouter";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
import AdmissionPage from"@/pages/admission";
import ProgramsPage from"@/pages/programs";
import ParentsPage from"@/pages/parents";
import Locations from "@/pages/locations";
import BookTour from "@/pages/booktour";
import Careers from "@/pages/careers";
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Global top navigation */}
      <Navbar />

      {/* Route-based content */}
      <Switch>
        <Route path="/" component={Home} />   
        <Route path="/admission" component={AdmissionPage} />
        <Route path="/programs" component={ProgramsPage} />
        <Route path="/parents" component={ParentsPage}/>
          <Route path="/locations" component={Locations}/> 
          <Route path="/book-tour" component={BookTour}/>
          <Route path="/carees" component={Careers}/>  
        {/* 404 fallback */}
        <Route>
          <main className="flex flex-1 items-center justify-center px-4 py-16">
            <div className="max-w-md text-center">
              <h1 className="mb-2 text-2xl font-semibold text-gray-800">
                Page not found
              </h1>
              <p className="mb-4 text-gray-500">
                The page you’re looking for doesn’t exist or has been moved.
              </p>
              <a href="/" className="text-pink-600 hover:underline">
                Go back home
              </a>
            </div>
          </main>
        </Route>
      </Switch>

      {/* Global footer */}
      <Footer />
    </div>
  );
}
