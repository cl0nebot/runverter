import Ember from 'ember';
export default Ember.Component.extend({
  tagName: "input",
  classNameBindings: ["class"],
  attributeBindings: ['value', 'maxlength', 'type'],
  type: "tel", // inputs with the type "tel" have the advantage of only allowing numeric values without showing spin buttons as the "number" input does

  input(event) {
    this.set("value", event.target.value);
    return true;
  },

  keyDown(event) {
    switch(event.keyCode) {
    case 38:
        this.send('increaseValue');
        break;
    case 40:
        this.send('decreaseValue');
        break;
    }
    return true;
  },

  actions: {
    increaseValue() {
      this.set("value", parseInt(this.get("value"))+1);
    },

    decreaseValue() {
      this.set("value", parseInt(this.get("value"))-1);
    }
  }
});
