import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import axios from 'axios';
import Product1 from "../assets/product1.png";
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div> <Card image={item.thumbnail} tittle={item.title} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
           
          </div>
        ))}
    </>
  );
}

function Pagination({ itemsPerPage }) {
  let [alldata,setAllData]=useState([])
  useEffect(()=> {
 async function mydata (){
      let data=await axios.get("https://dummyjson.com/products")
    setAllData(data.data.products);
}
    
    mydata()

  },[])
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate.default
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName ="flex  gap-3 "
        pageClassName =" "
        pageLinkClassName=" bg-black py-1 px-4 text-white block cursor-pointer leading-5  "
      />
      <h3> ${itemOffset} - ${endOffset}  </h3>
    </>
  ) }
  export default Pagination