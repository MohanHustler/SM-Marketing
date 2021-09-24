import MarketingWebsite from '../sun-mobility-apis.js';

const { getImageGallery } = new MarketingWebsite();

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
    }" data-gallery="${formatCategoryName(category)}">${category}</li>`;
};

const renderImageGallery = (imageGallery) => {
  let launchHeading = [
    ...new Map(
      imageGallery.map((item) => [item['launch_at_with_year'], item])
    ).values()
  ].map((el) => el.launch_at_with_year);

  let isImageHeading = launchHeading.some(function (el) {
    return el !== null;
  });

  if (isImageHeading) {
    let launchImgaeGallery =
      launchHeading &&
      launchHeading.map(
        (launchTitle) =>
          imageGallery &&
          imageGallery.filter(
            (gallery) => gallery.launch_at_with_year === launchTitle
          )
      );

    markup = `<div class="wheeler-solution ${formatCategoryName(
      imageGallery[0].Category.display_name
    )}">
      ${launchImgaeGallery
        .map(
          (launchData) =>
            `<div class="row">
              <div class="event-head">
              ${
                launchData[0].launch_at_with_year
                  ? `<h2>${launchData[0].launch_at_with_year}</h2>`
                  : `<hr/>`
              }
                
              </div>
              ${launchData
                .map(
                  (gallery) =>
                    `<div class="col-md-4 col-sm-6 col-xs-12">
                <div class="gallery-card">
                  <div class="gallery-img">
                    <a href="${gallery.image}" class="swipebox"
                      title="${imageGallery[0].Category.display_name}">
                    <img src="${gallery.image}" />
                     </a>
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
    markup = `<div class="wheeler-solution ${formatCategoryName(
      imageGallery[0].Category.display_name
    )}">
      ${imageGallery
        .map(
          (gallery) =>
            `<div class="col-md-4 col-sm-6 col-xs-12">
        <div class="gallery-card">
          <div class="gallery-img">
            <a href="${gallery.image}" class="swipebox"
              title="${imageGallery[0].Category.display_name}">
              <img src="${gallery.image}" />
            </a>
          </div>
        </div>
      </div>`
        )
        .join('')}    
    </div>`;
  }
};

(async () => {
  const { data } = await getImageGallery();

  const categoryList = Object.keys(data);

  categoryList.sort().forEach((category) => renderCategoryList(category));

  const initialImageData = data[`${categoryList[0]}`];

  renderImageGallery(initialImageData);

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
    var datagallery = $(this).attr('data-gallery');
    $('.s-sidebar ul li').removeClass('active');
    const parent = document.querySelector('.s-card-wrapper');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    $(this).addClass('active');

    const currentCategory = categoryList.filter(
      (category) => formatCategoryName(category) === datagallery
    );

    renderImageGallery(data[`${currentCategory[0]}`]);

    document
      .querySelector('.s-card-wrapper')
      .insertAdjacentHTML('beforeend', markup);
    $('.wheeler-solution').addClass('hide');
    $('.' + datagallery).removeClass('hide');
  });
})();
