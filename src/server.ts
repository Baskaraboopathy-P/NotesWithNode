import http from 'http';
import dotenv from 'dotenv';
import ServerRoutes from './routes/ServerRoutes';
require('./dbconfig/Connection')

dotenv.config();
import app from './index';

const server = http.createServer(app);

server.listen(process.env.DB_PORT, () => {
    console.log(`Server running in port http://localhost:${process.env.DB_PORT}`);
});
app.use("/", ServerRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Node REST API")
})