export interface IPrivacyPolicy {
  title: string;
  description: string;
}

export interface ILgpd {
  privacyPolicy: IPrivacyPolicy[];
}
