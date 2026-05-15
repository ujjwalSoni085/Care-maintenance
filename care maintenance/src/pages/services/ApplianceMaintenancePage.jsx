import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';
import { serviceData } from './serviceData';

const ApplianceMaintenancePage = () => <ServiceDetailTemplate service={serviceData['appliance-maintenance']} />;
export default ApplianceMaintenancePage;
