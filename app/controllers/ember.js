export default Ember.Controller.extend({
  actions:{
    goToNav(pTitle,title){
      this.transitionToRoute("ember."+pTitle+".show",title);
    }
  }
})