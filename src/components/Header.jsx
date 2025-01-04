/* eslint-disable react/prop-types */
const Header = () => {
  return (
    <div className="fixed flex h-12 w-screen justify-between bg-white px-8 leading-[3rem] shadow-md ">
      <Logo />

      <div className="flex h-full w-96 flex-row items-center justify-evenly">
        <Button Content={"Home"} />
        <Button Content={"LinkedIn"} />
        <Button Content={"Resume"} />
        <SpecialButton Content={"Contact"} />
      </div>
    </div>
  );
};

const Button = ({ Content }) => {
  return <div className="align-middle font-inter">{Content}</div>;
};

const SpecialButton = ({ Content }) => {
  return (
    <div className="special-button font-inter">
      <div className="fixed top-0"> {Content} </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="my-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 align-middle font-gilda text-sm">
      NT
    </div>
  );
};

export default Header;