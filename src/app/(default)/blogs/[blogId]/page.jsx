'use client';
import { Icon } from '@iconify/react';
import PageHeader from '../../../ui/PageHeader/PageHeader';
import Section from '../../../ui/Section/Section';
import CategoryWidget from '../../../ui/Widget/CategoryWidget';
import CommentsWidget from '../../../ui/Widget/CommentsWidget';
import NewsletterWidget from '../../../ui/Widget/NewsletterWidget';
import PostAuthorWidget from '../../../ui/Widget/PostAuthorWidget';
import PostWidget from '../../../ui/Widget/PostWidget';
import SearchWidget from '../../../ui/Widget/SearchWidget';
import SocialWidget from '../../../ui/Widget/SocialWidget';
import TagWidget from '../../../ui/Widget/TagWidget';
import Image from 'next/image';
import imgUrl from '../../../../../public/images/post_details_1.jpeg';
import imgUrl2 from '../../../../../public/images/post_details_2.jpeg';
import imgUrl3 from '../../../../../public/images/post_details_3.jpeg';

export default function BlogDetails() {
  return (
    <>
      <PageHeader
        title="Single Blog"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/destination_header_bg.jpeg"
      />
      <Section
        spacingTopLg={140}
        spacingTopMd={80}
        spacingBottomLg={140}
        spacingBottomMd={80}
      >
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-8">
              <article className="cs_post_details">
                <div className="position-relative">
                  <Image src={imgUrl} alt="Post Thumb" placeholder="blur" />
                  <span className="cs_post_label">Travel/Tour</span>
                </div>
                <ul className="cs_post_meta cs_mp0 cs_primary_color">
                  <li>
                    <i className="cs_accent_color">
                      <Icon icon="fa6-solid:calendar-days" />
                    </i>
                    Auguest 09,2024
                  </li>
                  <li>
                    <i className="cs_accent_color">
                      <Icon icon="fa:user" />
                    </i>
                    Masum Billah
                  </li>
                </ul>
                <h2>The complete guide for travelers in London</h2>
                <p>
                  The foreign and commonwealth office draws up an extensive list
                  of countries that should not be travelled quite regularly and
                  it is from that our, and other global travel insurance
                  providers, underwriters decide which countries travel
                  insurance should be provided for. We look at the government
                  travel advice and decide from that whether or not we can
                  provide insurance to travellers.
                </p>
                <p>
                  Although global travel insurance does, by its nature, cover
                  the majority of the world, the current climate ensures that
                  there are some places where the likelihood of incident means
                  that UK travel insurance providers are unable to offer
                  protection.
                </p>
                <p>
                  Thankfully, the list is clear of the majority of popular
                  holiday destinations, and you are unlikely to have your big
                  holiday plans affected. The most likely group to have their
                  travel plans altered by the foreign offices travel advice are
                  business travellers.
                </p>
                <p>
                  The foreign offices travel advice is not to travel to the
                  following countries, even if it means losing business the risk
                  from the warzones listed below is just too great to make the
                  reward worth:
                </p>
                <blockquote>
                  “Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut
                  audiamre iracundia vim. An sumo diam ea. Cu omnis.”
                </blockquote>
                <p>
                  eres our top 10 countries to avoid travelling to, and the
                  reasons for the high risk factor! The risk is far from
                  conclusive (the foreign offices travel advice lists many more
                  countries), but to me, these are the ones that all travellers
                  should avoid like the plague:
                </p>
                <div className="row">
                  <div className="col-sm-5">
                    <Image
                      src={imgUrl2}
                      alt="Destination Image"
                      placeholder="blur"
                    />
                  </div>
                  <div className="col-sm-7">
                    <Image
                      src={imgUrl3}
                      alt="Destination Image"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <p>
                  Ai elit omnes lmpedit ius, tel et hinc agam fabulas. Ut audiam
                  invenire iracundia vim. An eam dico similique ut sint posse
                  sit, eum sumo diam ea. Liber consectetuer in mei, sea in
                  imperdiet assueverit contentions cibo blandit tacimates. Iusto
                  iudicabit similique idefinitionem eos an.Sit delicata
                  persequeris ex, in sea rebum deseruisse appella ntur. Lorem
                  ipsum dolor si vix aperiri consequat an.
                </p>
              </article>
              <SocialWidget />
              <PostAuthorWidget />
              <hr />
              <CommentsWidget />
            </div>
            <aside className="col-lg-4">
              <div className="cs_sidebar cs_right_sidebar">
                <SearchWidget />
                <CategoryWidget />
                <PostWidget />
                <TagWidget />
                <NewsletterWidget />
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
