import MarketingWebsite from '../sun-mobility-apis.js';

const { getCoverage } = new MarketingWebsite();

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
    }" data-coverage="${formatCategoryName(category)}">${category}</li>`;
};

const renderCoverage = (coverages) => {
  markup = `<div class="featured-article-wrapper ${formatCategoryName(
    coverages[0].Category.display_name
  )}">
  <div>
    ${coverages
      .map(
        (coverage) =>
          `<div class="col-md-4 col-sm-6 col-xs-12">
        <div class="profile-card">
            <a href="${coverage.coverage_link}"
              target="_blank">
              <div class="profile-img">
                <img src="${coverage.banner_image}" />
              </div>
              <div class="profile-text">
                <div class="profile-icon">
                  <img src="${coverage.logo}" />
                </div>
                <p>
                  ${coverage.heading}
                </p>
                <a href="${coverage.coverage_link}"
                  target="_blank">Reads more</a>
              </div>
            </a>
          </div>
    </div>`
      )
      .join('')}
    </div>
  </div>`;
};

(async () => {
  const { data } = await getCoverage();

  const categoryList = Object.keys(data);

  let yearCat = [],
    stringCat = [];
  categoryList.forEach((category) => {
    if (!isNaN(category)) {
      yearCat.push(category);
    } else {
      stringCat.push(category);
    }
  });
  yearCat = yearCat.sort((a, b) => b - a);
  stringCat = stringCat.sort();
  [...stringCat, ...yearCat].forEach((category) =>
    renderCategoryList(category)
  );

  const initialCoverageData = data[`${categoryList[0]}`];

  renderCoverage(initialCoverageData);

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
    var datafounder = $(this).attr('data-coverage');
    $('.s-sidebar ul li').removeClass('active');
    const parent = document.querySelector('.s-card-wrapper');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    $(this).addClass('active');
    const currentCategory = categoryList.filter(
      (category) => formatCategoryName(category) === datafounder
    );

    renderCoverage(data[`${currentCategory[0]}`]);

    document
      .querySelector('.s-card-wrapper')
      .insertAdjacentHTML('beforeend', markup);
    $('.featured-article-wrapper').addClass('hide');
    $('.' + datafounder).removeClass('hide');
  });
})();
