import Introducao from "../Components/Sobre/Introducao";
import Planos from "../Components/Sobre/Planos";

export default function Sobre() {
  return (
    <>
      <div className="Intro">
        <div className="Texto">
          <Introducao />
        </div>
        <div>
          <img src="/public/screens.png" alt="png" />
        </div>
      </div>
      <div className="Planos">
        <Planos />
      </div>
    </>
  );
}
