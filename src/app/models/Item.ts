export interface Item {
  id?:string;
  Title?:string;
  Subtitle?:string;
  datePublish?:Date;
  Content?: Array<string>;
  viewState:boolean;
}
