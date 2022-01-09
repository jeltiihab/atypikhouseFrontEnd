import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import AdminNavbar from '../../../src/components/core/Adminnavbar/AdminNavbar'
import SideBar from '../../../src/components/core/AdminSideBar/AdminSideBar'
import Footer from '../../../src/components/core/AdminFooter/AdminFooter'

export default function index() {

    // Define the state for users
    let [users, setUsers] = useState([])

    const getUsers = ()  => {
        axios.get('/users')
            .then( (response) => {
                const usersData = response.data['hydra:member'];
                setUsers(usersData);
                console.log(usersData);
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }

    // Create data Memo
    const usersData = useMemo(() =>
        [...users], [users]
    );

    // Columns Memo
    const usersColumns = useMemo(
        () =>
          users[0]
            ? Object.keys(users[0])
                .filter((key) => key !== "birthDay")
                .map((key) => {
                  if (key === "image")
                    return {
                      Header: key,
                      accessor: key,
                      Cell: ({ value }) => <img src={value} />,
                      maxWidth: 70,
                    };
    
                  return { Header: key, accessor: key };
                })
            : [],
        [users]
      );

      // Adding action buttons to table
      const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
          ...columns,
          {
            id: "Modifier",
            Header: "Modifier",
            Cell: ({ row }) => (
                <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => alert("Editing: " + row.values.firstName)}>
                Modifier
              </button>   
                </div>

            ),
          },
          {
            id: "Supprimer",
            Header: "Supprimer",
            Cell: ({ row }) => (
                <div>
              <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => alert("Supprimer: " + row.values.firstName)}>
                Supprimer
              </button>   
                </div>
            ),
          },
        ]);
      };

      const tableInstance = useTable(
        {
          columns: usersColumns,
          data: usersData,
          initialState: {
            pageIndex: 0,
            hiddenColumns: ['birthDay', '@id', '@type']
         },
        },
        tableHooks
        );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    
    useEffect(getUsers, []);
    
    return (
            <div>
            <AdminNavbar/>
            <div className="flex overflow-hidden bg-white pt-16">
            <SideBar/>
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <main>
                <table {...getTableProps()} className="min-w-full leading-normal m-10">
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    {column.render("Header")}
                                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                                    </th>
                                ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row, idx) => {
                                prepareRow(row);
                                return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell, idx) => (
                                    <td {...cell.getCellProps()} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {cell.render("Cell")}
                                    </td>
                                    ))}
                                </tr>
                                );
                            })}
                        </tbody>
                </table>
                </main>
                <Footer/>
            </div>
            </div>
            </div>

    )
}
