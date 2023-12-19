# To setup react project

- https://www.youtube.com/watch?v=SqcY0GlETPk&t=297s
  - `npm create vite@latest` / `npm create vite@4.1.0`
  - type ur project name
  - select react then select typescript
  - type `code .` to start VS code on the terminal path
  - then u can use VS code terminal by pressing `ctlr + ` `
  - then type `npm run dev` in terminal
- install prettier VS code extension
  - then press `ctlr + shift + p` and choose "Format Document". And choose prettier as default formating
- install ES7+

  - in new empty component file, type `rafce`. Then it will auto generate a basic component code for you. Example

    ```
    import React from 'react'

    const Alert = () => {
      return (
          <div>Alert</div>
      )
    }

    export default Alert
    ```

- installing bootstrap
  - at terminal, type `npm i popper.js  bootstrap@latest` / `npm create bootstrap@5.2.3`
  - import this to main.tsx below into main.tsx file
    - `import 'bootstrap/dist/css/bootstrap.css'`
    - `import 'popper.js'`;
    - `import 'bootstrap/dist/js/bootstrap.bundle.min.js'`
- installing d3
  - at terminal type `npm install d3`
  - import this to main.tsx: `import * as d3 from 'd3';`
- installing fontawesome
  - at terminal type `npm install --save @fortawesome/fontawesome-free`
  - import this to main.tsx: `import "@fortawesome/fontawesome-free/css/all.css";`
- installing gantt chart
  - at teminal type `npm install gantt-task-react`
  - import this to main.tsx: `import "gantt-task-react/dist/index.css";`
  - refer to https://github.com/MaTeMaTuK/gantt-task-react
- install "Reach Developer Tool" for browser
  - with this, F12 has 2 more options in menu bar: Components and Profiler
    - Components can see the components props and DOM it responsible
    - choose the components and click on "View Source Code" icon <>
- publish page to github
  - add this line `base: "/<project name>/"` in vite.config.ts, under `export default defineConfig`.
  - add folder "./github/workflows/"
    - add file under it "deploy.yml"
      ```
        name: Deploy

        on:
          push:
            branches:
              - main

        jobs:
          build:
            name: Build
            runs-on: ubuntu-latest

            steps:
              - name: Checkout repo
                uses: actions/checkout@v2

              - name: Setup Node
                uses: actions/setup-node@v1
                with:
                  node-version: 16

              - name: Install dependencies
                uses: bahmutov/npm-install@v1

              - name: Build project
                run: npm run build

              - name: Upload production-ready build files
                uses: actions/upload-artifact@v2
                with:
                  name: production-files
                  path: ./dist

          deploy:
            name: Deploy
            needs: build
            runs-on: ubuntu-latest
            if: github.ref == 'refs/heads/main'

            steps:
              - name: Download artifact
                uses: actions/download-artifact@v2
                with:
                  name: production-files
                  path: ./dist

              - name: Deploy to GitHub Pages
                uses: peaceiris/actions-gh-pages@v3
                with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./dist
      ```
  - refer to https://www.youtube.com/watch?v=XhoWXhyuW_I;

# Starting to code demo project

- Create a file with with function based component
  - `.ts` for typescript
  - `.tsx` for component

# Shortcuts

    - `ctlr + ` `: for opening/closing terminal
    - `ctlr + d`: for highlighting same name. Can spam
    - `ctlr + shift + p`: to show all the settings (command pallete)
        - Format Document: Choose prettier
        - Wrap with abbreviation: To wrap selected text with another DOM. Something like ctlr k + ctlr s in VS studio for #region

# React knowledge

- Convention

  - component function & filename with Pascal case

- JSX: Javascript XML

  - which will auto convert it to javascript. You can try on https://babeljs.io/
  - example

    ```
    return <div>Hello World</div>

    // Will become.
    import { jsx as _jsx } from "react/jsx-runtime";
    /*#__PURE__*/_jsx("h1", {
    children: "Hellow World"
    });
    ```

  - the component name will be the html Tag later. Example

    ```
    function Message() {}

    function App() {
        return <div><Message/></div>
    }
    ```

  - in typescript, `class` is a reserved keyword. So use `className` instead

    ```
    function Message() {}

    function App() {
        return <div 'className=text-center'><Message/></div>
    }
    ```

- Component

  - a component only can return single DOM. Example below will give you error
    ```
    return (
        <h1>Hello World</h1>
        <div>Hell World</div>
    );
    ```
  - to solve a multiple element issue. We can wrap all those with `<div></div>` or `<Fragment>`. Where `<>` also means `<Fragment>`. Example
    ```
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    );
    ```

- Condition

  - to write a if else inside jsx, we can use ternary
  - to write a if only inside jsx, we can use xxx && yyy.

- Function

  - Specific function argument type
    - javascript is a loosely type language. So sometimes argument not sure what type it is then there is no auto complete on editor
    - to solve this,
      - just add `: type`. Example: `(event: MouseEvent) => console.log(event);`.
      - also import the event by `import { MouseEvent } from "react";`

- Hook / State

  - tell react that this variable value will changed over time. Example

    ```
        // Declaration and initialization to -1 where -1 is no selection
        const [selectedIndex, setSelectedIndex] = useState(-1);
        // arr[0]; // variable (selectedIndex)
        // arr[1]; // updated function

        // Caller
        onClick={() => setSelectedIndex(index)}
    ```

- Props

  - something like function argument by using interface. Example

    ```
        interface Props {
            items: string[];
            heading: string;
        }

        // Ugly way
        function ListGroup(props: Props) {
            console.log(props.items, props.heading);
        }

        // Pretty way
        function ListGroup({items, heading}: Props) {
            console.log(items, heading);
        }

        // Caller
        return (
            <div>
                <ListGroup
                    items={["abc", "xyz"]}
                    heading="title"
                />
            </div>
        )
    ```

  - pass in as html tag instead of parameter. Example

    ```
    // Component
    interface Props {
      children: ReactNode;
    }

    const Alert = ({ children }: Props) => {
      return <div className="alert alert-primary">{children}</div>;
    };

    // Caller
    function App() {
      return (
        <div>
          <Alert>
            Hello <span>MY</span> World
          </Alert>
        </div>
      );
    }
    ```

  - Props with default value. Example

    ```
      interface Props {
        name: string;
        text?: string;  // put question mark after to mention it is optional
        color?: "primary" | "secondary";  // putting this to allow these 2 options as argument value
      }

      const Alert = ({ name, text = "Hello World"}) => {
        console.log(name);
        console.log(text);
      };
    ```
