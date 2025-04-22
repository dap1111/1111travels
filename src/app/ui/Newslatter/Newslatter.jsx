import { usePathname } from 'next/navigation';

export default function Newslatter({ title }) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`cs_newsletter_1_wrap ${
          pathname == '/contact' ? 'cs_before_none' : ''
        }`}
      >
        <div className="container-fluid">
          <div className="cs_newsletter cs_style_1 cs_accent_bg">
            <div className="cs_newsletter_icon">
              <img src="/images/icons/envlop.png" alt="Icon" />
            </div>
            <h2 className="cs_newsletter_title cs_fs_40 cs_bold mb-0 cs_white_color">
              {title}
            </h2>
            <form action="#" className="cs_newsletter_form">
              <input
                type="text"
                className="cs_newsletter_form_field"
                placeholder="Enter your email address ..."
              />
              <button
                type="submit"
                className="cs_btn cs_style_1 cs_fs_18 cs_medium"
              >
                Subscribe
                <svg
                  width={20}
                  height={10}
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5866 5.69629H0.41235C0.184269 5.69629 0 5.46776 0 5.1849C0 4.90204 0.184269 4.67352 0.41235 4.67352H18.5906L16.0881 1.57004C15.927 1.37028 15.927 1.04587 16.0881 0.846109C16.2492 0.646349 16.5108 0.646349 16.6718 0.846109L19.8792 4.82374C19.9977 4.97076 20.0325 5.1897 19.9681 5.38147C19.9036 5.57164 19.7529 5.69629 19.5866 5.69629Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.3435 9.11986C16.2384 9.11986 16.1333 9.08012 16.0538 8.99935C15.8935 8.83909 15.8935 8.57884 16.0538 8.41858L19.2487 5.22371C19.4089 5.06345 19.6692 5.06345 19.8294 5.22371C19.9897 5.38396 19.9897 5.64422 19.8294 5.80448L16.6346 8.99935C16.5538 9.08012 16.4487 9.11986 16.3435 9.11986Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
