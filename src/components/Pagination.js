import React from "react"

function Pagination({ totalNames, namesPerPage, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalNames / namesPerPage); i++)
    pageNumbers.push(i)
  return (
    <div className="">
      <ul className=" flex justify-evenly h-3  items-center">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className="rounded-full bg-emerald-800 text-3xl "
              onClick={() => paginate(number)}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
