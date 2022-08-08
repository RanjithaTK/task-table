import { useState } from "react"
import "./App.css"
import BasicTable from "./components/BasicTable"
import Pagination from "./components/Pagination"
function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [namesPerPage, setnamePerPage] = useState(10)

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //get current post
  const indexOfLastName = currentPage * namesPerPage
  const indexOfFirstName = indexOfLastName - namesPerPage
  const currentData = data.slice(indexOfFirstName, indexOfLastName)

  return (
    <div className="">
      <BasicTable data={currentData} setData={setData} />
      <Pagination
        namesPerPage={namesPerPage}
        totalNames={data.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
