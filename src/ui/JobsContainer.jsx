/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import JobItems from "./JobItems";

function JobsContainer({ jobs }) {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("career") || "all";

  let filteredJobs;
  if (filterValue === "all") filteredJobs = jobs;
  if (filterValue === "frontend")
    filteredJobs = jobs.filter((job) => job.role.toLowerCase() === filterValue);
  if (filterValue === "javascript")
    filteredJobs = jobs.filter((job) =>
      job.languages.some(
        (language) =>
          language.toLowerCase() === filterValue.toLocaleLowerCase(),
      ),
    );
  if (filterValue === "css")
    filteredJobs = jobs.filter((job) =>
      job.languages.some(
        (tool) => tool.toLowerCase() === filterValue.toLocaleLowerCase(),
      ),
    );

  if (filteredJobs.length === 0)
    return (
      <p className="textg-lg mt-6">
        Seems like there is no data for this filter. Please apply some other
        filters.
      </p>
    );
  return (
    <ul className="flex max-h-dvh flex-col gap-6 overflow-y-scroll">
      {filteredJobs.map((job) => (
        <JobItems key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobsContainer;
