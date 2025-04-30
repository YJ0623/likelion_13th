import albumData from '../datas/song.json';
import "./Playlist.css";

export const Playlist = () => {
  return (
    <main className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {albumData.map((item, index) => (
        <section
          key={index}
          className="w-full bg-gray-800 p-6 rounded-lg shadow"
        >
          <img
            src={item.albumImage}
            alt={`${item.title} 앨범 커버`}
            className="w-full rounded mb-4"
          />
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <hr className="my-4" />
          <p className="text-gray-200">🎤 가수: {item.artist}</p>
          <p className="text-gray-200">📝 작사가: {item.lyricist}</p>
          <p className="text-gray-200">🎼 작곡가: {item.composer}</p>
          <p className="text-gray-400 text-sm mt-2">
            📅 발매일: {item.releaseDate}
          </p>
        </section>
      ))}
    </main>
  );
};
