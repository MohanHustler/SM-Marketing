export default class MarketingWebsite {
  constructor() {
    this.baseUrl = 'https://sm-cms-api-staging.azurewebsites.net/v1/sm';
  }
  getRequest = async (params) => {
    try {
      let response = await fetch(params.url);
      response = await response.json();
      return response;
    } catch (error) {
      return { error };
    }
  };

  getHome = async (args) => {
    const url = `${this.baseUrl}/home`;
    const { data, headers, error, status } = await this.getRequest({
      url
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status
      };
    }

    return {
      data,
      error: error || data,
      status
    };
  };

  getAbout = async () => {
    const url = `${this.baseUrl}/about`;
    const { data, headers, error, status } = await this.getRequest({
      url
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status
      };
    }

    return {
      data,
      error: error || data,
      status
    };
  };

  getCoverage = async () => {
    const url = `${this.baseUrl}/media/coverages`;
    const { data, headers, error, status } = await this.getRequest({
      url
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status
      };
    }

    return {
      data,
      error: error || data,
      status
    };
  };

  getImageGallery = async () => {
    const url = `${this.baseUrl}/media/image_galleries`;
    const { data, headers, error, status } = await this.getRequest({
      url
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status
      };
    }

    return {
      data,
      error: error || data,
      status
    };
  };

  getVideos = async () => {
    const url = `${this.baseUrl}/media/videos`;
    const { data, headers, error, status } = await this.getRequest({
      url
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status
      };
    }

    return {
      data,
      error: error || data,
      status
    };
  };

  getMediaKit = async () => {
    const url = `${this.baseUrl}/media/mediakits`;
    const { data, headers, error, status } = await this.getRequest({
      url
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status
      };
    }

    return {
      data,
      error: error || data,
      status
    };
  };
}
