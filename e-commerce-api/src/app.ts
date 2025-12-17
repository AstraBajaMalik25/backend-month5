import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import productRoutes from './routes/product.route';
import transactionRoutes from "./routes/transaction.route";
import userRoutes from './routes/user.route';
import { errorHandler } from './middlewares/error.handler';
import authRoutes from './routes/auth.route';
import profileRoutes from './routes/profile.route';


const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
  req.startTime = Date.now();
  const apiKey = req.headers['x-api-key'] as string;
  if (!apiKey) return res.status(401).json({ success: false, message: 'Kirim header X-API-Key' });
  req.apiKey = apiKey;
  next();
});

// Routes
app.get('/', (req, res) => {
  const waktu = Date.now() - (req.startTime || 0);
  res.json({ message: `Halo pemilik API Key: ${req.apiKey}! Hari 5 – MVC E-Commerce + Service`, waktu_proses: `${waktu}ms` });
});

app.use('/api', productRoutes);


app.use(errorHandler);

app.use("/api", transactionRoutes);

app.use('/api', userRoutes);

app.use('/api', authRoutes);

app.use('/api', profileRoutes); 




export default app;