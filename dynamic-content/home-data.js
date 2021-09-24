import MarketingWebsite from '../sun-mobility-apis.js';

const { getHome } = new MarketingWebsite();

let markup = '';
const renderNews = (news) => {
  markup =
    markup +
    `<div class="news-section-card">
  <div class="news-section-card-img">
    <a href="${news.news_link}"
      target="_blank">
      <div class="news-section-img">
        <img src="${news.banner_image}" />
      </div>
    </a>
  </div>
  <div class="news-section-card-text">
    <a href="${news.news_link}"
      target="_blank">
      <h2>
        ${news.heading}
      </h2>
      <p>
      ${news.description}
      </p>
      <span>
        <img src="${news.partner_logo_image}" />
      </span>
    </a>
  </div>
</div>`;
  return markup;
};

(async () => {
  const {
    data: { network_list, news_list }
  } = await getHome();

  document.querySelector('#network-title').innerHTML = network_list[0].title;

  news_list.forEach((news) => renderNews(news));

  document
    .querySelector('.news-slider')
    .insertAdjacentHTML('beforeend', markup);

  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow:
      '<div class="slick-right"><img src="assets/images/home/right.svg"></div>',
    prevArrow:
      '<div class="slick-left"><img src="assets/images/home/left.svg"></div>'
  });
})();
