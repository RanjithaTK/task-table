import React, { useEffect, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
const api =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
function BasicTable() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const handleDelete = () => {}
  const handleData = () => {}
  const handleId = () => {}
  return (
    // <div>
    // {data.map((d, i) => (
    //   <div key={i}>{d.name}</div>
    // ))}
    // </div>
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Role</th>
    //         <th>Edit</th>
    //         <th>Delete</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((d, i) => (
    //         <tr key={i}>
    //           <th>{d.name}</th>
    //           <th>{d.email}</th>
    //           <th>{d.role}</th>
    //           <th><EditIcon/></th>
    //           <th><DeleteIcon/></th>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="overflow-auto   mx-10 mt-10 mb-20 ">
      <table className="items-center w-full rounded-lg shadow-md  px-3 ">
        <thead className="bg-gradient-to-r bg-teal-800 hover:bg-teal-700 text-gray-100 rounded-lg">
          <tr>
            <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-bold text-left pl-10">
              Name
            </th>
            <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-bold text-left">
              Email
            </th>
            <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-bold text-left">
              Role
            </th>
            <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-bold text-left">
              Edit
            </th>
            <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-bold text-left">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-stone-100 text-zinc-800 ">
          {data &&
            data?.map((d, index) => (
              <tr key={index}>
                <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-light text-left pl-10">
                  {d.name}
                </th>
                <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-light text-left">
                  {d.email}
                </th>
                <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-light text-left">
                  {d.role}
                </th>
                <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-light text-left">
                  <button
                    onClick={() => {
                      handleId(index)
                      handleData(d)
                    }}
                  >
                    <EditIcon />
                  </button>
                </th>
                <th className="px-2 border-b border-solid border-gray-300 py-3 text-sm font-serif font-light text-left">
                  <button
                    onClick={() => {
                      handleDelete(d)
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default BasicTable
