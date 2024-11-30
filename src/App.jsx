import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

const Home = lazy(() => import("./pages/HomePage"));
const MovieDetails = lazy(() => import("./pages/MovieDetailsPage"));
const Movies = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Suspense fallback={<p>Loadind...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Route>

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
