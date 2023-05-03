import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends {id?: number}>{
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T){
    this.bindModel();
  }
  
  abstract template(): string;

  regionsMap(): {[key:string]: string}{
    return {};
  }

  eventsMap(): {[key: string]: () => void}{
    return {};
  }

  bindModel(){
    this.model.on('change', () =>{
      this.render();
    });
  }

  //binding the events
  bindEvents(fragment: DocumentFragment):void{
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      //handler
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void{
    const regionMap = this.regionsMap();

    for (const key in regionMap) {
        const selector = regionMap[key];
        const element = fragment.querySelectorAll(selector);

      if (element) {
        //error here idk what's wrong yet
        //this.regions[key] = element;
      }
    }
  }

  onRender():void{
    
  }

  render(): void{
    //remove the previous HTML
    this.parent.innerHTML = '';

    //changing the string into HTML code
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    //Bind a event
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    //Nesting our views
    this.onRender();

    //putting the html as child to the parent
    this.parent.append(templateElement.content);
  }
}