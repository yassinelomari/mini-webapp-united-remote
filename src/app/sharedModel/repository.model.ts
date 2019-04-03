export class Repository {
  constructor(private name: string, private description, private nbrStars: number,
              private nbrIssues: number, private userName: string, private avatar: string, private submittedDate: Date) {

  }

  getSubmittedDate(): Date {
    return this.submittedDate;
  }

  setSubmittedDate(value: Date) {
    this.submittedDate = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getDescription() {
    return this.description;
  }

  setDescription(value) {
    this.description = value;
  }

  getNbrStars(): number {
    return this.nbrStars;
  }

  setNbrStars(value: number) {
    this.nbrStars = value;
  }

  getNbrIssues(): number {
    return this.nbrIssues;
  }

  setNbrIssues(value: number) {
    this.nbrIssues = value;
  }

  getUserName(): string {
    return this.userName;
  }

  setUserName(value: string) {
    this.userName = value;
  }

  getAvatar(): string {
    return this.avatar;
  }

  setAvatar(value: string) {
    this.avatar = value;
  }
}
