import Image from "next/image";
import { FilterInput } from "./_components/FilterInput";
import SearchInput from "./_components/SearchInput";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-[88px] overflow-auto">
        <div className="flex justify-between mt-10">
          <SearchInput />
          <FilterInput />
        </div>
      </div>
    </>
  );
}
