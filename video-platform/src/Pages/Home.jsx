import Introducao from "../Components/Home/Introducao";
import CardsGroup from "../Components/Home/CardsGroup";

export default function Home() {
  return (
    <>
      <div className="Intro">
        <div className="Texto">
          <Introducao />
        </div>
        <div>
          <img src="/public/hero image.png" alt="png" />
        </div>
      </div>
      <div className="Cards">
        <CardsGroup />
      </div>
    </>
  );
}
