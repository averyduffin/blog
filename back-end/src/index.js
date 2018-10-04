import express from 'express';
import bodyParser from 'body-parser';

import logger from './logger';
import './db';
import { getAllArticles, getArticle } from './routes/articles';
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/articles', getAllArticles);
app.get('/api/articles/:id', getArticle);

app.listen(PORT, () => logger.info(`Backend app listening on port ${PORT}`));
