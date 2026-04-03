import app from './app.js';
import { PORT } from './config/constants.js';

app.listen(PORT, error => {
  if (error instanceof Error) {
    console.log(error);
    throw error;
  }

  console.log(`server is running on port ${PORT}`);
});
