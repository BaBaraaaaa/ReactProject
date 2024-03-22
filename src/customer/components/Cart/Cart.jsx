import React from 'react'
import CartItem from './CartItem'
import {Divider,Button} from "@mui/material"

const Cart = () => {
  return (
    <div>
    <div className='lg:grid grid-cols-3 lg:px-16 relative'>
    <div className='col-span-2'> <CartItem/>
    {[1,1,1,1].map((item)=><CartItem/>)}
    </div>
    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'> Price Details</p>
            <hr/>
            <div className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between pt-3 text-black'>
                    <span> Price</span>
                    <span className='text-green-600'> 200 VND</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                    <span> Disccount</span>
                    <span className='text-green-600'> -90 VND</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                    <span> Delivery Change</span>
                    <span className='text-green-600'> Free</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                    <span> Total Amount</span>
                    <span className='text-green-600'> 110 VND</span>
                </div>
            </div>
            <Button
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                  className='w-full mt-5'
                >
                 Thanh Toán
                </Button>
        </div>
    </div>
        
    </div>
   
    </div>
  )
}

export default Cart