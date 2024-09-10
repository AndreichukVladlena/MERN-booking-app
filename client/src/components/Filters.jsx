import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Perks from "./Perks";
export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [filterKeywords, setFilterKeywords] = useState(
    location.search.keywords
  );
  console.log(`Filters` + location.search.keywords);
  const [filterMaxGuests, setFilterMaxGuests] = useState(1);
  const [filterMinPrice, setFilterMinPrice] = useState();
  const [filterMaxPrice, setFilterMaxPrice] = useState();
  const [filterPerks, setFilterPerks] = useState([]);

  function saveFilters(e) {
    e.preventDefault();

    const params = {};

    if (filterMaxGuests) {
      params.maxGuests = filterMaxGuests;
    }
    if (filterMinPrice) {
      params.minPrice = filterMinPrice;
    }
    if (filterMaxPrice) {
      params.maxPrice = filterMaxPrice;
    }
    if (filterPerks) {
      params.perks = filterPerks;
    }
    if (filterKeywords) {
      params.keywords = filterKeywords;
    }

    setSearchParams(params);
  }
  return (
    <div>
      <form onSubmit={(e) => saveFilters(e)} className="my-4">
        <h1 className="my-2 text-m pl-1">Enter some keywords</h1>
        <label className="cursor-pointer flex items-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 active:border-color-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 left-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            placeholder="Hotel Berlin"
            className="outline-none icon-none text-base"
            value={filterKeywords}
            onChange={(e) => setFilterKeywords(e.target.value)}
          ></input>
        </label>
        <h1 className="my-2 text-m pl-1">Any perks you need?</h1>
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={filterPerks} onChange={setFilterPerks} />
        </div>
        <div className="flex cols-2 py-4">
          <div className="border rounded-2xl shadow mt-4 flex grid grid-cols-1 md:grid-cols-2 px-2">
            <div className="text-center mt-2 text-2xl col-span-2">Price</div>
            <div className="py-3 px-4 flex">
              <input
                type="number"
                placeholder="min price"
                value={filterMinPrice}
                onChange={(e) => setFilterMinPrice(e.target.value)}
              />
            </div>
            <div className="py-3 px-4">
              <input
                type="number"
                placeholder="max price"
                value={filterMaxPrice}
                onChange={(e) => setFilterMaxPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="px-2">
            <h1 className="my-2 text-m pl-1">How many persons?</h1>
            <input
              type="number"
              value={filterMaxGuests}
              onChange={(e) => setFilterMaxGuests(e.target.value)}
              placeholder="amount of guests"
            />
          </div>
        </div>

        <button className="primary my-4">Search</button>
      </form>
    </div>
  );
}
