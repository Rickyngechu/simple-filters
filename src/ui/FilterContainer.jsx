import Filter from "./Filter";

function FilterContainer() {
  return (
    <div>
      <Filter
        filterField="career"
        filterOptions={[
          { value: "all", label: "All" },
          { value: "frontend", label: "Frontend" },
          { value: "javascript", label: "Javascript" },
          { value: "css", label: "css" },
        ]}
      />
    </div>
  );
}

export default FilterContainer;
