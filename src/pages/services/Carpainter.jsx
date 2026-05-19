import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';
import { serviceData } from './serviceData';

const CarpenterPage = () => <ServiceDetailTemplate service={serviceData['carpenter']} />;
export default CarpenterPage;
