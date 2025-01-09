import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class LanguageService {
  // private currentLang: string = 'es';
  // private translations: any = {
  //   es: require('../../../locale/en.json'),
  // };

  // setLanguage(lang: string) {
  //   this.currentLang = lang;
  // }

  // getTranslation(key: string): string {
  //   return this.translations[this.currentLang][key] || key;
  // }

  // detectLanguage() {
  //   const browserLang = navigator.language || navigator.languages[0];
  //   this.currentLang = browserLang.startsWith('es') ? 'es' : 'en';
  // }
}
