import { ResponseModel } from '../responseModel';
import { RentalDetailDto } from './rentalDetailDto';

export interface RentalDetailResponseModel extends ResponseModel{
  data:RentalDetailDto[];
}
