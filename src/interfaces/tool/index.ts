import { InventoryInterface } from 'interfaces/inventory';
import { RentalInterface } from 'interfaces/rental';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  type: string;
  brand: string;
  price: number;
  quantity: number;
  store_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  rental?: RentalInterface[];
  store?: StoreInterface;
  _count?: {
    inventory?: number;
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  brand?: string;
  store_id?: string;
}
