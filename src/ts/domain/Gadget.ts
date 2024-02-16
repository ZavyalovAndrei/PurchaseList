import Buyable from './Buyable';

export default class Gadget implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        public quantity = 1,
        readonly increasable = true,
    ) { }
}