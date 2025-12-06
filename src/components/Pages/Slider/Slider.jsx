import { useNavigate } from "react-router-dom";

export default function Slider({ text, nextPath, prevPath }) {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center text-5xl fixed">
      {text}

      <button
        onClick={() => navigate(prevPath)}
        className="absolute left-5 bottom-14 text-4xl bg-black bg-opacity-40 text-white rounded-full px-3 py-1 cursor-pointer"
      >
        ⬅
      </button>

      <button
        onClick={() => navigate(nextPath)}
        className="absolute right-5 bottom-14 text-4xl bg-black bg-opacity-40 text-white rounded-full px-3 py-1 cursor-pointer"
      >
        ➡
      </button>
    </div>
  );
}
