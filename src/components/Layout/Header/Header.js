import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import HeaderSearch from './HeaderSearch';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)
   const [searchOpen, setSearchOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
          window.removeEventListener('scroll', sticky);
      };
  });

   const sticky = (e) => {
      const header = document.querySelector('.transparent-header');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
   };
   // Sticky Menu Area End

	return (
		<React.Fragment>
			<Head>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <title>Castillomax Oil and Gas</title>
         </Head>
         <header>
            <div className="transparent-header">
               <div className="container-fluid">
                  <div className="header-space">
                     <div className="row align-items-center">
                           <div className="col-xl-2 col-8">
                              <div className="header-logo">
                                 <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="logo-img"/></a></Link>
                              </div>
                           </div>
                           <div className="col-xl-6 col-4">
                              <div className="main-menu d-xl-block d-none">
                                 <nav id="mobile-menu">
                                       <ul>
                                          <li className="menu-item-has-children"><Link href="/"><a>Home</a></Link>

                                          </li>
                                          <li><Link href="/about"><a>About Us</a></Link></li>
                                          <li className="menu-item-has-children"><Link href="/service"><a>Products </a></Link>
                                             <ul className="sub-menu">
                                                   <li><Link href="/service"><a>Single Point Mooring</a></Link></li>
                                                   <li><Link href="/blog"><a>Multi-buoys Mooring Systems</a></Link></li>
																									 <li><Link href="/pricing"><a>PLEM (Pipeline End Manifold)</a></Link></li>
                                                   <li><Link href="/faq"><a>Onshore and subsea pipe laying</a></Link></li>
                                             </ul>
                                          </li>
																					<li><Link href="/service-details"><a>Services</a></Link></li>
                                          <li className="menu-item-has-children"><Link href="/project"><a>Multimedia</a></Link>

                                          </li>
                                          <li className="menu-item-has-children"><Link href="/contact"><a>Contact</a></Link>

                                          </li>

                                       </ul>
                                 </nav>
                              </div>
                              <div className="side-menu-icon d-xl-none text-end">
                                 <a className="search-btn nav-search search-trigger" href="#!" onClick={() => {setSearchOpen(!searchOpen)}}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                 <button className="side-toggle" onClick={() => {setMenuOpen(!menuOpen)}}><i><FontAwesomeIcon icon={['fas', 'bars']} /></i></button>
                              </div>
                           </div>
                           <div className="col-xl-4 d-none d-xl-block">
                              <div className="header-right text-end">
                                 <div className="header-social">
                                       <a href="https://mobile.twitter.com/castillomax1" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                       <a href="https://www.facebook.com/castillomax1/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                       <a href="https://www.linkedin.com/company/castillomax-oil-and-gas/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                                       <a href="https://www.instagram.com/castillomaxoilandgas/?hl=es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                 </div>

                                 <div className="header-btn">
                                       <Link href="https://www.castillomax.com/"><a className="theme-btn theme-btn-small">Spanish</a></Link>
                                 </div>
                              </div>
                           </div>
                     </div>
                  </div>
               </div>
         </div>

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

            <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
			    <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>

         </header>
		</React.Fragment>
	);
}

export default Header;
