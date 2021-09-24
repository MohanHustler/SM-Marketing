import MarketingWebsite from '../sun-mobility-apis.js';

const { getMediaKit } = new MarketingWebsite();

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
    }" data-media="${formatCategoryName(category)}">${category}</li>`;
};

const renderMediaKit = (mediaKit) => {
  let mediaKitHeading = [
    ...new Map(
      mediaKit.map((item) => [item['under_section_by'], item])
    ).values()
  ].map((el) => el.under_section_by);

  let mediaArr =
    mediaKitHeading &&
    mediaKitHeading.map(
      (mediaTitle) =>
        mediaKit &&
        mediaKit.filter((gallery) => gallery.under_section_by === mediaTitle)
    );

  let mediaName = formatCategoryName(mediaKit[0].Category.display_name);

  if (mediaArr.length > 1) {
    markup = `<div class="s-card-data ${mediaName}">
      ${mediaArr
        .map(
          (mediaKit) =>
            `<div class="row">
              <div class="event-head">
                <h2>${
                  mediaKit[0].under_section_by
                    ? `<h2>${mediaKit[0].under_section_by}</h2>`
                    : `<hr/>`
                }</h2>
              </div>
              ${mediaKit
                .map(
                  (media) =>
                    `<div class="col-md-4 col-sm-6 col-xs-12">
                <div class="gallery-card">
                  <div class="gallery-img">
                    <img src="${media.banner_image}" />
                  </div>                                
                  <div class="gallery-wrapper">
                    <div class="gallery-text">
                      <h2>${media.heading}</h2>
                      <label>${media.downloadable_type}</label>              
                  </div>
                  <div class="gallery-download-icon">
                      <a href="${media.downloadable_file}" download>
                        <img src="assets/images/image-gallery/download.svg" />
                      </a>
                  </div>
                </div>
                </div>                               
              </div>`
                )
                .join('')}    
            </div>`
        )
        .join('')}
    </div>`;
  } else {
    markup = `<div class="s-card-data ${
      mediaName === 'awards-and-accolades'
        ? 'awards-and-accolades award-media'
        : mediaName
    }">
      ${mediaKit
        .map(
          (media) =>
            `<div class="col-md-4 col-sm-6 col-xs-12">
            ${
              mediaName === 'awards-and-accolades'
                ? `<a href="${media.media_link}" target="_blank">
                    <div class="gallery-card">
                      <div class="gallery-img">
                        <img src="${media.banner_image}" />
                      </div>  
                      <div class="gallery-wrapper">
                      <div class="gallery-text awards">
                      <h2>${media.heading}</h2>
                      <label>${media.description}</label>
                    </div>
                      </div>
                    </div>            
                  </a>`
                : `<div class="gallery-card">
                    <div class="gallery-img">
                      <img src="${media.banner_image}" />
                    </div>                                
                    <div class="gallery-wrapper">
                      <div class="gallery-text">
                        <h2>${media.heading}</h2>
                        <label>${media.downloadable_type}</label>              
                      </div>
                      <div class="gallery-download-icon">
                        <a href="${media.downloadable_file}" download>
                          <img src="assets/images/image-gallery/download.svg" />
                        </a>
                      </div>
                    </div>
                  </div>`
            }              
              </div>`
        )
        .join('')}
    </div>`;
  }
};

(async () => {
  const { data } = await getMediaKit();

  const categoryList = Object.keys(data);

  categoryList.sort().forEach((category) => renderCategoryList(category));

  const initialMediaKitData = data[`${categoryList[0]}`];

  renderMediaKit(initialMediaKitData);

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

  $('.s-sidebar ul li,  .custom-dropdown-filter li').click(function () {
    var datamedia = $(this).attr('data-media');
    $('.s-sidebar ul li').removeClass('active');
    const parent = document.querySelector('.s-card-wrapper');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    $(this).addClass('active');
    const currentCategory = categoryList.filter(
      (category) => formatCategoryName(category) === datamedia
    );

    renderMediaKit(data[`${currentCategory[0]}`]);

    document
      .querySelector('.s-card-wrapper')
      .insertAdjacentHTML('beforeend', markup);
    $('.s-card-data').addClass('hide');
    $('.' + datamedia).removeClass('hide');
  });
})();
