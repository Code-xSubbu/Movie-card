import MovieCard from './components/moviecard';
import './App.css';

const movies = [
  {
    title: "Seven",
    subtitle: "Seven deadly sins",
    description: "Detectives (Brad Pitt, Morgan Freeman) probe murders based on the seven deadly sins",
    image: "seven.jpg",
    rating: "4.5"
  },
  {
    title: "Omkara",
    subtitle: "Adaptation of (Othello)",
    description: "A jealous brigand poisons his leader's mind against the man's faithful fiancée",
    image: "omkara.jpg",
    rating: "4.5"
  },
  {
    title: "The Godfather",
    subtitle: "Crime Drama",
    description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    image: "godfather.jpg",
    rating: "5"
  },
];

function App() {
  return (
    <div className="min-h-fit bg-blue-950 p-12">
      <h1 className="text-3xl font-bold mb-10 bg-white text-center ">Movie cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;

