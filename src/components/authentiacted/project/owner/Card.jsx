const Card = ({ card }) => {
  return (
    <div
      style={{ borderColor: card.color }}
      className="w-[13vw] px-3 py-5 h-[15vh] bg-white drop-shadow-card flex flex-col gap-5 border-l-[16px] rounded-lg"
    >
      <h2
        style={{ color: card.color }}
        className="text-xl font-bold capitalize"
      >
        {card.name}
      </h2>

      <h4 className="text-[#0B3558] font-bold text-4xl">{card.value}</h4>
    </div>
  );
};

export default Card;
