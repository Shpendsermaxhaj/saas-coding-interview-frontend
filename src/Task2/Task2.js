import { useEffect } from 'react';
import {products} from "./products";

// # task2 (extend functionality, refactoring)
// we have an online shop with products. the structure of an item is:
// ```
// {
//   type: string, // TICKETS or NORMAL
//   sellIn: number, // e.g. days
//   quality: number, // arbitrary number e.g. 50
//   isSecondHand: boolean, // only NORMAL items
// }
// ```
// the items need to be updated each day, depending on the item type:
// - the quality of items decreases by 1 each day
// - if the sellIn is 0, item quality decreases twice as fast
// - quality is never below 0
// - quality of items of type ``TICKETS`` increases by 1
//     - if sellIn is below 10, the quality increases twice as fast (by 2)

//     - if sellIn turns to 0, the quality drops to 0 as well

// - the sellIn decreases by 1 each day, never below 0 -

// task:
// - we are starting to sell second hand items (property name is ``isSecondHand``).
//  their quality decreases by 2 each day even if the sellIn is greater than 0
// - please implement this new functionality but be careful not to break existing code
// - you are even allowed to refactor or drop the whole existing code
// - to work on this, go to ``App.js`` and comment in the ``Task2`` import

/*
 {
                name: 'mouse',
                type: 'NORMAL',
                quality: 20,
                sellIn: 5,
                isSecondHand: true,
            },
            */

export function updateQuality(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].type == 'TICKETS' && products[i].sellIn >= 10) {
            products[i].quality = products[i].quality + 1;
            products[i].sellIn = products[i].sellIn - 1;
        } else {
            if (
                products[i].type == 'TICKETS' &&
                products[i].sellIn < 10 &&
                products[i].sellIn > 1
            ) {
                products[i].quality = products[i].quality + 2;
                products[i].sellIn = products[i].sellIn - 1;
            } else {
                if (products[i].type == 'TICKETS' && products[i].sellIn <= 1) {
                    products[i].quality = 0;
                    products[i].sellIn = 0;
                }

                if (
                    products[i].type == 'NORMAL' &&
                    products[i].sellIn <= 0 &&
                    products[i].quality > 0
                ) {
                    products[i].quality = products[i].quality - 2;
                    products[i].sellIn = products[i].sellIn - 1;
                }

                if (
                    products[i].type == 'NORMAL' &&
                    products[i].sellIn > 0 &&
                    products[i].quality == 0
                ) {
                    products[i].quality = 0;
                    products[i].sellIn = products[i].sellIn - 1;
                } else {
                    if (
                        products[i].type == 'NORMAL' &&
                        products[i].sellIn > 0 &&
                        products[i].quality > 0
                    ) {
                        products[i].quality = products[i].quality - 1;
                        products[i].sellIn = products[i].sellIn - 1;
                    }
                }

                // Check if product isSecondHand and decrease quality by 2
                if (products[i].isSecondHand) {
                    products[i].quality -= 2;
                }
            }
        }

        if (products[i].sellIn <= 0) {
            products[i].sellIn = 0;
        }

        if (products[i].quality <= 0) {
            products[i].quality = 0;
        }
    }

    return products;
}

export function Task2() {
    useEffect(() => {
        const updated = updateQuality(products);
        console.log(updated);
    }, []);
    return null;
}
