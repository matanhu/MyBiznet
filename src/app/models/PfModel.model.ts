export class PfModel {
  constructor (
    public name?: string,
    public source?: string,
    public sourcePort?: number,
    public destination?: string,
    public destinationPort?: number,
    public comment?: string
  ) {

  }
}
