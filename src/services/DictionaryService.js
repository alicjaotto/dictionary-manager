import API from './api';
import {DictionaryModel} from '../models/DictionaryModel';

export class DictionaryService {

  static getDictionaries() {
    return API.get(`/dictionaries`)
      .then(response => {
        return response.data.map(item => new DictionaryModel(item));
      })
      .catch(error => {
        console.log('an error occured during resolving your promise');
      });
  }
}
