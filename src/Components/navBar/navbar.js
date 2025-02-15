import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './navbar.css';
import edd from "../images/3eed.jpg";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';


const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]


const Navbar = () => {

  //language
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])



  

  // const counter = useSelector((state) => state.count);
  return (
    <div className="container-fluid pt-5">
      <div className="row  position-relative">
        <div className="col-12 nav-butt">
          <span className="nv-b-item mx-2">
            <strong>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                href="#"
              >
                {t('all_pages')}
              </NavLink>
            </strong>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/"
            >
              {t('home_page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/accessories"
            >
              {t('accessories-page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/electronics"
            >
              {t('electronics_page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/clothing"
            >
              {t('clothing_Page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/computer"
            >
              {t('computer_page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/fashion"
            >
              {t('fashion_Page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/grocery"
            >
              {t('grocery_Page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/mobile"
            >
              {t('mobile_page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/videos"
            >
              {t('videos_Page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="tv"
            >
              {t('tv_page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              {t('help_page')}
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              {t('your_mazon.eg')}
            </NavLink>
          </span>
          <span>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              <img src={edd}  />
            </NavLink>
          </span>

          <span>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              {/* <img src={edd}  /> */}
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
