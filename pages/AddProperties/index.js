import React, { useRef, useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import WelcomBanner from '../../src/components/core/WelcomeBanner/WelcomeBanner';
import styles from '../login/login.module.css';
import ButtonStyle from '../../src/components/ui/Buttons/Buttons.module.css';
import axios from 'axios';
import DateControl from '../../src/components/ui/FormInputs/Datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAsterisk,
  faHome,
  faMapMarkerAlt,
  faPlug,
  faCameraRetro,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../src/components/ui/FormInputs/Input';
import Select from '../../src/components/ui/FormInputs/Select';
import TextArea from '../../src/components/ui/FormInputs/TextArea';
import { userRoleOptions, userSexe } from '../../utils/StaticData';
import { propertyschema } from '../../utils/Schemas';
import Image from 'next/image';
import PropertyImage from '../../public/images/addproperty.jpg';
import useStatePromise from 'use-state-promise';
export default function addproperty() {
  
  
  const [categoryData, setCategoryData] = useState([]);
  const [equipementDataState, setEquipementDataState] = useState([]);
  const [selectedValueCategory, setSelectedValueCategory] = useState("")

  const handleOnSubmit = (values) => {
    console.log(values);
    alert('OK');
  };

  const propertyDynamiqueData = [];

  const equipementByCategory = event => {
    const categoryId = event.target.value;
    console.log(categoryId);
    setSelectedValueCategory(categoryId);
    setEquipementDataState([]);
    if (categoryId != "") {
      axios.post('/equipmentByCategory', {id: categoryId})
        .then( (response) => {
            if( response.status == 200 ) {
              //console.log(response?.data?.equipements);
              const data = response?.data?.equipements
              console.log("res",data);
              setEquipementDataState(data)
              console.log(equipementDataState);
            }
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
    }
  };

  // Initial Values of form
  const initialValues = {
    property_name: '',
    rooms: '',
    description: '',
    hosting_capacity: '',
    checkin_at: '',
    checkout_at: '',
    category: '',
    price: '',
    street_number: '',
    street: '',
    surface: '',
    postal_code: '',
    city: '',
    country: '',
    region: '',
    imgages: [],
    is_activated: true,
  };

  const getCategory = ()  => {
    axios.get('/categories')
        .then( (response) => {
            let categoryoptions = [{ key: "Selectioner votre catégory", value: "" }];
            if( response.status == 200 && response?.data != null ) {
              response?.data.map((data, i) => {
                categoryoptions.push({ key: data.name, value: data.id })
              })
              setCategoryData(categoryoptions)
            }
              
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });

    }
  useEffect(getCategory, [])
  
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className='grid gap-4 md:grid-cols-2 sm:grid-cols-1 md-grid-cols-1'>
      <div className='h-full relative'>
        <div>
          <Image src={PropertyImage} layout='fill' objectFit='fill' />
        </div>
      </div>
      <div className='grid p-8 overflow-auto'>
        <Formik
          initialValues={{
            ...initialValues,
          }}
          validationSchema={propertyschema}
          onSubmit={handleOnSubmit}
        >
          {(formik, errors, touched) => (
            <Form autoComplete='off'>
              <div>
                {/* INFORMATIONS */}
                <div className='my-10 p-4 shadow-md'>
                  <div className='flex gap-6'>
                    <FontAwesomeIcon
                      className='h-8 text-green-900'
                      size='xs'
                      icon={faHome}
                    />
                    <h3 className='md:text-sm text-xs text-green-900 text-light font-semibold mb-1'>
                      Informations sur votre bien
                    </h3>
                  </div>

                  <div className='grid grid-cols-1 mt-5 mx-7'>
                    <Input
                      label='Nom de votre bien'
                      name='property_name'
                      type='text'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                    <div className='grid grid-cols-1'>
                      <Input
                        label='Nombre de chambres'
                        name='rooms'
                        type='number'
                      />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Input
                        label='Capacité d accueil'
                        name='hosting_capacity'
                        type='number'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 mt-5 mx-7'>
                    <TextArea
                      label='Description'
                      name='description'
                      type='text'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                    <div className='grid grid-cols-1'>
                      <Input label='Surface' name='surface' type='number' />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Input label='Prix' name='price' type='text' />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                    <div className='grid grid-cols-1'>
                      <Input label='Check in' name='checkin_at' type='time' />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Input label='Check out' name='checkout_at' type='time' />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 mt-5 mx-7'>
                    <Select value={selectedValueCategory}
                      label='Catégory'
                      name='category'
                      options={categoryData}
                      onChange={equipementByCategory}
                    />
                  </div>

                </div>

                {/* EQUIPEMENTS */}

                <div className='my-10 p-4 shadow-md'>
                  <div className='flex gap-6'>
                    <FontAwesomeIcon
                      className='h-8 text-green-900'
                      size='xs'
                      icon={faPlug}
                    />
                    <h3 className='md:text-sm text-xs text-green-900 text-light font-semibold mb-1'>
                      Equipements
                    </h3>
                  </div>
                  <div className='flex gap-10'>
                      { equipementDataState.length > 0 ? (
                          equipementDataState?.map((data, i) => {
                            return (<label className='inline-flex items-center mt-3' key={data.id}>
                                <input
                                  type='checkbox'
                                  className='form-checkbox h-5 w-5 text-gray-600'
                                  name='equipement[]'
                                />
                                <span className='ml-2 text-gray-700'>{data.name}</span>
                              </label>);
                          })
                        ) : (
                          <span className='ml-2 text-gray-700'>Veuillez choisir votre catégorie pour afficher les équipements.</span>
                        )
                      }

                  </div>
                </div>

                {/* ADDRESS */}

                <div className='my-10 p-4 shadow-md'>
                  <div className='flex gap-6'>
                    <FontAwesomeIcon
                      className='h-8 text-green-900'
                      size='xs'
                      icon={faMapMarkerAlt}
                    />
                    <h3 className='md:text-sm text-xs text-green-900 text-light font-semibold mb-1'>
                      Addresse
                    </h3>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                    <div className='grid grid-cols-1'>
                      <Input label='Rue' name='street' type='text' />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Input label='Numero' name='street_number' type='text' />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                    <div className='grid grid-cols-1'>
                      <Input
                        label='Code postal'
                        name='postal_code'
                        type='text'
                      />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Input label='Ville' name='city' type='text' />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                    <div className='grid grid-cols-1'>
                      <Input label='Pays' name='country' type='text' />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Input label='Region' name='region' type='text' />
                    </div>
                  </div>
                </div>



                {/* DYNAMIQUE PROPERTY */}
                {propertyDynamiqueData?.map((data, i) => {
                  <div className=' p-2'></div>;
                })}

                <div className='my-10 p-4 shadow-md'>
                  <div className='flex gap-6'>
                    <FontAwesomeIcon
                      className='h-8 text-green-900'
                      size='xs'
                      icon={faCameraRetro}
                    />
                    <h3 className='md:text-sm text-xs text-green-900 text-light font-semibold mb-1'>
                      Photos
                    </h3>
                  </div>
                  <div className='grid grid-cols-1 mt-5 mx-7'>
                    <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1'>
                      Ajouter des photos
                    </label>
                    <div className='grid grid-cols-3 gap-6'>
                      <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-green-800 group'>
                          <div className='flex flex-col items-center justify-center pt-7'>
                            <svg
                              className='w-10 h-10 text-green-800 group-hover:text-green-600'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-green-600 pt-1 tracking-wider'>
                              Sélectionnez une photo
                            </p>
                          </div>
                          <input
                            type='file'
                            name='img1'
                            accept='image/png, image/jpeg'
                          />
                        </label>
                      </div>
                      <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-green-800 group'>
                          <div className='flex flex-col items-center justify-center pt-7'>
                            <svg
                              className='w-10 h-10 text-green-800 group-hover:text-green-600'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-green-600 pt-1 tracking-wider'>
                              Sélectionnez une photo
                            </p>
                          </div>
                          <input type='file' className='hidden'/>
                        </label>
                      </div>
                      <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-green-800 group'>
                          <div className='flex flex-col items-center justify-center pt-7'>
                            <svg
                              className='w-10 h-10 text-green-800 group-hover:text-green-600'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-green-600 pt-1 tracking-wider'>
                              Sélectionnez une photo
                            </p>
                          </div>
                          <input type='file' className='hidden' />
                        </label>
                      </div>
                      <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-green-800 group'>
                          <div className='flex flex-col items-center justify-center pt-7'>
                            <svg
                              className='w-10 h-10 text-green-800 group-hover:text-green-600'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-green-600 pt-1 tracking-wider'>
                              Sélectionnez une photo
                            </p>
                          </div>
                          <input type='file' className='hidden' />
                        </label>
                      </div>
                      <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-green-800 group'>
                          <div className='flex flex-col items-center justify-center pt-7'>
                            <svg
                              className='w-10 h-10 text-green-800 group-hover:text-green-600'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            <p className='lowercase text-sm text-gray-400 group-hover:text-green-600 pt-1 tracking-wider'>
                              Sélectionnez une photo
                            </p>
                          </div>
                          <input type='file' className='hidden' />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                  <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
                    Annuler
                  </button>
                  <button
                    type='submit'
                    className='w-auto bg-green-800 hover:bg-green-900 rounded-lg shadow-xl font-medium text-white px-4 py-2'
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}