class Storage {
  ACTIVECATEGORY() {
    return 'ACTIVE-CATEGORY';
  }
  CATEGORYDATA() {
    let categoryData = {
      frontend: {
        name: "Front-End",
        minor: {
          angular: { name: "Angular", questions: 9 },
          css: { name: "CSS", questions: 8 },
          javascript: { name: "JavaScript", questions: 5 }    
        }
      },
      programming: {
        name: "Programming",
        minor: {
          general: { name: "General", questions: 6 }
        }
      }
    };
    return categoryData;
  }
  ORDERDATA() {
    const outerData = this.CATEGORYDATA();
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
    return data;
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
  setActiveCategory(major, minor) {
    this.setItem(this.ACTIVECATEGORY(), { major, minor });
  }
  getActiveCategory() {
    const active = this.getItem(this.ACTIVECATEGORY());
    return active;
  }
  getActiveCategoryData() {
    const active = this.getItem(this.ACTIVECATEGORY());
    return this.CATEGORYDATA()[active.major].minor[active.minor];
  }
}