# react-world-tour

## Topics Covered
- useState → used to hold and update data
- useEffect → handle side effects in a project i.e. fetch(), setTimeout(), setInterval() etc.
- Project resources: [Rest Countries](https://restcountries.com/)
- Component call for each country (give an unique key data to handle virtual dom by react)
- Turn of Prop Validation `'react/prop-types': 'off'` in **.eslintrc.cjs** file (es lint rules)
- JSX (JavaScript XML) HTML like code
- **Conditional Rendering** (add styles, class, element etc. conditionally)
- Props Drilling / State Lifting
- Multi-level props drilling (Will use **Context API** in future for this)
- Update Array using **spread operator** as `push()`/`pop()` won't work give result in react for state
- Click on child but state & event handler in parent (pass both state & event as props to child component)
- `npm run build` to build a minified version of react project (it will be stored in a new folder, named **dist**)
- `surge dist` to deploy project by uploading **dist** folder to *surge*

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Live Preview: [Click Here](http://terrible-oil.surge.sh/)
