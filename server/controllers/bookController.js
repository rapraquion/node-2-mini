const books = [];

const id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const { title, author } = req.body;
        let book = {
            id,
            title,
            author
        };
        books.push(book);
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        const bookUpdate = books.find(book => Number(req.params.id) === book.id);
        if (bookUpdate) {
            const { title, author } = req.body;
            Object.assign(bookUpdate, {
                ...(title && { title }),
                ...(author && { author }),
            });
            return res.status(200).send(books);
        }
        return res.status(400).send({ error: 'Could not book.' })
    }
};