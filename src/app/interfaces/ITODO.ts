export interface ITODO {
  //Id is not actually needed in this application in this current state, it simply remains as an option for when an actual database is connected
  Id: number;
  Label: string;
  TODO: string;
  State: boolean;
  DueDate: Date;
}
