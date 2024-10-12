import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Header() {
  const [filterItem, setFilterItem] = useSearchParams();
  const filterValue = filterItem.get("career");
  const [displayFilters, setDisplayFilters] = useState([]);

  //   Capitalizing the first character
  const v = filterValue?.split("")[0].toUpperCase();
  const p = filterValue?.slice(1);
  const finalFilterValue = v + p;

  /*Handler for managing deleting filter items */
  function handleDeleteFilter(filter) {
    console.log(filter);
    setDisplayFilters((current) => current.filter((el) => el !== filter));

    setFilterItem("");

    // TODO To be reviewed later
    // const newSearchParams = new URLSearchParams(filterItem);

    // newSearchParams.delete(filter?.toLowerCase());

    // setFilterItem(newSearchParams);
  }

  /*Handler for clearing filter items */
  function handleClearFilters() {
    setDisplayFilters([]);

    setFilterItem("");
  }

  useEffect(
    function () {
      function handle() {
        if (!filterValue) return;
        setDisplayFilters((prev) =>
          prev.includes(finalFilterValue)
            ? [...prev].filter((el) => el !== null)
            : [...prev, finalFilterValue].filter((el) => el !== null),
        );
      }
      handle();
    },
    [finalFilterValue, filterValue],
  );

  const [imageSrc, setImgSrc] = useState("");
  // Use effect enables display of diffrent images based on the screen;'s width
  useEffect(function () {
    function handleResize() {
      const windowSize = window.innerWidth;
      if (windowSize < 375) {
        setImgSrc("/bg-header-mobile.svg");
      } else {
        setImgSrc("/bg-header-desktop.svg");
      }
    }
    handleResize();

    /*Listen for resize event */
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="relative grid grid-cols-[.5fr_5fr_.5fr] justify-items-stretch sm:grid-cols-[.5fr_1fr_.5fr]">
        <div className="col-span-3 bg-Desaturated-Dark-Cyan">
          <img src={imageSrc} alt="Header img" className="h-full w-full" />
        </div>

        <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex max-w-[50rem] -translate-y-9 items-center rounded-md bg-Light-Grayish-Cyan-Background px-4 py-2 shadow-xl shadow-cyan-100">
          <div className="flex grow flex-wrap justify-around gap-2 py-2">
            <>
              {displayFilters.length < 1 ? (
                <p className="flex items-center gap-1 overflow-hidden rounded-lg text-sm font-semibold text-Desaturated-Dark-Cyan">
                  No filters Selected
                </p>
              ) : (
                ""
              )}
              {displayFilters?.map((filter) => (
                <p
                  className="flex items-center gap-1 overflow-hidden rounded-lg text-sm font-semibold text-Desaturated-Dark-Cyan"
                  key={Math.random()}
                >
                  {filter}
                  <button
                    value={filter}
                    onClick={() => handleDeleteFilter(filter)}
                    className="bg-Desaturated-Dark-Cyan px-2 py-1.5 text-Light-Grayish-Cyan-FilterTablets"
                  >
                    x
                  </button>
                </p>
              ))}
            </>
          </div>
          <button
            onClick={handleClearFilters}
            className="ml-2 text-Dark-Grayish-Cyan"
          >
            {displayFilters.length < 1 ? "" : "Clear"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
