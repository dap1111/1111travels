'use client';
import { useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Rating from '../Rating/Rating';

export default function Tabs({ data }) {
  const { tourPlan, gallary, location } = data;
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="cs_tabs">
      <ul className="cs_tab_links cs_style_1 cs_mp0">
        <li
          className={`${isActive === 0 ? 'active' : ''}`}
          onClick={() => setIsActive(0)}
        >
          <span className="cs_primary_bg cs_white_color cs_radius_5">
            Tour Plan
          </span>
        </li>
        <li
          className={`${isActive === 1 ? 'active' : ''}`}
          onClick={() => setIsActive(1)}
        >
          <span className="cs_primary_bg cs_white_color cs_radius_5">
            Location
          </span>
        </li>
        <li
          className={`${isActive === 2 ? 'active' : ''}`}
          onClick={() => setIsActive(2)}
        >
          <span className="cs_primary_bg cs_white_color cs_radius_5">
            Gallary
          </span>
        </li>
        <li
          className={`${isActive === 3 ? 'active' : ''}`}
          onClick={() => setIsActive(3)}
        >
          <span className="cs_primary_bg cs_white_color cs_radius_5">
            Reviews
          </span>
        </li>
      </ul>
      <div className="cs_tab_body">
        <div className={`cs_tab ${isActive === 0 ? 'd-block' : 'd-none'}`}>
          <ul className="cs_tour_plan_list cs_mp0">
            {tourPlan?.map((elements, index) => (
              <li className="cs_list_item" key={index}>
                <div className="cs_list_index cs_center">
                  <span>{elements.schedule}</span>
                </div>
                <div className="cs_list_content">
                  <h3 className="cs_list_item_title cs_fs_24 cs_semibold">
                    Day {elements.schedule}: {elements.title}
                  </h3>
                  <p className="cs_list_item_subtitle mb-0">{elements.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`cs_tab ${isActive === 1 ? 'd-block' : 'd-none'}`}>
          <iframe id="map" src={location} allowFullScreen="" />
        </div>
        <div className={`cs_tab ${isActive === 2 ? 'd-block' : 'd-none'}`}>
          <Gallery data={gallary} />
        </div>
        <div className={`cs_tab ${isActive === 3 ? 'd-block' : 'd-none'}`}>
          <div className="cs_review_content">
            <h3 className="cs_review_title cs_semibold">
              Our Clients Reviews Details
            </h3>
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="cs_review_count_box cs_radius_5 text-center">
                  <h3 className="cs_rating_value cs_fs_30">4</h3>
                  <div className="cs_rating_container cs_review">
                    <Rating ratingNumber={4} />
                  </div>
                  <p>5 Reviews</p>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="cs_progress_bars">
                  <div className="cs_progress_bar">
                    <div className="cs_rating_number cs_medium cs_primary_color">
                      5
                    </div>
                    <div className="cs_rating_container cs_review">
                      <Rating ratingNumber={5} />
                    </div>
                    <div className="cs_progress_line" />
                    <div className="cs_progress_hint_value cs_primary_color">
                      20
                    </div>
                  </div>
                  <div className="cs_progress_bar">
                    <div className="cs_rating_number cs_medium cs_primary_color">
                      4
                    </div>
                    <div className="cs_rating_container cs_review">
                      <div className="cs_rating_container cs_review">
                        <Rating ratingNumber={4} />
                      </div>
                    </div>
                    <div className="cs_progress_line" />
                    <div className="cs_progress_hint_value cs_primary_color">
                      15
                    </div>
                  </div>
                  <div className="cs_progress_bar">
                    <div className="cs_rating_number cs_medium cs_primary_color">
                      3
                    </div>
                    <div className="cs_rating_container cs_review">
                      <div className="cs_rating_container cs_review">
                        <Rating ratingNumber={3} />
                      </div>
                    </div>
                    <div className="cs_progress_line" />
                    <div className="cs_progress_hint_value cs_primary_color">
                      5
                    </div>
                  </div>
                  <div className="cs_progress_bar">
                    <div className="cs_rating_number cs_medium cs_primary_color">
                      2
                    </div>
                    <div className="cs_rating_container cs_review">
                      <div className="cs_rating_container cs_review">
                        <Rating ratingNumber={2} />
                      </div>
                    </div>
                    <div className="cs_progress_line" />
                    <div className="cs_progress_hint_value cs_primary_color">
                      0
                    </div>
                  </div>
                  <div className="cs_progress_bar">
                    <div className="cs_rating_number cs_medium cs_primary_color">
                      1
                    </div>
                    <div className="cs_rating_container cs_review">
                      <div className="cs_rating_container cs_review">
                        <Rating ratingNumber={1} />
                      </div>
                    </div>
                    <div className="cs_progress_line" />
                    <div className="cs_progress_hint_value cs_primary_color">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
