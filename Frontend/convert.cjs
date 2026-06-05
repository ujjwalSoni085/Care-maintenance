const fs = require('fs');
const path = require('path');

const convertHtmlToJsx = (html) => {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<img([^>]*[^/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^/])>/g, '<input$1 />')
    .replace(/<br([^>]*[^/])>/g, '<br$1 />')
    .replace(/<hr([^>]*[^/])>/g, '<hr$1 />');
};

const extractBody = (html) => {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (match) {
    // some cleaning, removing the script tags
    let body = match[1];
    body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return convertHtmlToJsx(body);
  }
  return '';
};

const processFile = (inputFile, componentName) => {
  const filePath = path.join(__dirname, 'scratch', inputFile);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${inputFile}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  let jsx = extractBody(html);

  const componentContent = `import React from 'react';\n\nconst ${componentName} = () => {\n  return (\n    <div className="stitch-redesign">\n      ${jsx}\n    </div>\n  );\n};\n\nexport default ${componentName};\n`;

  const outPath = path.join(__dirname, 'src', 'pages', 'redesign', `${componentName}.jsx`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, componentContent, 'utf8');
  console.log(`Generated ${componentName}.jsx`);
};

processFile('hero.html', 'HomeRedesign');
processFile('residential.html', 'ResidentialRedesign');
processFile('commercial.html', 'CommercialRedesign');
processFile('annual.html', 'AnnualRedesign');
processFile('faq.html', 'FAQRedesign');

