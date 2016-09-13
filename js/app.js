require("../css/style.css");
require("../css/app.css");

var Vue = require("vue");
var VueRouter = require("vue-router");

// *** data setup
var vm = Vue.extend({  // if parent page has data, write here
  data: function() {
    return {
      text: "parent data"
    }
  }
});
var Test1 = Vue.extend({  // child page1
  template: require("../partials/test1.html"),
  data: function(){  // has data
    return {
      test_text1: "hello Vue-router!",
      text:  "cannotOverrideParentData"
    }
  }
});
var Test2 = Vue.extend({  // child page2
  template: require("../partials/test2.html")
});
// ***

// *** routing
Vue.use(VueRouter);
var router = new VueRouter();
router.map({
  "/test1": {
    component: Test1
  },
  "/test2": {
    component: Test2
  }
});
// ***

// *** init routine ***
router.beforeEach(function(transition){
  if (transition.to.path === "/test1") {
    console.log("pass test1");
  } else {
    console.log("pass test2");
  }
  transition.next();
});
// ***

router.start(vm, "#app");  // App start!!

