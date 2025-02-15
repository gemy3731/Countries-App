
import { Label, Select } from "flowbite-react";

export function FilterInput() {
  return (
    <div className="w-1/6">
      <Select  id="countries" className="darkElement">
        <option hidden className="darkElement">Filter By Region</option>
        <option className="darkElement">United States</option>
        <option className="darkElement">Canada</option>
        <option className="darkElement">France</option>
        <option className="darkElement">Germany</option>
      </Select>
    </div>
  );
}
