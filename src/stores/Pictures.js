import { observable, computed, action } from 'mobx';
import * as api from '../api';

export default class Pictures {
  @observable collection = [];
  @computed get collectionSize() {
    return this.collection.length;
  }
  @observable isLoading = false;
  @observable isBannedFetch = false;
  navData = {
    batch: 1,
  }

  constructor(app) {
    this.app = app;
  }

  @action replaceCollection(arr = []) {
    this.collection = arr;
  }

  @action extendCollection(arr = []) {
    const newCol = [...this.collection, ...arr];
    this.collection = [...this.collection, ...arr];
  }

  @action setLoading() {
    this.isLoading = true;
  }

  @action unsetLoading() {
    this.isLoading = false;
  }

  @action checkForBan(arr) {
    console.log('%c this.collectionSize', 'color: #0087d4', this.collectionSize);
    if (this.collectionSize >= 5000) {
      this.banFetch();
    }
  }

  @action getPictures = () => {
    this.setLoading()
    api.getPicturesRequest(this.navData.batch)
    .then(res => this.processSuccess(res.data))
    .catch(err => {
      this.isBannedFetch = true;
    });
  }

  tryGetPictures = () => {
    console.log('%c this.isBannedFetch', 'color: #0087d4', this.isBannedFetch);
    console.log('%c this.isLoading', 'color: #0087d4', this.isLoading);
    if (this.isLoading) return;
    if (this.isBannedFetch) return;
    this.getPictures();
  }

  @action processSuccess(arr) {
    if (this.navData.batch === 1) {
      this.replaceCollection(arr);
    }
    else {
      this.extendCollection(arr);
    }

    this.navData.batch += 1;
    this.isLoading = false;

    this.checkForBan();
  }
}
