import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
	console.log(
		`server is running on the port ${PORT}\n${process.env.BASE_URL}${PORT}`
	);
});
