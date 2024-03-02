const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-16">
      <img src="/imgs/404.svg" />
      <div className="flex flex-col gap-[2vh] items-center">
        <h2 className="text-[2.6rem] font-bold text-Typo text-center">
          Page not found
        </h2>
        <p className="text-[1.5rem] font-medium text-center w-[50vw] mx-auto text-Gray100">
          Your password has been updated successfully, you can always reset your
          password for more security
        </p>
      </div>
    </div>
  );
};

export default NotFound;
