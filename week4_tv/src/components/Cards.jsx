import { Link } from "react-router-dom";

export default function ShowCard({ show }) {
  const { id, name, image, genres } = show;

  return (
    <Link to={`/shows/${id}`} className="bg-white shadow-md p-4 rounded">
      <img src={image?.medium} alt={name} className="w-full h-60 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <div className="flex flex-wrap gap-1">
        {genres.map((genre) => (
          <span key={genre} className="text-sm">#{genre}</span>
        ))}
      </div>
    </Link>
  );
}
