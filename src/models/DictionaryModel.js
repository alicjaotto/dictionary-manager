export class DictionaryModel {
  id;
  title;
  dict;

  constructor(data){
    this.id = data.id;
    this.title = data.title;
    this.dict = data.dict;
  }
}
