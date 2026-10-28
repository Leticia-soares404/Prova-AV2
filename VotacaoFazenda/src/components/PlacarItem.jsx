const formatarPercentual = (valor) =>
  valor.toLocaleString('pt-BR', { maximumFractionDigits: 1 });

const PlacarItem = ({ participante, lider }) => {
  const { nome, foto, votos, percentual } = participante;

  return (
    <li className={lider ? 'placar-item placar-lider' : 'placar-item'}>
      <img src={foto} alt={nome} className="placar-foto" />

      <div className="placar-dados">
        <div className="placar-topo">
          <h3>{nome}</h3>
          {lider && <span className="selo-lider">Sairia hoje</span>}
        </div>

        <div className="barra">
          <div
            className="barra-preenchida"
            style={{ width: `${percentual}%` }}
          />
        </div>

        <p className="placar-legenda">
          {formatarPercentual(percentual)}% ({votos} {votos === 1 ? 'voto' : 'votos'})
        </p>
      </div>
    </li>
  );
};

export default PlacarItem;
