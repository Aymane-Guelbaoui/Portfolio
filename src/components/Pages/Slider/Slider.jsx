import { useNavigate } from "react-router-dom";

export default function Slider({ text, nextPath, prevPath }) {
  const navigate = useNavigate();

  return (
    <div className="">
      {text}

      <button
        onClick={() => navigate(prevPath)}
        className="absolute left-5 top-1/2 text-4xl bg-black bg-opacity-40 text-white rounded-full px-3 py-1 cursor-pointer"
      >
        ⬅
      </button>

      <button
        onClick={() => navigate(nextPath)}
        className="absolute right-5 top-1/2 text-4xl bg-black bg-opacity-40 text-white rounded-full px-3 py-1 cursor-pointer"
      >
        ➡
      </button>
    </div>
  );
}
