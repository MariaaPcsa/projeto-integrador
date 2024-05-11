export class Post {
    id: number | undefined;
    creatorId: number | undefined;
    title: string | undefined;
    text: string | undefined;
    creatorName: string | undefined;
    creationDate: string | undefined; // Pode ser do tipo Date ou string dependendo do formato em que deseja trabalhar
  
    constructor(
      id?: number,
      creatorId?: number,
      title?: string,
      text?: string,
      creatorName?: string,
      creationDate?: string // Pode ser do tipo Date ou string dependendo do formato em que deseja trabalhar
    ) {
      this.id = id;
      this.creatorId = creatorId;
      this.title = title;
      this.text = text;
      this.creatorName = creatorName;
      this.creationDate = creationDate;
    }
  }