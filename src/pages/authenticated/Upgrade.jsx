import Prices from "../../components/home/home/business_section/Prices";

const Upgrade = () => {
  return <div className="flex flex-col gap-8 items-center mt-[20vh]">
    <div className="h-[10vh] w-[50vw] bg-Green100 rounded-full flex justify-between items-center px-16 text-[2rem]">
      <h1 className="text-white font-bold">Your Plan</h1>
      <h1 className="text-white font-bold">Entreprise</h1>
    </div>
    <Prices />
  </div>;
};

export default Upgrade;