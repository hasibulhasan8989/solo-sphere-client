import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
  const {user,logOut}=useAuth()
    return (
          <div className='navbar md:px-20  sm:px-4 '>
      <div className='flex-1'>
        <Link to={'/'} className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <div  className='font-bold text-xl'>SoloSphere</div>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <div>Home</div>
          </li>
          
            {!user && <li><Link to={'/login'}>Login</Link></li>}
         
        </ul>

        {user && <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title=''>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 '
          >
            <li>
              <Link to={'/addJob'} className='justify-between'>Add Job</Link>
            </li>
            <li>
              <Link to={'/my-posted-jobs'}>My Posted Jobs</Link>
            </li>
            <li>
              <Link to={'/my-bids'}>My Bids</Link>
            </li>
            <li>
              <Link to={`/bit-request`} >Bid Requests</Link>
              
            </li>
            <li className='mt-2'>
              <button onClick={()=>logOut()} className='bg-gray-200 block text-center'>Logout</button>
            </li>
          </ul>
        </div>}
      </div>
    </div>
    );
};

export default Navbar;