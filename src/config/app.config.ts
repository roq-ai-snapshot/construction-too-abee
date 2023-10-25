interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee'],
  tenantName: 'Organization',
  applicationName: 'Construction Tool Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read tool information', 'Book a rental', 'View rental history', 'View store information'],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage stores', 'Manage tools'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/7bc9c9d9-934c-47d6-973b-aab03d1a56bd',
};
