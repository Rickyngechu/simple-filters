/* eslint-disable react/prop-types */
function JobItems({ job }) {
  //   Destructuring the job object
  const {
    company,
    logo,
    new: newJob,
    featured,
    contract,
    languages,
    location,
    position,
    postedAt,
    tools,
  } = job;

  return (
    <li
      className={`flex flex-wrap items-center gap-6 rounded-lg ${newJob || featured ? "border-l-4 border-Desaturated-Dark-Cyan" : ""} px-4 py-3 shadow-xl shadow-cyan-100`}
    >
      <img src={logo} alt={company} />
      <div className="space-y-2">
        <p className="space-x-2">
          <span className="text-Desaturated-Dark-Cyan">{company}</span>
          {newJob ? (
            <span className="rounded-full bg-Desaturated-Dark-Cyan px-2 py-1 text-sm uppercase text-Light-Grayish-Cyan-FilterTablets">
              New!
            </span>
          ) : (
            ""
          )}

          {featured ? (
            <span className="rounded-full bg-Very-Dark-Grayish-Cyan px-2 py-1 text-sm uppercase text-Light-Grayish-Cyan-FilterTablets">
              Featured
            </span>
          ) : (
            ""
          )}
        </p>
        <h1 className="text-lg font-bold text-Very-Dark-Grayish-Cyan">
          {position}
        </h1>
        <p className="space-x-2 text-sm text-Dark-Grayish-Cyan">
          <span>{postedAt}</span> &middot;
          <span>{contract}</span> &middot;
          <span>{location}</span>
        </p>
      </div>
      <p className="ml-auto space-x-3 font-medium text-Desaturated-Dark-Cyan">
        {tools?.length > 1 ? (
          tools.map((tool) => <span key={tool}>{tool}</span>)
        ) : (
          <span>{tools[0]}</span>
        )}

        {languages?.length > 1 ? (
          languages.map((language) => (
            <span key={Math.random()}>{language}</span>
          ))
        ) : (
          <span>{languages[0]}</span>
        )}
      </p>
    </li>
  );
}

export default JobItems;
