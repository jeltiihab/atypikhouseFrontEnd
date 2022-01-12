import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import UserServices from '../../../services/UserServices'
import { Formik, Form, ErrorMessage } from 'formik';
import { useGlobalFilter, useSortBy, useTable, usePagination, canPreviousPagen, canNextPage } from "react-table";
import AdminNavbar from '../../../src/components/core/Adminnavbar/AdminNavbar'
import SideBar from '../../../src/components/core/AdminSideBar/AdminSideBar'
import Footer from '../../../src/components/core/AdminFooter/AdminFooter'
import Input from "../../../src/components/ui/FormInputs/Input"
import DateControl from "../../../src/components/ui/FormInputs/Datepicker"
import Select from "../../../src/components/ui/FormInputs/Select"
import { userRoleOptions, userSexe } from "../../../utils/StaticData"
import userschema from "../../../utils/Schemas"
import styles from "../../../src/components/ui/FormInputs/formIputs.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function index() {

        // Define the states
        let [users, setUsers] = useState([])
        const [showAddModal, setShowAddModal] = React.useState(false);
        const [showEditModal, setShowEditModal] = React.useState(false);

        // Initial Values of form
        const initialValues = {
            userRole: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            sexe: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            termsOfService: []
        };

        // Add user state
        const [addUser, setAddUser] = useState({
            userRole: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            sexe: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: ""
        })

        // Handle inputs change
        const handleChange = (input) => (e)  => {
            e.preventDefault()
            setAddUser({...addUser, [input]: e.target.value})
            console.log(addUser)

        }
        // Handle add user click
        const handleAddUser = async (e) => {
            // Create new user object
        const newUser = {
            userRole: addUser.userRole,
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            birthDay: addUser.birthDay,
            sexe: addUser.sexe,
            phone: addUser.phone,
            email: addUser.email,
            password: addUser.password,
            confirmPassword: addUser.confirmPassword
        }
        console.log(newUser)
        const response = await axios.post("/users", newUser)
        .catch((err) => {
            if(err && err.response) {
                toast.error("Error",{theme: 'colored'});
                console.log("error")
            }
        });

        // if there is a response and a data then success
        if(response && response.data) {
            console.log(response.data.message)
            toast.success("Utilisateur ajoutée avec succée",{
                theme: 'colored'
            });
            const newUsers = [...users, newUser]
            setShowAddModal(false)
        }
            setUsers(newUsers)
            console.log(newUsers)
        }

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
                        let name ="";
                        switch (key) {
                            case "firstName":
                                name = "Nom"
                                break;
                                case "lastName":
                                name = "Prénom"
                                break;
                                case "lastName":
                                name = "Prénom"
                                break;
                                case "sexe":
                                name = "sexe"
                                break;
                                case "email":
                                name = "email"
                                break;
                                case "roles":
                                name = "role"
                                break;
                            default:
                                break;
                        }
                    return { Header: name, accessor: key };
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
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" data-id="65" onClick={() => setShowEditModal(true)}>
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
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => alert("Supprimer: " + row.values.firstName)}>
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
            hiddenColumns: ['birthDay', '@type']
         },
        },
        tableHooks,
        useSortBy,
        usePagination,
        );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage } = tableInstance;
    
    useEffect(getUsers, []);
    
    return (
            <div>
            <AdminNavbar/>
                <div className="flex overflow-hidden bg-white pt-16">
                <SideBar/>
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                            <main>
                            <div>
                            <button
                                className="m-10 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowAddModal(true)}
                            >
                                Ajouter un utilisateur
                            </button>
                            </div>
                            <table {...getTableProps()} className="min-w-full leading-normal m-10">
                                    <thead>
                                        {headerGroups.map((headerGroup) => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                {column.render("Header")}
                                                {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                                                </th>
                                            ))}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody {...getTableBodyProps()}>
                                        {page.map((row, idx) => {
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
                            <div className="relative text-center">
                                <button disabled={!canPreviousPage} onClick={() => previousPage()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button disabled={!canNextPage} onClick={() => nextPage()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                            <div className="relative text-center">
                            {showAddModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Ajouter Un utilisateur
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowAddModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                        <Formik 
                                        initialValues={{
                                        ...initialValues
                                        }}
                                        validationSchema={userschema}
                                        onSubmit={handleAddUser}
                                        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        {(formik,errors, touched )=> (
                                            <Form >
                                            <div>
                                            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
                                                            <Input label="Nom" name="firstName" type="text" handler={handleChange("firstName")}/>
                                                            <Input label="Prénom"  name="lastName" type="text" handler={handleChange("lastName")}/>
                                                                <Select label="Vous êtes ?"  name="userRole" options={userRoleOptions} handler={handleChange("userRole")}/>
                                                                <Select label="Sexe"  name="sexe" options={userSexe} handler={handleChange("sexe")}/>
                                                                <input type="date" name="birthDay" className={styles.flatInput} onChange={handleChange("birthDay")}/>
                                                            <Input label="Télephone"  name="phone" type="text" handler={handleChange("phone")}/>
                                                            <Input label="Email"  name="email" type="email" handler={handleChange("email")}/>
                                                            <Input label="Mot de pass"  name="password" name="password" type="password" handler={handleChange("password")}/>
                                                            <Input label="Confirmer le mot de pass"  name="confirmPassword" type="password" handler={handleChange("confirmPassword")}/>
                                                </div>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowAddModal(false)}
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                        Ajouter
                                    </button>

                                            </div>
                                    </Form>
                                        )}
                                        </Formik>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                            </div>


                            <div className="relative text-center">
                            {showEditModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Modifier
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowEditModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                        <Formik 
                                        initialValues={{
                                        ...initialValues
                                        }}
                                        validationSchema={userschema}
                                        onSubmit={handleOnSubmit}
                                        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        {(formik,errors, touched )=> (
                                            <div>
                                                <Form className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
                                                        <Input label="Nom" name="firstName" type="text"/>
                                                        <Input label="Prénom"  name="lastName" type="text"/>
                                                            <Select label="Vous êtes ?"  name="userRole" options={userRoleOptions}/>
                                                            <Select label="Sexe"  name="sexe" options={userSexe}/>
                                                            <DateControl label="Date de naissance"  name="birthDay"/>
                                                        <Input label="Télephone"  name="phone" type="text"/>
                                                        <Input label="Email"  name="email" type="email"/>
                                                        <Input label="Mot de pass"  name="password" name="password" type="password"/>
                                                        <Input label="Confirmer le mot de pass"  name="confirmPassword" type="password"/>
                                                </Form>
                                            </div>
                                        )}
                                        </Formik>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowEditModal(false)}
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowEditModal(false)}
                                        >
                                Modifier
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                            </div>
                            </main>
                            <Footer/>
                        </div>
                        </div>
                        <ToastContainer />
            </div>

    )
}
