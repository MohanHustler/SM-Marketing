import MarketingWebsite from '../sun-mobility-apis.js';

const { getAbout } = new MarketingWebsite();

let markup = '';
let listMarkup = '';
let partnerMarkup = '';
let partnerListMarkup = '';
let responsiveMilestone = '';

const renderMilestone = (milestone) => {
  markup =
    markup +
    `<div class="milestones-img ${markup && 'hide'} milestone-${milestone.id}">
    <div class="image">
      <img src="${milestone.banner_image}">
      <p>${milestone.image_caption ? milestone.image_caption : ''}</p>
    </div>
    <div class="text">
      <p>
        ${milestone.description}
      </p>
    </div>
  </div>`;

  responsiveMilestone =
    responsiveMilestone +
    `<div class="milestones-img milestone-${milestone.id}">
  <div class="image">
    <img src="${milestone.banner_image}">
    <p>${milestone.image_caption ? milestone.image_caption : ''}</p>
  </div>
  <div class="text">
    <p>
    ${milestone.description}
    </p>
  </div>
  <div class="m-year">
    <label>${milestone.month_year}</label>
  </div>
</div>`;

  listMarkup =
    listMarkup +
    `<li class="${!listMarkup && 'active'}" data-year="milestone-${
      milestone.id
    }">
<span>
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Oval Copy</title>
    <g id="About" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Milestone-v3-Copy-2" transform="translate(-313.000000, -754.000000)" fill="#FFFFFF"
        stroke="#4FA743">
        <g id="Group-5" transform="translate(1.000000, 754.000000)">
          <g id="Group" transform="translate(150.000000, 0.000000)">
            <g id="Group-2" transform="translate(162.000000, 0.000000)">
              <circle id="Oval-Copy" cx="4" cy="4" r="3.5"></circle>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg></span>
<label>${milestone.month_year}</label>
</li>`;
};

const renderPartnership = (partnership) => {
  let newsData = partnership.PartnerNews.sort((a, b) => b.id - a.id);
  partnerMarkup =
    partnerMarkup +
    `<div class="p-content ${partnerMarkup && 'hide'} partner-${
      partnership.id
    }">
    <p>
      ${partnership.description}
    </p>
    <div class="partnerships-news-section partnerships-slider-wrapper row">
    ${newsData
      .map(
        (news) =>
          `<div class="col-md-4">
        <div class="partnership-card">
          <a href="${news.news_link}" target="_blank">
            <div class="partnership-card-overlay"></div>
            <div class="partnership-card-image">
              <img src="${news.banner_image}" />
            </div>
            <div class="partnership-card-text">
              <p>${news.heading}</p>
              <span>${news.news_brand_link}</span>
            </div>
          </a>
        </div>
      </div>`
      )
      .join('')}      
    </div>
  </div>`;

  partnerListMarkup =
    partnerListMarkup +
    `<li class="${
      !partnerListMarkup ? 'active' : ''
    }" data-partnership="partner-${partnership.id}">
    <img src="${partnership.partner_logo}" />
    </li>`;
};

(async () => {
  const {
    data: { partnership_list, milestone_list }
  } = await getAbout();

  milestone_list.forEach((milestone) => renderMilestone(milestone));

  partnership_list.forEach((partnership) => renderPartnership(partnership));

  document
    .querySelector('.milestones-img-section')
    .insertAdjacentHTML('beforeend', markup);

  document
    .querySelector('.milestone-list .list-years')
    .insertAdjacentHTML('beforeend', listMarkup);

  document
    .querySelector('.partnership-content')
    .insertAdjacentHTML('beforeend', partnerMarkup);

  document
    .querySelector('.partnerships-list .partnership-slider')
    .insertAdjacentHTML('beforeend', partnerListMarkup);

  if ($(window).width() < 767) {
    document
      .querySelector('.mobile-milestone')
      .insertAdjacentHTML('beforeend', responsiveMilestone);

    // $('.list-years').slick({
    //   infinite: false,
    //   arrows: true,
    //   dots: false,
    //   autoplay: false,
    //   speed: 800,
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   nextArrow:
    //     '<div class="slick-right"><img src="assets/images/about/right.svg"></div>',
    //   prevArrow:
    //     '<div class="slick-left"><img src="assets/images/about/left.svg"></div>'
    // });

    $('.mobile-milestone').slick({
      infinite: false,
      arrows: true,
      dots: false,
      autoplay: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:
        '<div class="slick-right"><img src="assets/images/home/right.svg"></div>',
      prevArrow:
        '<div class="slick-left"><img src="assets/images/home/left.svg"></div>'
    });
  }

  $('.milestone-list ul li').click(function () {
    var yeartabs = $(this).attr('data-year');
    $('.milestone-list ul li').removeClass('active');
    $(this).addClass('active');
    $('.milestones-img-section .milestones-img').addClass('hide');
    $('.' + yeartabs).removeClass('hide');
  });

  // List Slider
  $('.partnership-slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          }
        },

      ],
    nextArrow: '<div class="slick-right"><img src="assets/images/about/right.svg"></div>',
    prevArrow: '<div class="slick-left"><img src="assets/images/about/left.svg"></div>',

  });

  $('.list-years').slick({
    infinite: false,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

      ],
    nextArrow:
      '<div class="slick-right"><img src="assets/images/about/right.svg"></div>',
    prevArrow:
      '<div class="slick-left"><img src="assets/images/about/left.svg"></div>',
  });

  // partnership news slide
  $('.partnerships-list ul li').click(function () {
    var partnershiptabs = $(this).attr('data-partnership');
    $('.partnerships-list ul li').removeClass('active');
    $(this).addClass('active');
    $('.partnership-content .p-content').addClass('hide');
    $('.' + partnershiptabs).removeClass('hide');
  });
})();
