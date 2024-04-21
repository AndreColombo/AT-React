export default function Formulario() {
  return (
    <>
      <form>
        <div>
          <h2>Nome:</h2>
          <input type="text" />
        </div>
        <div>
          <h2>E-mail:</h2>
          <input type="text" />
        </div>
        <div className="Mensagem">
          <h2>Mensagem:</h2>
          <input type="text" />
        </div>
        <button>Enviar</button>
      </form>
    </>
  );
}
