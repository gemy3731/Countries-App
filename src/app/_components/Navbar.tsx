import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Navbar() {
  return (
    <div className=" py-4 shadow-md dark:bg-[#1f2937] fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center container mx-auto">
        <div className="font-[600] text-[24px]">Where in the world?</div>
        <div className="font-[600]">
          <ThemeToggleBtn />
        </div>
      </div>
    </div>
  );
}
