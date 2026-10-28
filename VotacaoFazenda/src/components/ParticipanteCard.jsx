const ParticipanteCard = ({ participante, onVotar }) => {
  const { nome, foto, naRoca } = participante;

  return (
    <article className={naRoca ? 'card card-roca' : 'card'}>
      {naRoca && <span className="selo-roca">Na roça</span>}

      <figure className="card-figura">
        <img src={foto} alt={nome} className="card-foto" />
        <figcaption className="card-nome">{nome}</figcaption>
      </figure>

      {onVotar && (
        <button
          type="button"
          className="botao botao-principal card-botao"
          onClick={() => onVotar(participante)}
        >
          Votar para eliminar
        </button>
      )}
    </article>
  );
};

export default ParticipanteCard;
