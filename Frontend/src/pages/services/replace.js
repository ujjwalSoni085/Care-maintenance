const fs = require('fs');
const path = require('path');

const files = [
  'ACServicesPage.jsx',
  'ApplianceMaintenancePage.jsx',
  'Carpainter.jsx',
  'ElectricianPage.jsx',
  'PestControlPage.jsx',
  'PlumberPage.jsx',
  'WaterTankCleaningPage.jsx'
];

const dir = 'c:/Users/ujjwa/Desktop/Care-maintenance-main (1)/Frontend/src/pages/services';

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(File not found: );
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;

  const scheduleRegex = /<button className=flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-primary\/90 transition-all duration-300>([\s\S]*?)(Schedule Service|Schedule Cleaning)([\s\S]*?)<\/button>/g;
  
  if (scheduleRegex.test(content)) {
    content = content.replace(scheduleRegex, '<Link to=/contact className=flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90 transition-all duration-300></Link>');
    modified = true;
  }

  const pricingRegex = /<button className=flex items-center justify-center gap-2 bg-surface-dark text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-surface-dark\/90 transition-all duration-300>([\s\S]*?)View Pricing([\s\S]*?)<\/button>/g;
  
  if (pricingRegex.test(content)) {
    content = content.replace(pricingRegex, '<Link to=/#service-price-box className=flex items-center justify-center gap-2 bg-surface-dark text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-surface-dark/90 transition-all duration-300> Pricing</Link>');
    modified = true;
  }
  
  if (modified) {
    if (!content.includes(import { Link } from 'react-router-dom';)) {
      content = content.replace(/import React/, import { Link } from 'react-router-dom';\nimport React);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(Updated );
  }
});
