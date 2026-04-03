import { Pool } from 'pg';
import { DATABASE_URL } from './constants.js';
const pool = new Pool({
    connectionString: DATABASE_URL,
});
export default pool;
//# sourceMappingURL=pool.js.map