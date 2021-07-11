export interface IUser {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  provider?: string;
  avatar?: string;
  installationId?: string;
  learningLanguage?: string;
  learningCount?: number;
  roles?: string[];
  accessToken?: string;
  jwt?: string | null;
}

export interface ILoading {
  skip: boolean;
  language: boolean;
  count: boolean;
}

export interface ILanguage {
  id: string;
  name: string;
}
