import Introducao from "../Components/Contato/Introducao";
import Formulario from "../Components/Contato/Formulario";

export default function Contato() {
  return (
    <>
      <div className="Principal">
        <div className="Titulo">
          <Introducao/>
        </div>
        <div className="Divisao"></div>
        <div>
          <Formulario />
        </div>
      </div>
    </>
  );
}
