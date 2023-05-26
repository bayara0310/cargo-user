import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { Button, useToast } from '@chakra-ui/react'
import { activateuri } from '@/url/uri'

const Activate = () => {
  const router = useRouter()
  const tokens = router.query.slug
  const toast = useToast();

  const [values, setValues] = useState({
    name:"",
    token:tokens,
    show:true,
  });

  const clickSubmit = e => {
    e.preventDefault()

    axios({
      method: 'POST',
      url: activateuri,
      data: {token: tokens} 
    })
    .then(response=>{
      setValues({...values, email:'', password:'', show:false});
      toast({
        title: 'Амжилттай',
        description: "Таны бүртгэл баталгаажлаа нэвтэрнэ үү",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push("/auth/signin");
    })
    .catch(error => {
      toast({
        title: 'Алдаа',
        description: error.response.data.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const activateLink = () => (
    <div>
        <h2 className='p-5 text-center text-xl mt-40'>Сайн байна уу өөрийн аккаунтаа баталгаажуулна уу</h2>
        <div className='flex justify-center'>
            <Button bg='blue.300' className='uppercase w-80 text-white' onClick={clickSubmit}>
                баталгаажуулах
            </Button>
        </div>
    </div>
  )

  return (
       <div className='col-d-6 offset-md-3'>
          {activateLink()}
       </div>
  )
}

export default Activate