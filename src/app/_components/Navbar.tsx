import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Navbar() {
  return (
    <div className=" py-4 shadow-md">
    <div className="flex justify-between items-center container mx-auto">
        <div className='font-[600] text-[24px]'>Where in the world?</div>
        <div className="font-[600]">
            <ThemeToggleBtn />
        </div>
    </div>
    </div>
  )
}
