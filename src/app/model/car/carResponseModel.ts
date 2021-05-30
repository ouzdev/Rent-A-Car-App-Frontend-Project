import { ResponseModel } from '../responseModel';
import {Car} from './car';
import { CarDetails } from './cardetails';

export interface CarResponseModel extends ResponseModel{
  data:CarDetails[];
}
