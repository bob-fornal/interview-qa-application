class Storage {
  ACTIVECATEGORY() {
    return 'ACTIVE-CATEGORY';
  }
  CATEGORYDATA() {
    let categoryData = {
      "Angular": {
        "name": "Front-End: Angular",
        "questions": [
          {
            "question": "What is Angular Material?",
            "rank": "easy",
            "answer": [
              "It is a UI component library. Angular Material helps in creating attractive, consistent, and fully functional web pages as well as web applications. It does so while following modern web design principles, including browser portability and graceful degradation."
            ]
          }, {
            "question": "What is ngOnInit()? How is it defined?",
            "rank": "easy",
            "answer": [
              "ngOnInit () is a lifecycle hook that is called after Angular has finished initializing all data-bound properties of a directive. It is defined as:",
              "",
              "Interface OnInit {",
              "&nbsp;&nbsp;&nbsp;&nbsp;ngOnInit(): void",
              "}"
            ]
          }, {
            "question": "What is SPA (Single Page Application)? Contrast SPA technology with traditional web technology?",
            "rank": "easy",
            "answer": [
              "In the SPA technology, only a single page, which is index.HTML, is maintained although the URL keeps on changing. Unlike the traditional web technology, SPA technology is faster and easier to develop as well.",
              "",
              "In the conventional web technology, as soon as a client requests a webpage, the server sends the resource. However, when again the client requests for another page, the server responds again with sending the requested resource. The problem with this technology is that it requires a lot of time."
            ]
          }, {
            "question": "What is the process called by which TypeScript code is converted into JavaScript code?",
            "rank": "easy",
            "answer": [
              "It is called Transpiling. Even though TypeScript is used for writing code in Angular applications, it gets internally transpiled into equivalent JavaScript."
            ]
          }, {
            "question": "Why prioritize TypeScript over JavaScript in Angular?",
            "rank": "easy",
            "answer": [
              "TypeScript is developed by Microsoft and it is a superset of JavaScript. The issue with JS is that it isn’t a true OOP language. As the JS code doesn’t follow the Prototype Pattern, the bigger the size of the code the messier it gets. Hence, it leads to difficulties in maintainability as well as reusability. To offset this, TypeScript follows a strict OOP approach."
            ]
          }, {
            "question": "What is REST?",
            "rank": "easy",
            "answer": [
              "REST stands for <span class='bold'>RE</span>presentational <span class='bold'>S</span>tate <span class='bold'>T</span>ransfer. REST is an API (Application Programming Interface) style that works on the HTTP request. In this, the requested URL pinpoints the data that needs to be processed. Further ahead, an HTTP method then identifies the specific operation that needs to be performed on that requested data. Thus, the APIs which follows this approach are known as RESTful APIs."
            ]
          }, {
            "question": "Define the ng-content Directive?",
            "rank": "average",
            "answer": [
              "Conventional HTML elements have some content between the tags.",
              "",
              "Consider an example where there is custom text between angular tags.",
              "",
              "However, doing so won’t work the way it worked for HTML elements. In order to make it work just like the HTML example mentioned above, we need to use the ng-content Directive."
            ]
          }, {
            "question": "What is AOT (Ahead-Of-Time) Compilation?",
            "rank": "average",
            "answer": [
              "Each Angular app gets compiled internally. The Angular compiler takes in the JS code, compiles it and then produces some JS code. This happens only once per occasion per user. It is known as AOT (Ahead-Of-Time) compilation."
            ]
          }, {
            "question": "Differentiate between Angular and AngularJS.",
            "rank": "average",
            "answer": [
              "UNORDERED",
              "<span class='bold'>Language</span>: JavaScript / TypeScript",
              "<span class='bold'>Expression Syntax</span>: ng-directives / (events) and [properties]",
              "<span class='bold'>Dependency Injection</span>: No / Yes",
              "<span class='bold'>Binding</span>: Two-Way by default / One-Way by default",
              "/UNORDERED"
            ]
          }, {
            "question": "How do Observables differ from Promises?",
            "rank": "hard",
            "answer": [
              "As soon as a promise is made, the execution takes place.",
              "",
              "However, this is not the case with observables because they are lazy. This means that nothing happens until a subscription is made.",
              "",
              "While promises handle a single event, observable is a stream that allows passing of more than one event. A callback is made for each event in an observable."
            ]
          }, {
            "question": "What is Data Binding? How many ways it can be done?",
            "rank": "hard",
            "answer": [
              "In order to connect application data with the DOM (Data Object Model), data binding is used. It happens between the template (HTML) and component (TypeScript). There are 3 ways to achieve data binding:",
              "",
              "LIST",
              "Event Binding – Enables the application to respond to user input in the target environment",
              "Property Binding – Enables interpolation of values computed from application data into the HTML",
              "Two-way Binding – Changes made in the application state gets automatically reflected in the view and vice-versa. The ngModel directive is used for achieving this type of data binding.",
              "/LIST"
            ]
          }, {
            "question": "What are the building blocks of Angular?",
            "rank": "hard",
            "answer": [
              "There are essentially 9 building blocks of an Angular application. These are:",
              "",
              "LIST",
              "<span class='bold'>Components</span> – A component controls one or more views.",
              "<span class='bold'>Data Binding</span> – The mechanism by which parts of a template coordinates with parts of a component is known as data binding. In order to let Angular know how to connect both sides (template and its component), the binding markup is added to the template HTML.",
              "<span class='bold'>Dependency Injection (DI)</span> – Angular makes use of DI to provide required dependencies to new components.",
              "<span class='bold'>Directives</span> – The templates used by Angular are dynamic in nature. Directives are responsible for instructing Angular about how to transform the DOM when rendering a template. Actually, components are directives with a template. Other types of directives are attribute and structural directives.",
              "<span class='bold'>Metadata</span> – In order to let Angular know how to process a class, metadata is attached to the class. For doing so decorators are used.",
              "<span class='bold'>Modules</span> – Also known as NgModules, a module is an organized block of code with a specific set of capabilities. It has a specific application domain or a workflow.",
              "<span class='bold'>Routing</span> – An Angular router is responsible for interpreting a browser URL as an instruction to navigate to a client-generated view. The router is bound to links on a page to tell Angular to navigate the application view when a user clicks on it.",
              "<span class='bold'>Services</span> – A very broad category, a service can be anything ranging from a value and function to a feature that is required by an Angular app. Technically, a service is a class with a well-defined purpose.",
              "<span class='bold'>Template</span> – Each component’s view is associated with its companion template. A template in Angular is a form of HTML tags that lets Angular know that how it is meant to render the component.",
              "/LIST"
            ]
          }
        ]
      }
    };
    return categoryData;
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
    return this.CATEGORYDATA();
  }
  setActiveCategory(key) {
    this.setItem(this.ACTIVECATEGORY(), key);
  }
  getActiveCategoryData() {
    const active = this.getItem(this.ACTIVECATEGORY());
    return this.CATEGORYDATA()[active];
  }
}