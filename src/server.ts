import express from 'express';
import 'dotenv/config';
import router from './router';

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());

app.use(router)

app.listen(PORT, () => {
	console.log(
		`server is running on the port ${PORT}\n${process.env.BASE_URL}${PORT}`
	);
});
