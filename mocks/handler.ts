import { rest } from 'msw';

export const handlers = [
    rest.get('/', (req, res, ctx) => {
        return res(ctx.json([{ id: 1, name: "Avinash" }]));
    })
];