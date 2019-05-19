class Storage {
  ACTIVECATEGORY() {
    return 'ACTIVE-CATEGORY';
  }
  CATEGORYDATA() {
    let categoryData = {
      angular: { name: "Front-End: Angular", questions: 9 },
      css: { name: "Front-End: CSS", questions: 8 },
      general: { name: "Front-End: General", questions: 6 },
      javascript: { name: "Front-End: JavaScript", questions: 5 }
    };
    return categoryData;
  }
  ORDERDATA() {
    const data = this.CATEGORYDATA();
    let categories = [];
    for (let category in data) {
      if (data.hasOwnProperty(category)) {
        categories.push({ name: data[category].name, key: category });
      }
    }
    categories = categories.sort(this.sortCompareCategory.bind(this));
    return categories;
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

  getAllCategories() {
    return { order: this.ORDERDATA(), data: this.CATEGORYDATA() };
  }
  setActiveCategory(key) {
    this.setItem(this.ACTIVECATEGORY(), key);
  }
  getActiveCategory() {
    const active = this.getItem(this.ACTIVECATEGORY());
    return active;
  }
  getActiveCategoryData() {
    const active = this.getItem(this.ACTIVECATEGORY());
    return this.CATEGORYDATA()[active];
  }
}