import { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';

const CartSideBar = ({ isCartSideBarOpen, setIsCartSideBarOpen }) => {
    const [cartArray, setCartArray] = useState([]);

    // useEffect(() => {
    //     setCartArray(JSON.parse(localStorage.getItem('cart')));
    // }, [isCartSideBarOpen]);

    return (
        <div
            style={{
                transform: isCartSideBarOpen ? 'translateX(0)' : 'translateX(400px)',
                transition: 'transform 0.3s ease',
            }}
            className='top-0 right-0 md:w-[400px] w-[270px] h-screen z-50 bg-white shadow-2xl p-4 fixed flex flex-col gap-8'
        >
            <div onClick={() => setIsCartSideBarOpen(false)} className='flex'>
                <RxCross2 />
            </div>
            <h5 className='text-[40px] font-semibold'>Cart</h5>
            <div className='flex items-center justify-center bg-blue-200 p-4 min-h-[25vh] flex-col gap-4'>
                {cartArray && cartArray.length > 0 ? (
                    cartArray.map((ticket) => (
                        <div key={ticket.visitDate}>
                            <p>{ticket.visitDate}</p>
                            <p>{ticket.ticketType}</p>
                            <p>{ticket.numOfTickets}</p>
                        </div>
                    ))
                ) : (
                    <p>No tickets in the cart.</p>
                )}
            </div>

            <Link href='/cart' onClick={() => setIsCartSideBarOpen(false)}>
                <button className='px-4 py-2 w-[200px] text-white text-xl bg-red-600 rounded'>
                    View Cart
                </button>
            </Link>

            <button className='px-4 py-2  w-[200px] text-white text-xl bg-yellow-500 rounded'>
                CHECKOUT
            </button>
        </div>
    );
};

export default CartSideBar;
