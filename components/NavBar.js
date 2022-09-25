import Link from 'next/link'
import {auth} from '../firebase'
export default function NavBar({user}) {
    
    return (
        <nav className=''>
        <div className="nav-wrapper #00838f cyan darken-3 ">
         <div className=' container'>    
               <Link href="/"><a className="brand-logo">MyBlog</a></Link>

         <ul id="nav-mobile" className="right ">
            {user?
            <>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/createblog"><a>Create Blog</a></Link></li>

              <li> <button  className="btn red" onClick={()=>auth.signOut()}>Logout</button></li>
            </>
            
            :
                <>
                <li><Link href="/signup"><a>Signup</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
                </>
            }
            
          </ul>
         </div>
        </div>
      </nav>
    )
}
