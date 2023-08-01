import React, { useEffect, useState } from "react";

const FilterValueArray = [
  { filterName: "Tất Cả", priceFilter_gte: null, priceFilter_lte: null },
  {
    filterName: "Nhỏ hơn 100,000₫",
    priceFilter_gte: null,
    priceFilter_lte: 10,
  },
  {
    filterName: "Từ 100,000₫ - 300,000₫",
    priceFilter_gte: 10,
    priceFilter_lte: 30,
  },
  {
    filterName: "Từ 300,000₫ - 500,000₫",
    priceFilter_gte: 30,
    priceFilter_lte: 50,
  },
  {
    filterName: "Từ 500,000₫ - 1,000,000₫",
    priceFilter_gte: 50,
    priceFilter_lte: 100,
  },

  
];

function getPriceRange(FilterValueArray, filterName) {
  const filterValueCurrent = FilterValueArray.filter((value) => {
    return value.filterName == filterName;
  });
  return {
    priceFilter_gte: filterValueCurrent[0].priceFilter_gte,
    priceFilter_lte: filterValueCurrent[0].priceFilter_lte,
  };
}
function CollectionsFilterItem({ filterValue, setPriceRange }) {
  const handleChange = (e) => {
    setPriceRange(getPriceRange(FilterValueArray, e.target.value));
    window.scrollTo(0, 0);
  };
  return (
    <li className="collections__filter-item">
      <label className="label-filter">
        <input
          type="radio"
          name="filter"
          value={filterValue.filterName}
          onChange={(e) => handleChange(e)}
        />
        <div className="filterName">{filterValue.filterName}</div>
      </label>
    </li>
  );
}

function FilterProduct({ setPriceRange, params }) {
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    setShowFilter(false);
    setPriceRange({});
  }, [params.isSale, params.typeProduct]);

  return (
    <div className="collections__filter">
      <div
        className="collections__filter-name"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        <span>
          Bộ lọc<i className="fas fa-chevron-down"></i>
        </span>
      </div>
      <ul
        className={
          showFilter
            ? "collections__filter-list show-collections__filter-list"
            : "collections__filter-list"
        }
      >
        <li>
          Khoảng giá
          <i className="fas fa-times" onClick={() => setShowFilter(false)}></i>
        </li>
        {showFilter &&
          FilterValueArray.map((filterValue) => {
            return (
              <CollectionsFilterItem
                key={filterValue.filterName}
                filterValue={filterValue}
                setPriceRange={setPriceRange}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default FilterProduct;
