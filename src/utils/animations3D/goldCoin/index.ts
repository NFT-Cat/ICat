import GoldCoin from './GoldCoin';
const endy= 400
const coin_position = {
    'key4': {
        startY: 225,
        startX: 304,
        endY: endy,
        endX: 303.5     // 4
    },
    'key5': {
        startY: 206,
        startX: 135,
        endY: endy,     // 1
        endX: 303.5
    },
    'key2': {
        startY: 225,
        startX: 196,
        endY: endy,      // 2
        endX: 303.5
    },
    'key3': {
        startY: 206,
        startX: 253,           // 3
        endY: endy,
        endX: 303.5
    },
    'key1': {
        startY: 294,
        startX: 213,        // 5
        endY: endy,
        endX: 303.5
    }

};
export default class Coins {
    static coins: {};
     public static coin_position=coin_position;
    constructor() {
    }
    static createCoin() {
        this.coins = {};
        //创建金币
        return new Promise(async (resolve) => {
            Object.entries(this.coin_position).forEach((_item) => {
                this.coins[_item[0]] = new GoldCoin(_item[1]).load();
            });
            resolve(true);
        });
    }
    //播放金币
    static coinAnimation(list) {
        return new Promise(async (resolve) => {
            for (const n in list) {
                   await this.coins['key' + Number(n)+1].play(n,true);
            }
            resolve(true);
        });
    }
}
