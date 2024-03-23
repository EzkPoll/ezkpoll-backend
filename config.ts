// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { getBoolean, getNumber, getString } from 'utils/helper';

export const CONFIG = {
  PORT: getNumber(process.env.PORT),
  SEPOLIA_PK: getString(process.env.SEPOLIA_PK),
  INFURA_API: getString(process.env.INFURA_API),
};
