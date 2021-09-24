import MarketingWebsite from '../sun-mobility-apis.js';

const { getVideos } = new MarketingWebsite();

let markup = '';
let categoryMarkup = '';

const formatCategoryName = (str) => {
  return str
    .replace(/[^\w\s]/gi, '')
    .toLowerCase()
    .replace(/ /g, '-');
};

const renderCategoryList = (category) => {
  categoryMarkup =
    categoryMarkup +
    `<li class="${
      !categoryMarkup ? 'active' : ''
    }" data-video="${formatCategoryName(category)}">${category}</li>`;
};

const renderVideos = (videos) => {
  markup = `<div class="video-card-wrapper ${formatCategoryName(
    videos[0].Category.display_name
  )}">
  <div>
    ${videos
      .map(
        (video) =>
          `<div class="col-md-4 col-sm-6 col-xs-12">
        <div class="video-dummy" data-toggle="modal" data-target="#corporateModal">
        <div class="profile-card">
          <div class="profile-img">
            <img src="${video.banner}" />
            <div class="watch-video-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 42.7 42.7">
                <defs>
                  <style>
                    .a {
                      fill: #fff;
                    }
                  </style>
                </defs>
                <path class="a"
                  d="M21.741-50A21.369,21.369,0,0,0,.391-28.65,21.369,21.369,0,0,0,21.741-7.3a21.369,21.369,0,0,0,21.35-21.35A21.369,21.369,0,0,0,21.741-50Zm6.877,22.429-10.068,6.7a1.3,1.3,0,0,1-2.023-1.079V-35.347a1.3,1.3,0,0,1,2.023-1.079l10.068,6.7A1.3,1.3,0,0,1,28.618-27.571Z"
                  transform="translate(-0.391 50)" />
              </svg>
            </div>
          </div>
          <div class="profile-text video-text">
            <p>
              ${video.heading}
            </p>
            <label>by ${video.author}</label>
            
            <span>${video.views} views • ${
            new Date(video.release_date).toDateString().split(' ')[1]
          } ${new Date(video.release_date).toDateString().split(' ')[2]}, ${
            new Date(video.release_date).toDateString().split(' ')[3]
          }</span>
          </div>
        </div>
      </div>
    </div>`
      )
      .join('')}
    </div>
  </div>`;
};

(async () => {
  const { data } = await getVideos();

  const categoryList = Object.keys(data);

  categoryList.sort().forEach((category) => renderCategoryList(category));

  const initialVideosData = data[`${categoryList[0]}`];

  renderVideos(initialVideosData);

  document
    .querySelector('.category-list')
    .insertAdjacentHTML('beforeend', categoryMarkup);

  document
    .querySelector('.dropdown-menu')
    .insertAdjacentHTML('beforeend', categoryMarkup);

  document
    .querySelector('.s-card-wrapper')
    .insertAdjacentHTML('beforeend', markup);

  $('.custom-dropdown-filter li')
    .parents('.btn-group')
    .find('.dropdown-toggle label')
    .html(categoryList[0]);

  $('.custom-dropdown-filter li').click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle label').html(selText);
  });

  $('.s-sidebar ul li, .custom-dropdown-filter li').click(function () {
    var datavideo = $(this).attr('data-video');
    $('.s-sidebar ul li').removeClass('active');
    const parent = document.querySelector('.s-card-wrapper');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    $(this).addClass('active');
    const currentCategory = categoryList.filter(
      (category) => formatCategoryName(category) === datavideo
    );

    renderVideos(data[`${currentCategory[0]}`]);

    document
      .querySelector('.s-card-wrapper')
      .insertAdjacentHTML('beforeend', markup);

    $('.video-card-wrapper').addClass('hide');
    $('.' + datavideo).removeClass('hide');
  });
})();
