'use client';
import PageHeader from '@/app/ui/PageHeader/PageHeader';
import PostStyle5 from '@/app/ui/Post/PostStyle5';
import Section from '@/app/ui/Section/Section';
import CategoryWidget from '@/app/ui/Widget/CategoryWidget';
import NewsletterWidget from '@/app/ui/Widget/NewsletterWidget';
import PagenationWidget from '@/app/ui/Widget/PagenationWidget';
import PostWidget from '@/app/ui/Widget/PostWidget';
import SearchWidget from '@/app/ui/Widget/SearchWidget';
import TagWidget from '@/app/ui/Widget/TagWidget';

const postData = [
  {
    imgUrl: '/images/post_9.jpeg',
    date: 'Feb 03, 2024',
    title: 'EazyPNR is the only Theme you will ever need',
    desc: 'Globally coordinate user friendly interfaces through 24/365 niche markets. Seamlessly supply accurate human capital with corporate e-markets. Efficiently architect enterprise-wide platforms after error-free process are Completely envisioneer market-driven e-markets through',
    postUrl: '/blogs/blog-details',
  },
  {
    imgUrl: '/images/post_10.jpeg',
    date: 'Feb 02, 2024',
    title: 'How To Get Strangers To Take Epic Travel',
    desc: 'Globally coordinate user friendly interfaces through 24/365 niche markets. Seamlessly supply accurate human capital with corporate e-markets. Efficiently architect enterprise-wide platforms after error-free process are Completely envisioneer market-driven e-markets through',
    postUrl: '/blogs/blog-details',
  },
  {
    imgUrl: '/images/post_11.jpeg',
    date: 'Feb 01, 2024',
    title: 'The Top 10 Destinations You Should Visit In',
    desc: 'Globally coordinate user friendly interfaces through 24/365 niche markets. Seamlessly supply accurate human capital with corporate e-markets. Efficiently architect enterprise-wide platforms after error-free process are Completely envisioneer market-driven e-markets through',
    postUrl: '/blogs/blog-details',
  },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Latest Blog"
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
              {postData?.map((elements, index) => (
                <PostStyle5 data={elements} key={index} />
              ))}
              <PagenationWidget />
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
