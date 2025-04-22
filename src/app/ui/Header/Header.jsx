'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDown from './Dropdown';

export default function Header({ logo, variant }) {
  const [searchToggle, setSearchToggle] = useState();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos != 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_fs_18 cs_sticky_header ${
          variant ? variant : ''
        }  ${isSticky ? isSticky : ''}`}
      >
        {variant && (
          <div className="cs_top_header cs_accent_bg">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_top_header_list cs_mp0">
                  <li>
                    <b>Address: </b>3517 W. Gray St. Utica, Pennsylvania 57867
                  </li>
                  <li>info@company.com</li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <ul className="cs_top_header_list cs_mp0">
                  <li>
                    <Link href="/">Help</Link>
                  </li>
                  <li>
                    <Link href="/">Support</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" href="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav cs_medium cs_primary_font">
                <ul
                  className={`cs_nav_list ${
                    mobileToggle === true ? 'cs_active' : ''
                  }`}
                >
                  <li className="menu-item-has-children">
                    <Link href="/">Home</Link>
                    <DropDown>
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/home-v2">Home-v2</Link>
                        </li>
                        <li>
                          <Link href="/home-v3">Home-v3</Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/destination">Destinations</Link>
                    <DropDown>
                      <ul>
                        <li>
                          <Link href="/destination">Destination</Link>
                        </li>
                        <li>
                          <Link href="/destination/destination-details">
                            Destination Details
                          </Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/tours">Tours</Link>
                    <DropDown>
                      <ul>
                        <li>
                          <Link href="/tours">Tours</Link>
                        </li>
                        <li>
                          <Link href="/tours/tour-details">Tour Details</Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/blogs">Blog</Link>
                    <DropDown>
                      <ul>
                        <li>
                          <Link href="/blogs">Blog</Link>
                        </li>
                        <li>
                          <Link href="/blogs/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </DropDown>
                  </li>
                  <li>
                    <Link href="/contact">Contacts</Link>
                  </li>
                </ul>
                <span
                  className={
                    mobileToggle
                      ? 'cs_menu_toggle cs_teggle_active'
                      : 'cs_menu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </div>
            </div>
            <div className="cs_main_header_right">
              <div className="cs_header_toolbox">
                <div>
                  <button
                    className="cs_search_btn cs_fs_24"
                    type="button"
                    onClick={() => setSearchToggle('active')}
                  >
                    <Icon icon="fa6-solid:magnifying-glass" />
                  </button>
                </div>
                <div className="cs_fs_20 cs_medium">+8 (123) 985 789</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_header_search ${searchToggle}`}>
        <div className="cs_header_search_in">
          <div className="container">
            <div className="cs_header_search_box">
              <form action="#" className="cs_search_form">
                <input type="text" placeholder="Search Here..." />
                <button className="cs_search_btn">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.07914 0C3.62682 0 0 3.62558 0 8.07641C0 12.5272 3.62682 16.1599 8.07914 16.1599C9.98086 16.1599 11.7299 15.4936 13.1122 14.3875L16.4775 17.7498C16.6473 17.9126 16.8741 18.0024 17.1094 18C17.3446 17.9975 17.5695 17.9032 17.736 17.737C17.9025 17.5708 17.9972 17.3461 17.9999 17.111C18.0027 16.8758 17.9132 16.6489 17.7506 16.4789L14.3853 13.1148C15.4928 11.7308 16.16 9.97968 16.16 8.07641C16.16 3.62558 12.5315 0 8.07914 0ZM8.07914 1.79517C11.561 1.79517 14.3625 4.59577 14.3625 8.07641C14.3625 11.557 11.561 14.3647 8.07914 14.3647C4.59732 14.3647 1.79575 11.557 1.79575 8.07641C1.79575 4.59577 4.59732 1.79517 8.07914 1.79517Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
              <button
                className="cs_close"
                type="button"
                onClick={() => setSearchToggle(!searchToggle)}
              >
                <img src="/images/close.svg" alt="Close" />
              </button>
            </div>
          </div>
        </div>
        <div className="cs_sidenav_overlay" />
      </div>
    </>
  );
}
