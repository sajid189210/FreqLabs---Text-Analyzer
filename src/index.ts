import express from 'express';
import dotenv from 'dotenv';
import analyzerRoute from './routes/routes';
import errorHandler from './middleware/error.middleware'
import { fileURLToPath } from 'url';
import path from 'path';
dotenv.config();

const app = express();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

console.log(path.join(__dirname, 'views'))
app.use(express.static(path.join(process.cwd(), "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', analyzerRoute);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});