/* @flow */

export default class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): number {
    return `${this.name} makes a noise.`;
  }
}
