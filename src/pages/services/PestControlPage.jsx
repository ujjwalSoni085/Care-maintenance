import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';
import { serviceData } from './serviceData';

const PestControlPage = () => <ServiceDetailTemplate service={serviceData['pest-control']} />;
export default PestControlPage;
