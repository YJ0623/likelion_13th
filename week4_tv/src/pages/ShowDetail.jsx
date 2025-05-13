import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(res => setShow(res.data))
      .catch(err => console.error("상세 정보 불러오기 실패:", err));
  }, [id]);

  console.log(id);
  if (!show) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <img src={show.image?.original} alt={show.name} className="w-full h-180 mb-4" />
      <h1 className="font-bold mb-4">{show.name}</h1>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      <p>{show.genres.map((genre) => `#${genre}`).join(" ")}</p>
    </div>
  );
}
