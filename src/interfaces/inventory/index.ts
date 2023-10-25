import { ToolInterface } from 'interfaces/tool';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  tool_id: string;
  store_id: string;
  quantity: number;
  last_updated: any;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  store?: StoreInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  store_id?: string;
}
