import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';
import { serviceData } from './serviceData';

const ElectricianPage = () => <ServiceDetailTemplate service={serviceData['electrician']} />;
export default ElectricianPage;
