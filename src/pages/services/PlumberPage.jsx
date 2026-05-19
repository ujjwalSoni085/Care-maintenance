import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';
import { serviceData } from './serviceData';

const PlumberPage = () => <ServiceDetailTemplate service={serviceData['plumber']} />;
export default PlumberPage;
