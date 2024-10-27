'use client';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoSearch } from 'react-icons/io5';
 
const SearchBar=()=>{
  const router = useRouter(); 

  const { 
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm<FieldValues>({
    defaultValues:{
      searchTerm: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues>= async(data)=>{
    if(!data.searchTerm) return router.push('/')
    const url= queryString.stringifyUrl({
      url: '/search',
      query:{
        searchTerm: data.searchTerm
      }
    },{skipNull:true})
    router.push(url)
    reset()
  }


  return (
    <div className="flex items-center border max-w-md mx-auto border-gray-300 rounded-md overflow-hidden ">
      <input
      {...register('searchTerm')}
      autoComplete="off"
      type="text"
       placeholder="Buscar"
       className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] w-[480px]" 
      />
      <button onClick={handleSubmit(onSubmit)} className="text-slate-500 p-2">
      <IoSearch size={25} className="text-[#282828]"/>
      </button>

    </div>
  )
}

export default SearchBar; 
