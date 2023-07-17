"use client";
import { authOptions } from '@/app/utils/authOptions';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {}

const PdPage = (props: Props) => {
const {data:session, status} = useSession({
  required:true
})

if(status === "loading"){
  return <></>
}
  return (
    <div>PdPage</div>
  )
}

export default PdPage