import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import Funfact from '../../Funfact/Funfact';
import Image from 'next/image';

export default function FunfactSection({
  imgUrl,
  bgImgUrl,
  title,
  subTitle,
  desc,
  data,
}) {
  return (
    <div className="container">
      <div className="row cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_image_box cs_style_1">
            <Image src={imgUrl} alt="FunFact" placeholder="blur" />
            <div
              className="cs_image_box_shape"
              style={{ backgroundImage: `url(${bgImgUrl})` }}
            />
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            desc={desc}
            textVeriant="text-left"
          />
          <Spacing spacingLg={55} spacingMd={40} />
          <div className="row cs_gap_y_24 position-relative">
            <div className="cs_funfact_1_icon cs_accent_bg cs_center rounded-circle">
              <svg
                width={40}
                height={36}
                viewBox="0 0 40 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.522 18.002C35.522 19.629 36.858 20.9528 38.5 20.9528C39.328 20.9528 40 21.6186 40 22.439V27.7916C40 32.318 36.284 36 31.716 36H8.286C3.718 36 0 32.318 0 27.7916V22.439C0 21.6186 0.672 20.9528 1.5 20.9528C3.144 20.9528 4.48 19.629 4.48 18.002C4.48 16.4166 3.198 15.2236 1.5 15.2236C1.102 15.2236 0.722 15.067 0.44 14.7876C0.158 14.5082 0 14.1296 0 13.7373L0.00400019 8.21028C0.00400019 3.68402 3.72 0 8.288 0H31.712C36.28 0 39.998 3.68402 39.998 8.21028L40 13.5649C40 13.9573 39.842 14.3378 39.562 14.6152C39.28 14.8946 38.9 15.0512 38.5 15.0512C36.858 15.0512 35.522 16.375 35.522 18.002ZM24.504 19.296L26.862 17.021C27.272 16.6286 27.414 16.05 27.236 15.515C27.06 14.9798 26.6 14.5994 26.044 14.522L22.786 14.0504L21.328 11.1254C21.078 10.622 20.57 10.3089 20.004 10.3069H20C19.436 10.3069 18.928 10.6201 18.674 11.1234L17.216 14.0504L13.964 14.52C13.402 14.5994 12.942 14.9798 12.764 15.515C12.588 16.05 12.73 16.6286 13.138 17.021L15.496 19.296L14.94 22.5124C14.844 23.0672 15.07 23.6182 15.53 23.9492C15.79 24.1334 16.092 24.2286 16.398 24.2286C16.632 24.2286 16.868 24.171 17.084 24.0582L20 22.5402L22.91 24.0542C23.414 24.3216 24.012 24.28 24.47 23.9472C24.932 23.6182 25.158 23.0672 25.062 22.5124L24.504 19.296Z"
                  fill="white"
                />
              </svg>
            </div>
            {data?.map((elements, index) => (
              <div className="col-sm-6" key={index}>
                <Funfact data={elements} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
