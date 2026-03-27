"use client";

import { useRouter } from "next/navigation";

import "./page.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className="allWindow">
      <h1>Web de busquedas de canciones</h1>
      <div className="mainContainerHome">
        <div className="leftContainer">
          <button
            onClick={() => {
              router.push("/albums");
            }}
          >
            Buscar album
          </button>
        </div>
        <div className="rightContainer">
          <button
            onClick={() => {
              router.push("/favoritos");
            }}
          >
            Mirar favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
