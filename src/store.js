
export const selectItemById = function(id) {
    this.updateItem(id, { selected: true });
  
    if (this.selectedItem) {
      this.updateItem(this.selectedItem.id, { selected: false });
    }
  
    this.selectedItem = this.getItemById(id);
  };

export const updateItem = function(id, data, triggerListener = true) {
    const item = this.getItemById(id);
  
    Object.assign(item, data); // gasp, mutability
  
    if (window.APP_DEBUG === true) {
      console.info(`Updated`, item, `with data`, data);
    }
  
    if (triggerListener) this.triggerListener(id);
  };

export const listen = function(a ,b){
  debugger;
};
 