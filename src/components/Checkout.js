import { useDispatch, useSelector } from 'react-redux';
import { removefromCart } from '../redux/cartSlice';

function Checkout() {
    const cartitems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div className='flex align-middle justify-center w-full'>
            <div className=' w-[700px]'>
                <h2 className='text-emerald-600 text-xl py-5 font-extrabold'>Cart Items</h2>
                <div className='h-[400px] overflow-auto border mb-5'>
                    <table class="table-auto  border-slate-400 w-full ">
                        <thead className='bg-white border-b sticky top-0'>
                            <tr className='bg-slate-600 text-white py-5 text-left'>
                                <th className='py-5 px-5'>Product Image</th>
                                <th className='py-5 px-5'>Product Title</th>
                                <th className='py-5 px-5'>Price</th>
                                <th className='py-5 px-5'>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-fixed h-[300px] overflow-y-scroll">
                            {cartitems.map(item => (
                                <tr key={item.id} >
                                    <td className='py-5 px-5'><img src={item.image} alt='' className='w-24' /></td>
                                    <td className='py-5 px-5'><h4>{item.title}</h4></td>
                                    <td className='py-5 px-5'><h4>{item.price}</h4></td>
                                    <td className='py-5 px-5'><button className='bg-orange-600 text-white p-2 rounded-md transition-all delay-75 ease-in duration-300 hover:bg-orange-900' onClick={() => dispatch(removefromCart({ id: item.id }))}>Remove</button></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='text-right'>
                    <button className='bg-emerald-600 text-white p-2 rounded-md transition-all delay-75 ease-in duration-300 hover:bg-emerald-800' >Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;