export class Lamp {
  private id: number;
  private  state: boolean;
  private color? : number;

  constructor(id: number) {
    this.id = id;
    this.state = false;
  }

  public On(): void{
    this.state = true;
  }
  public Off(): void{
    this.state = false;
  }
  public SetState(state: boolean): void{
    this.state = state;
  }
  public GetState(): boolean{
    return this.state;
  }

  public GetId(): number{
    return this.id;
  }


}
