class Storage {
  
  constructor() {
    this.categoryData = null;
    this.orderData = null;
  }

  ACTIVECATEGORY() {
    return 'ACTIVE-CATEGORY';
  }
  async CATEGORYDATA() {
    if (this.categoryData !== null) return this.categoryData;

    this.categoryData = await fetch('/templates/_category-data.json')
      .then(response => response.json());
    return this.categoryData;
  }
  async ORDERDATA() {
    if (this.orderData !== null) return this.orderData;

    const outerData = await this.CATEGORYDATA();
    const data = {};
    for (let major in outerData) {
      if (outerData.hasOwnProperty(major)) {
        let categories = [];
        const innerData = outerData[major].minor;
        for (let minor in innerData) {
          categories.push({ name: innerData[minor].name, key: minor });
        }
        data[major] = categories.sort(this.sortCompareCategory.bind(this));
      }
    }

    this.orderData = data;
    return this.orderData;
  }

  sortCompareCategory(a, b) {
    return this.sortCompare(a.name, b.name);
  }

  sortCompare(a, b) {
    const genreA = a.toUpperCase();
    const genreB = b.toUpperCase();
  
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }

    return comparison;
  }

  // Simple Item Patterns
  getItem(item) {
    const result = localStorage.getItem(item);
    return (result === null) ? null : JSON.parse(result);
  }
  setItem(item, value) {
    return localStorage.setItem(item, JSON.stringify(value));
  }
  removeItem(item) {
    return localStorage.removeItem(item);
  }

  async getAllCategories() {
    const categoryData = await this.CATEGORYDATA();
    const orderData = await this.ORDERDATA();
    return { order: orderData, data: categoryData };
  }
  setActiveCategory(major, minor) {
    this.setItem(this.ACTIVECATEGORY(), { major, minor });
  }
  getActiveCategory() {
    const active = this.getItem(this.ACTIVECATEGORY());
    return active;
  }
  async getActiveCategoryData() {
    const categoryData = await this.CATEGORYDATA();
    const active = this.getItem(this.ACTIVECATEGORY());
    return categoryData[active.major].minor[active.minor];
  }
}