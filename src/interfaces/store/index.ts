import { InventoryInterface } from 'interfaces/inventory';
import { ToolInterface } from 'interfaces/tool';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  location: string;
  organization_id: string;
  opening_time: any;
  closing_time: any;
  contact_number: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  tool?: ToolInterface[];
  organization?: OrganizationInterface;
  _count?: {
    inventory?: number;
    tool?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  organization_id?: string;
  contact_number?: string;
}
