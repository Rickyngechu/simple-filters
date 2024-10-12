import data from "../assets/data.json";
import FilterContainer from "./FilterContainer";
import JobsContainer from "./JobsContainer";

function Body() {
  return (
    <div className="mx-auto max-w-[80rem] px-4 sm:px-8">
      <FilterContainer />
      <JobsContainer jobs={data} />
    </div>
  );
}

export default Body;
