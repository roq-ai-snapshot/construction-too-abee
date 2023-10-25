import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  user_id: string;
  tool_id: string;
  rental_start_time: any;
  rental_end_time: any;
  total_price: number;
  payment_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tool_id?: string;
  payment_status?: string;
}
