import { rest } from 'msw';

export const handlers = [
    rest.get('/', (req, res, ctx) => {
        return res(ctx.json([{ id: 1, name: "Avinash" }]));
    }),

    rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
        return res(ctx.json([
            { title: "Avinash" },
            { title: "Atul" },
            { title: "Poonam" },
            { title: "Madhuri" },
            { title: "Vikas" },
            { title: "Amol" },
        ]));
    }),
];