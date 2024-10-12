import { useSearchParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function Filter({ filterField, filterOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || filterOptions[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="space-x-2 space-y-2 py-4">
      <h2 className="block border-b-2 py-2 text-base">
        Select one of the filters
      </h2>
      {filterOptions.map((option) => (
        <button
          onClick={() => handleClick(option.value)}
          className={`${currentFilter === option.value ? "bg-Desaturated-Dark-Cyan text-white" : ""} rounded-full px-2 py-1`}
          key={Math.random()}
        >
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Filter;
