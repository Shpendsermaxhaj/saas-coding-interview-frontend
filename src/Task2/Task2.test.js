import { updateQuality} from "./Task2";

describe('updateQuality', () => {
    it('increase quality by 1 if type is TICKETS and sellIn is >= 10',() => {
        const products = [
            { type: 'TICKETS', sellIn: 10, quality: 10 },
        { type: 'TICKETS', sellIn: 11, quality: 10 },
    ];

        const expected = [
            { type: 'TICKETS', sellIn: 9, quality: 11 },
            { type: 'TICKETS', sellIn: 10, quality: 11 },
        ];

        expect(updateQuality(products)).toEqual(expected);
    })

    it('increase quality by 2 if type TICKETS and sellIn is < 10 and >1',()=>{
        const products = [
            { type: 'TICKETS', sellIn: 9, quality: 10 },
            { type: 'TICKETS', sellIn: 2, quality: 10 },
        ];

        const expected = [
            { type: 'TICKETS', sellIn: 8, quality: 12 },
            { type: 'TICKETS', sellIn: 1, quality: 12 },
        ];


        expect(updateQuality(products)).toEqual(expected);

    })


    it('quality of a TICKETS item drops to 0 when sellIn is <=.',()=> {
        const products = [
            { name: 'concert', type: 'TICKETS', sellIn: 0, quality: 50, isSecondHand: false },
        ];

    const updated = updateQuality(products);

    const updatedTicket = updated.find(p => p.name ==='concert');

    expect(updatedTicket.quality).toEqual(0);
    })

    it('quality of a NORMAL item decreases by 1 when sellIn is > than 0 and quality > 0',()=> {
        const products = [
            { name: 'book', type: 'NORMAL', sellIn: 5, quality: 50, isSecondHand: false },
        ];

        const updated = updateQuality(products);

        const updatedTicket = updated.find(p => p.name ==='book');

        expect(updatedTicket.quality).toEqual(49);
    })



    it('the quality of a NORMAL item decreases by 2 when sellIn is 0 or less and quality > 0',()=> {
        const products = [
            { name: 'book', type: 'NORMAL', sellIn: 0, quality: 50, isSecondHand: false },
        ];

        const updated = updateQuality(products);

        const updatedTicket = updated.find(p => p.name ==='book');

        expect(updatedTicket.quality).toEqual(48);
    })


    it('quality of a NORMAL item remains 0 when sellIn > 0 and quality is 0',()=> {
        const products = [
            { name: 'book', type: 'NORMAL', sellIn: 5, quality: 0, isSecondHand: false },
        ];

        const updated = updateQuality(products);

        const updatedTicket = updated.find(p => p.name ==='book');

        expect(updatedTicket.quality).toEqual(0);
    })



    it('quality of a NORMAL item that isSecondHand decreases by 2 each day, even when sellIn is > 0',()=> {
        const products = [
            { name: 'book', type: 'NORMAL', sellIn: 5, quality: 50, isSecondHand: true },
        ];

        const updated = updateQuality(products);

        const updatedTicket = updated.find(p => p.name ==='book');

        expect(updatedTicket.quality).toEqual(47);
    })


    it(' quality of all items is never below 0',()=> {
        const products = [
            {
                name: 'book',
                type: 'NORMAL',
                quality: 0,
                sellIn: 5,
                isSecondHand: true,
            },
            {
                name: 'concert',
                type: 'TICKETS',
                quality: 0,
                sellIn: 10,
                isSecondHand: false,
            },

        ];
        const updated = updateQuality(products);

        updated.forEach(p => {
            expect(p.quality).toBeGreaterThanOrEqual(0);
        });
    })

    it('sellIn of all items is never below 0', () =>{
        const products = [
            {
                name: 'book',
                type: 'NORMAL',
                quality: 50,
                sellIn: 0,
                isSecondHand: true,
            },
            {
                name: 'concert tickets',
                type: 'TICKETS',
                quality: 50,
                sellIn: 0,
                isSecondHand: false,
            },
        ];
        const updated = updateQuality(products);

        updated.forEach(p => {
            expect(p.sellIn).toBeGreaterThanOrEqual(0);
        });

    })

    it('sellIn of all items decreases by 1 each day', ()=> {
        const products = [
            {
                name: 'book',
                type: 'NORMAL',
                quality: 50,
                sellIn: 4,
                isSecondHand: true,
            },
            {
                name: 'concert tickets',
                type: 'TICKETS',
                quality: 50,
                sellIn: 10,
                isSecondHand: false,
            },
        ];
        const updated = updateQuality(products);

        updated.forEach(p => {
            expect(p.sellIn).toBe(p.sellIn--);
        });
    })

});



