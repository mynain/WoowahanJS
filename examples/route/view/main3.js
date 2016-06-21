import Woowahan from '../../../';
import Template from './main3.hbs';

export default Woowahan.View.create('MainView1', {
  initialize() {
    this.super();
    this.render();
  },
  
  render() {
    this.$el.html(Template());
    
    return this;
  }
});