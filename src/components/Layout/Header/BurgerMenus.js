import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [courses, setcourses] = useState(false)
      const [blog, setBlog] = useState(false)
      const [pages, setPages] = useState(false)
      const [project, setProject] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {

        if( menu == 'home'){
          setHome(!home)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(false)
        }
        else if( menu == 'courses'){
          setHome(false)
          setcourses(!courses)
          setBlog(false)
          setPages(false)
          setProject(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setcourses(false)
          setBlog(!blog)
          setPages(false)
          setProject(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setProject(false)
          setPages(!pages)
        }
        else if( menu == 'project'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(!project)
        }
      };

      return (
      <div className="fix">
        <div className={menuOpen ? "side-info info-open": "side-info"}>
            <button className="side-info-close" onClick={() => setMenuOpen(false)}><i><FontAwesomeIcon icon={['fas', 'times']}/></i></button>
            <div className="side-info-content">
                <div className="mm-menu">
                  <ul>
                    <li><Link href="/"><a>Inicio</a></Link></li>
                    <li><Link href="/about"><a>Nosotros</a></Link></li>
                    <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('courses'); }}>Productos y Servicios</a>
                      <ul className={courses ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/service"><a>Productos</a></Link></li>
                          <li><Link href="/service-details"><a>Servicios</a></Link></li>
                      </ul>
                    </li>
                      <li><Link href="/project"><a>Multimedia</a></Link></li>

                  <li><Link href="/contact"><a>Contactános</a></Link></li>
                </ul>
              </div>
                <div className="contact-infos mb-30">
                    <div className="contact-list mb-30">
                        <h4>Información de Contacto</h4>
                        <ul>
                            <li><img src="assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon-img"/>Av. Casanova Torre Sur del Conjunto Inmobililiario CC El Recreo. Caracas, República Bolivariana de Venezuela.</li>
                            <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:info@castillomax.com">info@castillomax.com</a></li>
                            <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:+582127627214">+58 212 762 7214</a></li>
                        </ul>
                        <div className="sidebar__menu--social">
                            <a href="https://mobile.twitter.com/castillomax1" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                            <a href="https://www.facebook.com/castillomax1/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                            <a href="https://www.linkedin.com/company/castillomax-oil-and-gas/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                            <a href="https://www.instagram.com/castillomaxoilandgas/?hl=es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default BurgerMenus;
