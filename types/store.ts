import { ILanguage, IUser } from './';
import { ILoading } from './';

export interface IAuthStore {
  user: IUser;
  isLoading: ILoading;
  languages: ILanguage[];
  choosenLanguage: ILanguage;
  loginShadow(id: string): void;
  getLanguages(): void;
  setLanguage(userId: string, languageId: string): void;
  setChoosenLanguage(language: ILanguage): void;
  setCount(userId: string, countId: number): void;
}
