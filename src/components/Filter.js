import React, { useState } from 'react'
import { useFilterContext } from '../context/filter_context';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

const Filter = () => {
  const { filters: { text, price, maxPrice, minPrice }, all_products, updateFilterValue, clearFilter } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  }
  // get unique data
  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")

  // Set Active button and function call for (Category)
  const [categoryOpen, setCategoryOpen] = useState(true);
  const toggleAccordion = () => {
    setCategoryOpen(!categoryOpen);
  }

  const [activeButton1, setActiveButton1] = useState("all");
  const clickToUnderline1 = (event) => {
    const buttonV = event.target.value;
    updateFilterValue(event);
    setActiveButton1(buttonV);
  }

  // Set Active button and function call for (Comoany)
  const [companyOpen, setCompanyOpen] = useState(false);
  const toggleAccordion1 = () => {
    setCompanyOpen(!companyOpen);
  }

  const [activeButton2, setActiveButton2] = useState("all");
  const clickToUnderline2 = (event) => {
    const buttonV = event.target.value;
    updateFilterValue(event);
    setActiveButton2(buttonV);
  }

  return (
    <div className='bg-white divide-y'>
      <div className='p-4 grid grid-cols-2'>
        <span className='text-xl font-semibold'>Filters</span>
        <span className='text-sm font-semibold text-[#2874f0] flex justify-end'>
          <button onClick={clearFilter}>CLEAR ALL</button>
        </span>
      </div>
      <div className='p-4'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input onChange={updateFilterValue} value={text} className="bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-[#2975f0] focus:ring-1" placeholder="Search..." type="text" name="text" />
        </form>
      </div>
      {/* Category filter */}
      <div className='p-4'>
        <div className="border rounded-md mb-4">
          <div className="px-4 py-2 flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
            <h2 className="text-lg font-semibold">Category</h2>
            <span className="text-xl">{categoryOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
          </div>
          {categoryOpen && (
            <div className="px-6 py-2 flex flex-col items-start">
              {categoryData.map((currElem, index) => {
                return (
                  <button className={`${activeButton1 === currElem ? 'underline underline-offset-4 text-[#2975f0]' : ''}`} type="button" name="category" value={currElem} onClick={clickToUnderline1} key={index}>
                    {currElem.charAt(0).toUpperCase() + currElem.slice(1)}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* Price filter */}
      <div className='py-4 px-6'>
        <div className='font-semibold'>Price</div>
        <div className=''>
          <input className='w-full' onChange={updateFilterValue} min={minPrice} max={maxPrice} value={price} name='price' type='range' />
          <span className='font-[Arial]'>&#8377;{price.toLocaleString("en-IN")}</span>
        </div>
      </div>
      {/* Brand filter */}
      <div className='p-4'>
        <div className="border rounded-md mb-4">
          <div className="px-4 py-2 flex justify-between items-center cursor-pointer" onClick={toggleAccordion1}>
            <h2 className="text-lg font-semibold">Brand</h2>
            <span className="text-xl">{companyOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
          </div>
          {companyOpen && (
            <div className="px-6 py-2 flex flex-col items-start">
              {companyData.map((currElem, index) => {
                return (
                  <button className={`${activeButton2 === currElem ? 'underline underline-offset-4 text-[#2975f0]' : ''}`} type="button" name="company" value={currElem} onClick={clickToUnderline2} key={index}>
                    {currElem.charAt(0).toUpperCase() + currElem.slice(1)}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Filter
