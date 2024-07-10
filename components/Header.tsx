import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-blue-950 md:px-8 py-5 px-2 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
           <Image src="/assets/images/logo.jpeg" alt='user profile' width={70} height={70} />
           <div className='flex flex-row items-center gap-3'>
            <p>User Name</p>
            <Image src="/assets/images/user-profile.png" className='rounded-full' alt='user profile' width={60} height={60} />
           </div>
        </div>
    </div>
  )
}
