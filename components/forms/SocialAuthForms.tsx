import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
const SocialAuthForms = () => {
    const buttonClass="body-md-text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
  return (
    <div className='mt-10 flex flex-wrap gap-2.5 '>
        <Button className={buttonClass}>
        <Image
          src="/assets/icons/github.svg"
          alt="github logo"
          width={20}
          height={20}
          className=" invert-colors mr-2.5 object-contain "
        ></Image>
        <span>Log In with Github</span>
        </Button>
        <Button className={buttonClass}>
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