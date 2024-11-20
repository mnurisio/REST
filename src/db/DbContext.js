import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { RatsSchema } from '../models/Rats';
import { LocationSchema } from '../models/Locations';
import { MissionSchema } from '../models/Missions';

class DbContext {

  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatsSchema)
  Locations = mongoose.model('Location', LocationSchema)
  Missions = mongoose.model('Mission', MissionSchema)
}

export const dbContext = new DbContext()
