// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { getBoolean, getNumber, getString } from 'utils/helper';

export const CONFIG = {
  PORT: getNumber(process.env.PORT),
};
