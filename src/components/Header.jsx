const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-[100] flex h-12 w-full justify-between bg-white bg-opacity-50 px-8 backdrop-blur">
        <div className="flex h-full w-36 items-center">
          <div className="font-inter italic">Nicholas Tong</div>
        </div>
        <div className="h-full flex-row items-center justify-evenly pl-12 font-inter lg:flex lg:gap-12">
          <a href="/" className="hidden lg:block">
            Home
          </a>
          <a href="/" className="hidden lg:block">
            Resume
          </a>
          <div className="flex h-full items-center">
            <a href="/"> Contact Me </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex h-full items-center">
            <div className="w-36 text-right font-inter italic">Portfolio</div>
          </div>
        </div>
      </div>
      {/* <div className="h-full w-full bg-white bg-opacity-50 blur-lg"></div> */}
    </>
  );
};

export default Header;
