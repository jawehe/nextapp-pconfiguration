"use client"
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { toast } from '@/hooks/use-toast'
import { signIn } from 'next-auth/react'
import ROUTES from '@/constants/routes'
const SocialAuthForms = () => {
    
const buttonClass="body-md-text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
const handleSignIn =async(provider :'github' | 'google') =>{
    try{
        await signIn(provider,{
            callback:ROUTES.HOME,
            redirect:false
        })

    }catch(error){
        console.log(error);
        toast({
            title:"Sign-in failed ",
            description:error instanceof Error
            ?error.message
            :"an error Accured during sign-in ",
            variant:"destructive",
        })    }

}
return (
    <div className='mt-10 flex flex-wrap gap-2.5 '>
        <Button className={buttonClass} onClick={()=>handleSignIn('github')}>
        <Image
          src="/assets/icons/github.svg"
          alt="github logo"
          width={20}
          height={20}
          className=" invert-colors mr-2.5 object-contain "
        ></Image>
        <span>Log In with Github</span>
        </Button>
        <Button className={buttonClass} onClick={()=>handleSignIn('google')}>
        <Image
          src="/assets/icons/google.svg"
          alt="google logo"
          width={20}
          height={20}
          className="  mr-2.5 object-contain "
        ></Image>
        <span>Log In with Google</span>
        </Button>
    </div>
  )
}

export default SocialAuthForms