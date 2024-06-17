## Music Podcast App

This project is a web application for listening to music podcasts. The application consists of three main views: 
 - Initial view. 
 - Podcast detail view. 
 - Podcast episode detail view.

## Technologies

<div align="center">
 <em><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></em>
 <em><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></em>
 <em><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></em>
 <em><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></em>
 <em><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/></em>
 <em><img width="50" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest"/></em>
 <em><img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/></em>
</div>

- **Next.js:** _Used as the main framework for the web application._
- **React:** _JavaScript library used to build the user interface._
- **TypeScript:** _Used to add static typing to the code._
- **CSS Modules:** _Used to modularise and encapsulate CSS styles._
- **Jest:** _Unit testing framework used to write and run tests._
- **React Testing Library**: _Used to facilitate writing unit tests for React components._
- **npm:** _Install dependencies and packages._


## Getting Started

### 1. Install dependencies:

```bash
npm install
# or
npm i
```

### 2. Run the app:
   - 2.1 Run the production server:
     > For run production server is necessary have a build first.
     ```bash
     npm run start
     ```
   - 2.2 Run the development server:
     ```bash
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     # or
     bun dev
     ```
### 3. Build the app:
_The builds will be saved on the_ 📁.next _folder located in the root project_.
 #### 3.1 Production mode:
 > Compilation in ***production*** mode will generate minimised and concatenated assets.
   ```bash
   npm run build
   ```
#### 3.2 Development mode:
```bash
npm run dev
```

### 4. Design & Architecture:
- The app have been developped following the SOLID principles for avoi repeated code and promoting the usability of code.
- The main design pattern used in the app is the **Modular** design pattern, the components are organised in independent modules, thats make more easy reuse the components.
The architecture is an approach of classic **server-client** architecture where the clients make the request to external Apis and the servers contain the modules that are responsible for calling the modules in the clients folder from the React components. These modules are responsible for orchestrating HTTP requests and processing responses. React components do not need to know how HTTP requests are made, which simplifies their code and improves modularity.
- Some custome hooks have been implmented to reuse code.
- React Context have been implemented to consume data and make more easy access to information.

