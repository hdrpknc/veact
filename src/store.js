
export function selectItemById (id) {
    this.updateItem(id, { selected: true });
  
    if (this.selectedItem) {
      this.updateItem(this.selectedItem.id, { selected: false });
    }
  
    this.selectedItem = this.getItemById(id);
  };

export function updateItem (id, data, triggerListener = true) {
    const item = this.getItemById(id);
  
    Object.assign(item, data); // gasp, mutability
  
    if (window.APP_DEBUG === true) {
      console.info(`Updated`, item, `with data`, data);
    }
  
    if (triggerListener) this.triggerListener(id);
  };

export function listen (id ,callback){
  this.data.push({id : id, callback : callback});
};

export const data = [];

export function getItemById (id){
  return this.data[0];
};

export function triggerListener (id){
  this.data[0].callback(this.getItemById(id));
};
 
export const selectedItem = {};