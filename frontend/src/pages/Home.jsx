import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  const handleClickButton = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/movies/add",
        {
          title: title,
          director: director,
          releasedate: releasedate,
          genre: genre,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/movies");
        if (res.data.success) {
          setMovies(res.data.movies);
        }
      } catch (error) {
        console.log(error.response.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center pt-6 pb-28 h-full bg-gray-800 gap-7">
      <Navbar />
      <h1 className="text-white text-4xl font-bold">Movie List</h1>
      <p className="text-white">Enter Movie Details</p>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-white rounded-xl w-64"
        type="text"
        placeholder="Movie Name"
      />
      <Input
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        className="text-white rounded-xl w-64"
        type="text"
        placeholder="Director Name"
      />
      <Input
        value={releasedate}
        onChange={(e) => setReleasedate(e.target.value)}
        className="text-white rounded-xl w-64"
        type="text"
        placeholder="Release Year"
      />
      <Input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="text-white rounded-xl w-64"
        type="text"
        placeholder="Genre"
      />
      <Button className="rounded-lg" onClick={handleClickButton}>
        Add Movie 🚀
      </Button>
      <h2 className="text-white text-4xl font-bold">All Movies</h2>
      <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => {
        return (
          <Card key={movie._id} className="w-52 bg-gray-900 text-white">
            <div className="flex flex-col items-center">
            <CardHeader>
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Director: {movie.director}</CardDescription>
              <CardDescription>Release Date: {movie.releasedate}</CardDescription>
              <CardDescription>Genre: {movie.genre}</CardDescription>
            </CardContent>
            </div>
          </Card>
        );
      })}
      </div>
    </div>
  );
}

export default Home;
