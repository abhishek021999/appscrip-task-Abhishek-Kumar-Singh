import Items from "@/components/Items";
import Sidebar_S from '@/components/Sidebar_S'

import Products from "@/components/Products";
import AuthProvider from "@/authContext/AuthProvider"
import '../Styles/page.css'
export default function Home() {
  return (
    <>
    <AuthProvider>
     <div className='product_description '>
     
            <p className='product_para'>DISCOVER OUR PRODUCTS</p>
            <p className="product_des">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br className="hidden lg:block" /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </div>
    <Items/>
    <div className="flex gap-4">
    <Sidebar_S/>
    <Products/>
    </div>
    </AuthProvider>
    </>
  );
}

