import Items from "@/components/Items";
import Sidebar from '@/components/Sidebar'

import Products from "@/components/Products";
import AuthProvider from "@/authContext/AuthProvider"
export default function Home() {
  return (
    <>
    <AuthProvider>
     <div className='product_description lg:w-[850px]  h-[29px]  lg:h-[168px]  text-[#252020] m-auto lg:mt-[60px]'>
            <p className='lg:font-[400] lg:text-[60px] font-simplon lg:h-[72px] text-center lg:tracking-tighter lg:leading-[72px] text-[24px] '>DISCOVER OUR PRODUCTS</p>
            <p className="text-center lg:leading-[40px] lg:text-[22px] text-[16px] font-Simplon font-[400] lg:mt-5 lg:w-[781px] w-[393px] pl-[9px] pr-[9px] m-auto">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br className="hidden lg:block" /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </div>
    <Items/>
    <div className="flex gap-4">
    <Sidebar/>
    <Products/>
    </div>
    </AuthProvider>
    </>
  );
}

